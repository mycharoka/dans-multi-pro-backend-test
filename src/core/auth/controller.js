const router = require("express").Router();
const { passwordIsMatch, getLoggedIn, createNewUser } = require("./service");
const auth = require("./auth");
const {body, validationResult} = require('express-validator')

// @route      GET api/user/auth
// @desc       Get logged in user
// @access     Private
router.get("/", auth(), async (req, res) => {
  let result = await getLoggedIn(req.user.id);
  res.json(result);
});

// @route      POST api/user/auth
// @desc       Auth user & get token
// @access     Public
router.post("/signin", [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
], async (req, res) => {
  const { username, password } = req.body;

  const errors = validationResult(req);
  console.log(errors)
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

  let result = await passwordIsMatch(username, password);
  res.json(result);
});

// @route      POST api/user/register
// @desc       Register New User
// @access     Private and only Admin role
router.post("/register", [
  body('username')
    .trim()
    .notEmpty()
    .withMessage('Username is required'),
  body('password')
    .trim()
    .notEmpty()
    .withMessage('Password is required')
], auth(['admin', 'user']), async (req, res) => {
  const { name, username, password } = req.body;

  const errors = validationResult(req)
  if (!errors.isEmpty()) return res.json({ error: errors.array() });

  let result = await createNewUser(createdId, username, password, name);
  res.json(result);
});

module.exports = router;
