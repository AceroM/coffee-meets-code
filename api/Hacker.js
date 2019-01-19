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
  const {user, passHash, swipedOn} = req.body;
  /**
   * Confirm this is allowed
   * Then check if swipedOn is in my likesMe
   * If so, move swipedOn into used and move my name into swipedOn's matched
   * Else, put my name in my swipedOn's likesMe
   */
})

router.post('/swipedLeft', async(req, res, next) => {
  const {user, passHash, swipedOn} = req.body;
  /**
   * Confirm this is allowed
   * Move swipedOn's name into my used (remove from likesMe)
   * Then check if my name is in swipedOn's likesMe
   * If so, move swipedOn into used and move my name into swipedOn's matched
   * Else, put my name in my swipedOn's likesMe
   */
})

// router.post('/dogs', (req, res, next) =>{})