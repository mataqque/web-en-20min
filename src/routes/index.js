const router = require("express").Router()

router.get("/contacto",function(req,res){
    res.render("panel/panel");
})

router.get("/",function(req,res){
    res.render("index");
})
  


module.exports = router;