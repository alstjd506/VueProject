const express = require('express');
const router = express.Router();
const query = require('../mysql/index.js');

router.get("/", async (req,res)=> {
    let page = Number(req.query.page);
    let pageUnit = Number(req.query.pageUnit);
    
    if(!page){ page = 1; }
    if(!pageUnit){ pageUnit = 10; }

    let offset = (page-1)*pageUnit;

    let list = await query("customerList",[offset, pageUnit]);
    let count = await query("customerCnt");
    count = count[0].cnt;
    res.send({list,count})
})
router.get("/:id", (req,res)=> {
    const id = req.params.id;
    query("customerGet", id)
    .then(result => res.send(result))
})

router.post("/", (req,res)=> {
    console.log(req.body)
    query("customerInsert", req.body)
    .then(result => res.send(result))
})
router.put('/:id', (req,res)=> {
    const id = req.params.id;
    query("customerUpdate", [req.body, id])
    .then(result => res.send(result))
})
router.delete('/:id', async (req,res)=> {
    const id = req.params.id;
    let reuslt = await query("customerDelete", id)
    .then(result => res.send(result))
})

module.exports = router;