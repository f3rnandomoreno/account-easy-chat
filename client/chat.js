Meteor.subscribe('accountEasyChatMessages')

UI.registerHelper('messages',function(){
    Messages.find({}).forEach(function(m){
        var message =  new Handlebars.SafeString(wrapSpanColor(m.nick,"#2E2EFE")+br()+wrapSpanColor(m.message,"#000000"))
        messages = messages + message
    })
    return messages
});

function wrapSpanColor(text,color){
    return "<span style=\"color: "+color+"\">"+text+"</span>"
}
function br(){
    return "<br>"
}