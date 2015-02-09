Meteor.methods({
    //send message from client to server
    sendMessage: function(message){
        if (Meteor.user()) {
            Messages.insert({nick:_nickName, message:message.substring(0,AccountSimpleChat.config.maxLength),date:new Date().getTime()})
        }else{
            throw "User is not Logged"
        }
    }    
});

// When user is logged on app we set nickname
Accounts.onLogin(function(options){
    if (AccountSimpleChat.config.setNickName===SET_AUTO_NICK_NAME[0]) {
        if (options.user.username) {
            AccountSimpleChat.setNickName(options.user.username)
        }else{
            throw "User has not username (user.username)"
        }
        return;
    }
    if (AccountSimpleChat.config.setNickName===SET_AUTO_NICK_NAME[1]) {
        if (options.user.emails && options.user.emails[0].count() > 0) {
            AccountSimpleChat.setNickName(options.user.emails[0].address)
        }else{
            throw "User has not email (user.emails[0].address)"
        }
    }
})
