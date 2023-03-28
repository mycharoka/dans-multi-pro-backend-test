const router = require('express').Router();
const auth = require('../core/auth/auth')
const {getJobList, getJobDetail} = require('./service')

router.get('/list', auth(['admin', 'user']),async (req, res) => {
  const {description, location, full_time, page} = req.query;
  let result = await getJobList(description, location, full_time, page)
  res.json(result)
})

router.get('/detail/:id', auth(['admin', 'user']), async (req, res) => {
  let result = await getJobDetail(req.params.id)
  res.json(result)  
})

module.exports = router;
