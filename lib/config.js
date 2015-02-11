_nickName = "nonickname"

// you can choose what name would be the nick name of user
SET_AUTO_NICK_NAME = ["ACCOUNT_USERNAME","ACCOUNT_EMAIL"]

//to store config and other stuffs that will be exported
AccountEasyChat ={}
AccountEasyChat.config ={}
AccountEasyChat.config.maxLength= 50
AccountEasyChat.config.limitPublicationMessages = 200
//AccountEasyChat.config.timeMassiveMessages = 2 //secs
//AccountEasyChat.config.numMassiveMessages = 2 //secs
//AccountEasyChat.config.penaltyMassiveMessages = 30 //secs
AccountEasyChat.config.setNickName = "ACCOUNT_USERNAME"

AccountEasyChat.setNickName = function(nick){
    _nickName = nick
}
AccountEasyChat.getNickName = function(){
    return _nickName
}