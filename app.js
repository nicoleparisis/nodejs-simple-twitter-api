var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);



// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

    var users = [{id: 1, firstName: "John", LastName: "Smith"}, {id: 2, firstName: "Jane", LastName: "Doe"}];
    var tweets = [{id: 1, userId: 1, text: "Hello", hashTags: ['car', 'boat']}, {id: 2, userId: 2, text: "Hello!", hashTags: ['vacation', 'beach']}];

  // search tweets
  app.get("/search", (req, res, next) => {
    var searchResults = [];
    var hashTags = req.query.hashTags;
    if(hashTags == null || hashTags.length == 0){
      return res.status(400).send({
        success: 'false',
        message: 'you must provide a hash tag'        
      })
    }
    var tweetsWithHashTags = tweets.filter(function(tweet){   
      for (let tag of hashTags) {       
        if(tweet.hashTags.includes(tag)){
          searchResults.push(tweet);  
          break;          
        }        
      }
    });
    return res.json(searchResults);
  });

    // all users
    app.get("/user", (req, res, next) => {
      res.json(users);
    });   


    // one user
    
    app.get("/user/:id", (req, res, next) => {
      var foundUsers = users.filter(function(user){
        return user.id == id;
        });
        if(foundUsers.lenth == 0){
            return res.json(null);
        }
        return res.json(foundUsers[0])
    });
    
    // get user tweets
    app.get("/tweet/:userId", (req, res, next) => {
        var foundTweets = tweets.filter(function(tweet){
            return tweet.userId == userId;
        });
        if(foundTweets.lenth == 0){
            return res.json([]);
        }
        return res.json(foundTweets);
    });

    // create user
    app.post("/user/:user", (req, res, next) => {
      if(users.indexOf(user) > - 1){
          return // user already exists
      }else{
          try{
            users.push(user);
          }catch(e){
            return res.status(500).send({
              success: 'false',
              message: 'user was not added successfully',
              todo
            })
          }
          
          return res.status(201).send({
            success: 'true',
            message: 'user added successfully',
            todo
          })
      }
    });
    // get all tweets
    app.get("/tweet/", (req, res, next) => {
        return tweets;
    });
    // get Tweet
    app.get("/tweet/:id", (req, res, next) => {
        var foundTweets = tweets.filter(function(tweets){
            return tweet.id == id;
        });
        if(foundTweets.lenth == 0){
            return null;
        }
        return foundTweets[0]
    });
    // new tweets
    app.post("/tweet/:tweet", (req, res, next) => {
        if(tweet.indexOf(tweet) > - 1){
          return res.status(500).send({
            success: 'false',
            message: 'tweet already exists'            
          })
        }else{
            try{
                tweets.push(tweet);
                
            }catch(e){
              return res.status(500).send({
                success: 'false',
                message: 'tweet not added successfully',
                tweet
              })
            }
            
            return res.status(201).send({
              success: 'true',
              message: 'tweet added successfully',
              tweet
            })
        }
    });
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});
module.exports = app;
