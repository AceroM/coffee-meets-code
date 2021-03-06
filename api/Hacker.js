const router = require('express').Router();
const { db, Hacker } = require('../models')
const saltHash = require('./saltHash');

const Sequelize = require("sequelize");
const Op = Sequelize.Op
module.exports = router;

/**
 * Get /
 * Returns a list of hacker objects
 * @params
 *    None
 * @return
 *    A list of hacker objects
 */
router.get('/', async (req, res, next) => {
  const hackers = await Hacker.findAll();
  res.send(hackers);
})

/**
 * Post /login
 * Verifies the login information of a user
 * @params
 *    A json of the form {
 *      username: string,
 *      password: string
 *    }
 * @return
 *    A json of the form {
 *      data: {
 *        isLoggedIn: boolean,
 *        username: string,
 *        firstName: string,
 *        lastName: string,
 *        email: string,
 *        imageUrl: string,
 *        githubUrl: string,
 *        hackathons: array,
 *        matched: array,
 *        used: array
 *      }
 *    }
 */
router.post('/login', async(req, res, next) => {
  const { username, password } = req.body;
  const hacker = await Hacker.findOne({
    where: {
      username
    }
  });
  if (!hacker){ //if you can't find the user
    res.status(404).send("Can't find user " + username);
  }else{
    //Authenticate by running a verifcation function
    let verified = saltHash.verifyPass(password, hacker.salt, hacker.passHash);
    if(!verified){
      res.status(404).send("Password Incorrect");
    }else{
      res.status(201).send({
        data: {
          isLoggedIn: true,
          username: username,
          firstName: hacker.firstName,
          lastName: hacker.lastName,
          email: hacker.email,
          age: hacker.age,
          imageUrl: hacker.imageUrl,
          description: hacker.description,
          githubUrl: hacker.githubUrl,
          hackathons: hacker.hackathons,
          matched: hacker.matched,
          used: hacker.used,
          matches: {},
          talkingTo: hacker.talkingTo
        }
      });
    }
  }
})

/**
 * Post /register
 * Registers a new user
 * @params
 *    A json of the form {
 *      username: string,
 *      password: string,
 *      firstName: string,
 *      lastName: string, 
 *      email: string,  
 *      githubUrl: string
 *    }
 * @return
 *    Status 201 and a message "user registered" if successful
 *    Status 404 and a message "error found" if unsuccessful
 */
router.post('/register', async(req, res, next) => {
  const { username, password} = req.body;
  const { salt, passHash } = saltHash.saltHashPassword(password);
  //I made a lot of default values for this to succeed
  await Hacker.create({
    username: username,
    passHash: passHash,
    salt: salt
  })
  .then((hacker) => {
    //Send the data back so that the user can be logged in after registration
    res.status(201).send({
      data: {
        isLoggedIn: true,
        username: username,
        firstName: hacker.firstName,
        lastName: hacker.lastName,
        email: hacker.email,
        age: hacker.age,
        imageUrl: hacker.imageUrl,
        description: hacker.description,
        githubUrl: hacker.githubUrl,
        hackathons: hacker.hackathons,
        matched: hacker.matched,
        used: hacker.used,
      }
    });
    return;
  }).catch((err) => {
    res.status(404).send("Error found: " + err);
    return;
  });
})


/**
 * Post /swipedRight
 * Simulates a swipeRight and modifies the database accordingly
 * Logic is written in comments in the function itself
 * @params
 *    A json of the form {
 *      user: string,
 *      swipedOn: string,
 *    }
 * @return
 *    Status 201 and a message "Succed" if successful
 *    Status 404 and a message "Error found" if unsuccessful
 */
router.post('/swipedRight', async(req, res, next) => {
  const {user, swipedOn} = req.body;
  /**
   * Logic is as follows: 
   * 
   * Check if swipedOn is in my likesMe
   * If so, move swipedOn into my used and move my name into swipedOn's matched
   * 
   * Else, check if my name is in swipedOn's used
   * If so, add swipedOn's name into my used
   * Else, move my name into swipedOn's likesMe
   */
  await Hacker.findOne({
    where: {
      username: user
    }
  }).then(hacker => {
    Hacker.findOne({
      where: {
        username: swipedOn
      }
    }).then(hacker2 => {
      /**
       * This is where all of the logic actually is
       * First step: copy all the arrays
       */
      let response = "Succeeded";
      let likesMe1 = hacker.likesMe;
      let used1 = hacker.used;
      let matched1 = hacker.matched;
      let likesMe2 = hacker2.likesMe;
      let used2 = hacker2.used;
      let matched2 = hacker2.matched;
      //If the person I swiped on likes me...
      if(likesMe1.includes(swipedOn)){
        //Match us, and remove him from my likes me array
        matched1.push(swipedOn);
        matched2.push(user);
        likesMe1.splice(likesMe1.indexOf(swipedOn), 1);
        response = "matched";
      }else{
        //If the person I liked swiped left on me...
        if(used2.includes(user)){
          //No one has to no (push the name to my used array)
          used1.push(swipedOn);
        }else{
          //Let them know I like them (push my name to their lieks me array)
          likesMe2.push(user);
        }
      }
      //Update the hackers with the new info
      Hacker.update(
        {likesMe: likesMe1, used: used1, matched: matched1},
        {where: {username: user}}
      )
      .then(() => {
        Hacker.update(
          {likesMe: likesMe2, used: used2, matched: matched2},
          {where: {username: swipedOn}}
        ).catch(err => console.log(err));
        res.status(201).send(response);
      })
      .catch(err => console.log(err));
      

    }).catch(err => {
      res.status(404).send("Error found, check console");
      console.log(err);
    })
  }).catch(err => {
    res.status(404).send("Error found, check console");
    console.log(err);
  });
  
})


/**
 * Post /swipedLeft
 * Simulates a swipeLeft and modifies the database accordingly
 * Logic is written in comments in the function itself
 * @params
 *    A json of the form {
 *      user: string,
 *      swipedOn: string,
 *    }
 * @return
 *    Status 201 and a message "Succeeded" if successful
 *    Status 404 and a message "Error found" if unsuccessful
 */
router.post('/swipedLeft', async(req, res, next) => {
  const {user, swipedOn} = req.body;
  /**
   * Logic is as follows: 
   * 
   * Move swipedOn's name into my used
   * If swipedOn's name is in my likesMe, remove it
   */
  await Hacker.findOne({
    where: {
      username: user
    }
  }).then(hacker => {
    Hacker.findOne({
      where: {
        username: swipedOn
      }
    }).then(hacker2 => {
      let likesMe1 = hacker.likesMe;
      let used1 = hacker.used;
      let used2 = hacker2.used;
      //Push their name into my used
      used1.push(swipedOn);
      if(likesMe1.includes(swipedOn)){
        //If they like me, then that's a yikes
        //Push my name into their used array
        likesMe1.splice(likesMe1.indexOf(swipedOn), 1);
        used2.push(user);
      }
      //Update the new information
      Hacker.update(
        {likesMe: likesMe1, used: used1},
        {where: {username: user}}
      ).catch(err => console.log(err));
      Hacker.update(
        {used: used2},
        {where: {username: swipedOn}}
      ).catch(err => console.log(err));
      res.status(201).send("Succeeded");
      return; 
    });
  }).catch(err => {
    res.status(404).send("Error found, check console");
    console.log(err);
  });
})

/**
 * Get /allExcept/:username
 * Returns a list of hackers who aren't the specified user
 * and haven't already been swiped on by the user
 * @params
 *    A string username
 * @return
 *    Status 201 and an array of hackers if successful
 */
router.get('/allExcept/:username', async (req, res, next) => {
  await Hacker.findAll({
    where: {
      username: {
        [Op.not]: req.params.username
      }
    }
  }).then(hackers => {
    Hacker.findOne({
      where: {
        username: req.params.username
      }
    }).then(me => {
      //"me" is the one hacker
      //Filter out all hackers that are in my used and matched arrays
      let result = hackers.filter(x => {
        return (!me.used.includes(x.username) 
             && !me.matched.includes(x.username));
      });
      //Send the result straight
      res.status(201).send(result);    
    }).catch(err => console.log(err));    
  }).catch(err => {
    res.status(404).send("Cannot find username, check console");
    console.log(err);
  });
})

/**
 * Get /matched/:username
 * Returns a list of matches with 
 * @params
 *    A string username
 * @return
 *    Status 201 and an array of usernames if successful
 */
router.get('/matched/:username', async (req, res, next) => {
  //return image url also
  Hacker.findOne({
    where: {
      username: req.params.username
    }
  }).then(hackers => {
    let matched = hackers.matched;
    Hacker.findAll({
      attributes: ['username', 'imageUrl'],
      where: {
        username: {
          [Op.or]: matched
        }
      }
    }).then(final => {
      final = final.map(m => {
        m['dataValues']['messages'] = []
        return m;
      });
      res.status(201).send(final);
    })
    
  });    
  
})


/**
 * The following functions need to be removed before deployment
 * and are just for debugging
 */


 //Populates the database
router.get('/populate', async(req, res, next) => {
  const { salt, passHash } = saltHash.saltHashPassword("password");
  await Hacker.bulkCreate(
    [
      {
        username: "mark",
        description: "just some generic guy",
        passHash: passHash,
        salt: salt,
        firstName: "Mark",
        lastName: "Finch",
        email: "fake@mail.com",
        age: 69,
        hackathons: ["<womxn/hacks>", "CUHackit"],
        matched: ['jenny', 'kai'],
        talkingTo: "jenny"
      },
      {
        username: "jenny",
        description: "#GirlsCanCode",
        passHash: passHash,
        salt: salt,
        firstName: "Jenny",
        lastName: "Hunter",
        email: "fake3@mail.com",        
        talkingTo: "kai",
        matched: ['mark', 'kai']
      },
      {
        username: "lucian",
        description: "kaizen chose this name lol",
        passHash: passHash,
        salt: salt,
        firstName: "Lucian",
        lastName: "Senna",
        email: "fake4@mail.com",        
      },
      {
        username: 'kai',
        description: "kaizennnnnn",
        imageUrl: 'https://avatars0.githubusercontent.com/u/8743619?s=460&v=4',
        passHash: passHash,
        salt: salt,
        firstName: "Kaizen",
        lastName: "Castanos",
        email: "kaizenc98@gmail.com",
        talkingTo: "mark",
        matched: ['mark', 'jenny']
      },
      {
        username: 'miguel',
        imageUrl: 'https://avatars1.githubusercontent.com/u/21187304?s=460&v=4',
        passHash: passHash,
        salt: salt,
        firstName: "Miguel",
        lastName: "Acero",
        email: "miguelacero528@gmail.com",
        talkingTo: "",
        matched: []
      }, 
      {
        username: 'aj',
        imageUrl: 'https://i.imgur.com/K3HxxZq.jpg',
        passHash: passHash,
        salt: salt,
        firstName: "AJ",
        lastName: "Lapid",
        email: "ajlapid@gmail.com",
        talkingTo: "",
        matched: []
      },
      {
        username: 'jonrosado',
        description: 'cool instructor guy',
        imageUrl: 'https://avatars1.githubusercontent.com/u/26702265?s=460&v=4',
        passHash: passHash,
        salt: salt,
        firstName: "Jon",
        lastName: "Rosado",
        email: "jonrosado@gmail.com",
        talkingTo: "",
        matched: []
      }
    ]
    )
  .then(() => {
    res.status(201).send("Populate complete");
    return;
  }).catch((err) => {
    res.status(404).send("Error found, check console");
    console.log(err);
    return;
  });
})

//drop table
router.get('/drop', (req, res, next) => {
  db.sync({force:true}).then(() => {
    res.send("Table Dropped");
    return;
  });
})

/**
 * Adds a hackathon to a user
 */
router.post('/hackathon/add', (req, res) => {
  const { username, hackathonName } = req.body;
  Hacker.findAll({
    where: {
      username
    }
  })
  .then(hacker => {
    let hackathons = hacker[0].hackathons;
    hackathons.push(hackathonName);
    Hacker.update({ hackathons }, {where: { username }})
    .catch(err => {
      res.status(404).send("Error found, check console");
      console.log(err);
    })
    return hackathons
  })
  .then(m => res.status(201).send(m))
  .catch(err => {
    res.status(404).send("Error found, check console");
    console.log(err);
  })
})