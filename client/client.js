Meteor.subscribe('accountEasyChatMessages')

Template.registerHelper('messages',function(){
    var messages = ""        
    Messages.find({}).forEach(function(m){
        var message =  wrapSpanColor(m.nick,"#2E2EFE")+br()+wrapSpanColor(m.message,"#000000")+br()
        messages = messages + message
    })
    return new Handlebars.SafeString(messages)
});
//
function wrapSpanColor(text,color){
    return "<span style=\"color: "+color+"\">"+text+"</span>"
}
function br(){
    return "<br>"
}


Template.writeText.events({
  'click #send_message': function(event, template) {
    console.log($("#text_message"))
    Meteor.call('sendMessage',$("#text_message").val())
    $("#text_message").val('')
  }
});