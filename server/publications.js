Meteor.publish('accountEasyChatMessages',function(){
	return Messages.find({})
	//return Messages.find({},{limit:AccountSimpleChat.config.limitPublicationMessages})
});
