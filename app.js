var express=require("express");
var app=express();
var bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds= [
        {name: "Tetaguche", image: "https://farm8.staticflickr.com/7756/18276334882_2908e129b2.jpg"},
        {name: "Gooseberry", image: "https://farm8.staticflickr.com/7756/18276334882_2908e129b2.jpg"},
        {name: "Grand Canyon", image: "https://farm8.staticflickr.com/7756/18276334882_2908e129b2.jpg"},
    ];

app.get("/", function(req,res){
    res.render("landing");
});

app.get("/campgrounds", function(req, res){
    res.render("campgrounds", {campgrounds:campgrounds});
});

app.post("/campgrounds", function(req, res){
    //get data from form and push to campground array
    var name=req.body.name;
    var image=req.body.image;
    var newCampground={name:name, image:image};
    campgrounds.push(newCampground);
    
    //redirect back to campgrounds page
    res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res){
   res.render("new.ejs"); 
});

app.listen(process.env.PORT, process.env.IP, function() {
    console.log("Server has started!");
});
