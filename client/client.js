Meteor.subscribe('accountEasyChatMessages')

sendMessage = function(){
    Meteor.call('sendMessage',$("#text_message").val())
    $("#text_message").val('')
}
Template.registerHelper('messages',function(){
    var messages = ""        
    Messages.find({}).forEach(function(m){
        var message =  wrapSpanColor(m.nick,"#2E2EFE")+br()+wrapSpanColor(m.message,"#000000")+br()
        messages = message + messages
    })
    return new Handlebars.SafeString(messages)
});

Template.writeText.helpers({
    MAX_LENGHT: function(){
        return AccountEasyChat.config.maxLength
    }    
});
//
function wrapSpanColor(text,color){
    return "<span style=\"color: "+color+"\">"+text+"</span>"
}
function br(){
    return "<br>"
}

Template.writeText.events({
  'click #send_message': function(e, template) {
        console.log("entra..")
        sendMessage()
  },
  'keyup #text_message': function(e,template){
        if(e.keyCode == 13)
        {
          sendMessage()
        }
   }
  
});