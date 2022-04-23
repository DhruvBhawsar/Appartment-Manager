const express = require ("express")

const router = express.Router();

const User = require ("../models/user.model")

router.post("",async function(req,res){
    try{
        const user = await User.create()
        return res.status(201).send(user)

    }catch(err){
        return res.status(500).send(err.message)
    }
})
//ss

router.get("",async function(req,res){
    try{
        const user = await User.find().lean().exec()
        return res.status(201).send(user)

    }catch(err){
        return res.status(500).send(err.message)
    }
})

module.exports = router;