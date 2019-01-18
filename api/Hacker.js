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
      res.status(201).send("Login successful");
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

router.get('/populate', async (req, res, next) => {
  Hacker.bulkCreate([
    {
      username: 'potato',
      passwordHash: 'lkjqqereqopiu',
      salt: 'zpoiqwuepriu',
      firstName: 'Miguel',
      lastName: 'Acero',
      email: 'potato@gmail.com',
    },
  ])
  .then(res.status(201).send("populate complete"));
});


// router.post('/dogs', (req, res, next) =>{})