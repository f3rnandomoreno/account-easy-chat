Meteor.subscribe('accountEasyChatMessages')

messages=""
UI.registerHelper('messages',function(){
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


//Template.write.events({
//  'click': function(event, template) {
//     console.log($("#text_message"))
//      //Meteor.call('sendMessage')
//  }
//});