Meteor.subscribe('secrets');

Template.hello.helpers({
	'displaySecret' : function (){		
		Meteor.call('clearSecrets');
		if (secrets.find().fetch().length > 0 ) {
			secret = secrets.find({},{sort:{date:-1}}).fetch();
			return secret[0].secret;
		}else{
			return false;
		}
	}
});

Template.hello.rendered = function() {
	$('.collapsible').collapsible({
    	accordion : false 
    });
}

Template.hello.events({
	'click #another': function (){
		Meteor.call('startWork');
	}
});