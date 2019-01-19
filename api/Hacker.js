const router = require('express').Router();
const { Hacker } = require('../models')
const saltHash = require('./saltHash');

module.exports = router;

router.get('/', async (req, res, next) => {
  const hackers = await Hacker.findAll();
  res.send(hackers);
})

router.post('/login', async(req, res, next) => {
  const { username, password } = req.body;
  const hacker = await Hacker.findOne({
    where: {
      username: username
    }
  });
  if (!hacker){
    res.status(404).send("Can't find user " + username);
  }else{
    let verified = saltHash.verifyPass(password, hacker.salt, hacker.passHash);
    if(!verified){
      res.status(404).send("Password Incorrect");
    }else{
      res.status(201).send(hacker);
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
   * Confirm this is allowed
   * Then check if swipedOn is in my likesMe
   * If so, move swipedOn into my used and move my name into swipedOn's matched
   * 
   * Else, check if my name is in swipedOn's used
   * If so, move swipedOn's name into my used
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
      if(hacker.likesMe.includes(swipedOn)){
        hacker.used.push(swipedOn);
        hacker2.matched.push(user);
        hacker.save().then(() => {});
        hacker2.save().then(() => {});
      }else{
        if(hacker2.used.includes(user)){
          //
        }else{
          //
        }
      }

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
   * Confirm this is allowed
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
      /**
       * This is where all of the logic actually is
       */
      if(hacker.likesMe.includes(swipedOn)){
        //
      }else{
        if(hacker2.used.includes(user)){
          //
        }else{
          //
        }
      }

    }).catch(err => {
      res.status(404).send("Error found, check console");
      console.log(err);
    })
  }).catch(err => {
    res.status(404).send("Error found, check console");
    console.log(err);
  });
})

router.get('/populate', async(req, res, next) => {
  const { salt, passHash } = saltHash.saltHashPassword("password");
  let potato = saltHash.saltHashPassword("password2");
  const salt2 = potato.salt;
  const passHash2 = potato.passHash;
  let hack_promise = await Hacker.bulkCreate(
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

// router.post('/dogs', (req, res, next) =>{})