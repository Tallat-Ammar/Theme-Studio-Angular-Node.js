const express = require('express')
app=express()
const memberRoutes=express.Router();
let Member=require('../model/Member')
memberRoutes.route('/Add').post(function(req,res){
    let member = new Member(req.body);
    member.save()
    .then(member=>{
        res.status(200).json({'Member':'Member has been added successfully'});
    })
    .catch(err=>{
        res.status(400).send("unable to save to database");
    });
});
memberRoutes.route('/').get(function(req,res){
    Member.find(function(err,members){
        if(err){
            Console.log(err);
        }
        else{
            res.json(members);
        }
    });
});
memberRoutes.route('/edit/:id').get(function(req,res){
    let id = req.params.id;
    Member.findById(id,function(err,member){
        res.json(Member);
    });
});
memberRoutes.route('/update/:id').post(function(req,res){
    Member.findById(req.params.id,function(err,member){
        if(!member)
            res.status(404).send('Record not found')
        else{
            member.MemberName=req.body.MemberName;
            member.MemberBio=req.body.MemberBio;
            member.MemberAge=req.body.MemberAge;
            member.save().then(member=>{
                res.json('Update complete');
            })
            .catch(err=>{
                res.status(400).send("unable to update the database")
            });
        }
    });
});
memberRoutes.get('/delete/:id',(req,res)=>{
    Member.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(err)
            res.json(err);
        else
            res.json('Successfully removed');
    });
});
module.exports=memberRoutes;