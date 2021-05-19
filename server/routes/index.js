const express = require('express');
const users = require('../model/users');
const router = express.Router();

const redirectLogin = (req, res, next) => {
  if (!req.session.userId) res.status(400).send('You are not logged in!');
  else next();
};
router.post('/login', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  if (email && password) {
    const user = users.find(
      (el) => el.email === email && el.password === password,
    );
    if (user) {
      req.session.userId = user.id;
      res.status(200).json({ id: user.id, name: user.name });
    } else res.status(401).send('Wrong email or password');
  } else res.status(400).send('Login failed');
});
// redirectLogin,
router.get('/logout', redirectLogin, (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_NAME);
  res.status(200).send('erfolgreich ausgeloggt')
});

router.post('/register', (req, res) => {
  let email = req.body.email;
  let password = req.body.password;
  let name = req.body.name;
  if (email && password && name) {
    const user = users.find((el) => el.email == email);

    if (user) {
      res.status(409).send('E-Mail already registered');
    } else {
      let maxId =
        users.reduce((acc, curr) => (acc = acc > curr.id ? acc : curr.id), 0) + 1;
      users.push({
        id: maxId,
        name: name,
        email: email,
        password: password,
      });
      req.session.userId = maxId;
      res.status(200).json({ id: maxId, name: name });
    }
  } else res.status(400).send('Registration failed');
});

router.get('/secretdata', redirectLogin, (req, res) => {
  res.status(200).end('the prime number is 2305843009213693951');
});

module.exports = router;
