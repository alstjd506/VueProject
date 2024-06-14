const express = require('express');
const router = express.Router();

router.get('/', (req,res) => {
    if (req.session.is_logined) {
      const member = JSON.parse({userid : req.seession.userid})
      return res.send(member)
    }else{
      res.send(401);
    }
})

module.exports = router;