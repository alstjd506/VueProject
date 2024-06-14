const express = require('express');
const router = express.Router();

const members = [
  { userid: "user1", userpw: "1111" },
  { userid: "user2", userpw: "2222" },
  { userid: "user3", userpw: "3333" },
];
  

router.post("/", (req, res) => {
    const userid = req.body.userid;
    const userpw = req.body.userpw;
    console.log(userid, userpw);
    const member = members.find(ele => ele.userid === userid && ele.userpw === userpw)
    if(member){
      req.session.userid = userid; // 세션에 사용자 이메일 정보 저장
      req.session.is_logined = true; // 세션에 로그인 여부 저장
      req.session.save(err => {
        if(err) throw err;
        res.send(member);
      })
    }else {
      res.send(401);
    }
});
module.exports = router;