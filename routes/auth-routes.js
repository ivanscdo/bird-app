var passport = require("passport");

// auth login
module.exports = function(app) {
	app.get("/login", function(req, res){
    res.render("login");
	});
	app.get("/test", function(req, res){
    res.render("test");
	});

	// auth logout

	app.get("/logout", function(req, res){
	    // handle with passport
	    res.send("logging out");
	})

	// auth with google
	app.get("/auth/google", passport.authenticate("google", {
	     // handle with passport
	     scope: ["profile"]
	}));

	app.get('/auth/google/redirect', 
	  passport.authenticate('google', { 
	  	successRedirect: '/test',
	  	failureRedirect: '/' }),
	  function(req, res) {
	  	console.log(req, res);
	    res.redirect('/test');
  });
}
