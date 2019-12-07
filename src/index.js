const express = require("express");
const app = express();
const webApp = require("http").createServer(app);
const socket = require("socket.io")(webApp);
const path = require("path");
const engine = require("ejs-mate");
const PORT = process.env.PORT||3000;
const admin = require("firebase-admin");


app.use(require("./routes/index"));
// settings
app.engine("ejs",engine)
app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended:true}));
// routes
app.set("port",PORT);
app.listen(app.get("port"),function(){
    console.log("Listen Port: ",app.get("port"))
});

