const router = require('express').Router();
const { db, Hacker } = require('../models')
const saltHash = require('./saltHash');

module.exports = router;

router.get('/', async (req, res, next) => {
  const hackers = await Hacker.findAll();
  res.send(hackers);
})

/**
 * Login Post
 * Success Response: 
 * { data: { isLoggedIn: true, username, hackathons } }
 */

router.post('/login', async(req, res, next) => {
  const { username, password } = req.body;
  const hacker = await Hacker.findOne({
    where: {
      username
    }
  });
  if (!hacker){
    res.status(404).send("Can't find user " + username);
  }else{
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
          imageUrl: hacker.imageUrl,
          githubUrl: hacker.githubUrl,
          hackathons: hacker.hackathons,
          matched: hacker.matched,
          used: hacker.used,
        }
      });
    }
  }
})

router.post('/register', async(req, res, next) => {
  const { username, password, firstName, lastName, email, githubUrl } = req.body;
  const { salt, passHash } = saltHash.saltHashPassword(password);
  let hack_promise = await Hacker.create({
    username: username,
    passHash: passHash,
    salt: salt,
    firstName: firstName,
    lastName: lastName,
    email: email,
    githubUrl: githubUrl
  })
  .then(() => {
    res.status(201).send("user registered");
    return;
  }).catch((err) => {
    res.status(404).send("Error found: " + err);
    return;
  });
})

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
       */
      let likesMe1 = hacker.likesMe;
      let used1 = hacker.used;
      let likesMe2 = hacker2.likesMe;
      let used2 = hacker2.used;
      let matched2 = hacker2.matched;
      if(likesMe1.includes(swipedOn)){
        used1.push(swipedOn);
        matched2.push(user);
        likesMe1.splice(likesMe1.indexOf(swipedOn), 1);
      }else{
        if(used2.includes(user)){
          used1.push(swipedOn);
        }else{
          likesMe2.push(user);
        }
      }
      Hacker.update(
        {likesMe: likesMe1, used: used1},
        {where: {username: user}}
      )
      .then(() => {
        Hacker.update(
          {likesMe: likesMe2, used: used2, matched: matched2},
          {where: {username: swipedOn}}
        ).catch(err => console.log(err));
        res.status(201).send("Succeded");
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
      used1.push(swipedOn);
      if(likesMe1.includes(swipedOn)){
        likesMe1.splice(likesMe1.indexOf(swipedOn), 1);
        used2.push(user);
      }
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
 * The following functions need to be removed before deployment
 */


router.get('/populate', async(req, res, next) => {
  const { salt, passHash } = saltHash.saltHashPassword("password");
  let potato = saltHash.saltHashPassword("password2");
  const salt2 = potato.salt;
  const passHash2 = potato.passHash;
  await Hacker.bulkCreate(
    [
      {
        username: "kai",
        passHash: passHash,
        salt: salt,
        firstName: "Kaizen",
        lastName: "Castanos",
        email: "fake@mail.com",
      },
      {
        username: "bell",
        passHash: passHash2,
        salt: salt2,
        firstName: "Belle",
        lastName: "Clemente",
        email: "fake2@mail.com",        
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

router.get('/drop', (req, res, next) => {
  db.sync({force:true}).then(() => {
    res.send("Table Dropped");
    return;
  });
})

// router.post('/dogs', (req, res, next) =>{})