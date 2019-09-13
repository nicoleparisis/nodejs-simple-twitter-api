class UserApi{
    var users = [];
    var tweets = [];

    // all users
    function getUsers(){
      return JSON.stringify(users);
    }
    
    // one user
    function getUser(id){
        var foundUsers = users.filter(function(user){
            return user.id == id;
        });
        if(foundUsers.lenth == 0){
            return null;
        }
        return foundUsers[0]
    }
    
    // get user tweets
    function getUserTweets(userId){
        var foundTweets = tweets.filter(function(tweet){
            return tweet.userId == userId;
        });
        if(foundTweets.lenth == 0){
            return [];
        }
        return foundTweets;
    }
    // create user
    function createUser(user){
      if(users.indexOf(user) > - 1){
          return // user already exists
      }else{
          try{
            users.push(user);
          }catch(e){
            return //500 error
          }
          
          return // 200 response
      }
    }
    // get all tweets
    function getTweets(){
        return tweets;
    }
    // get Tweet
    function getTweet(id){
        var foundTweets = tweets.filter(function(tweets){
            return tweet.id == id;
        });
        if(foundTweets.lenth == 0){
            return null;
        }
        return foundTweets[0]
    }
    // all users
    function getUsers(tweet){
        if(tweet.indexOf(tweet) > - 1){
            return // tweet already exists
        }else{
            try{
                tweets.push(tweet);
            }catch(e){
              return //500 error
            }
            
            return // 200 response
        }
    }
}

