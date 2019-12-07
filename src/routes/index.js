const router = require("express").Router()

router.get("/contacto",function(req,res){
    res.render("panel/panel");
})

router.get("/",function(req,res){
    res.render("index");
})
  
router.use(function(err,req, res,next) {
    res.status(404).render("404");
  });


module.exports = router;