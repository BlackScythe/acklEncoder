Meteor.subscribe('secrets');

Template.hello.helpers({
	'displaySecret' : function () {		
		if (secrets.find().fetch().length > 0 ) {
			secret = secrets.find({},{sort:{date:-1}}).fetch();
			return secret[0].secret;
		}else{
			return false;
		}
	},
	'previousSecret' : function () {
		if (secrets.find().fetch().length > 0 ) {
			if (secrets.find().fetch().length == 1) {
				return false;
			}else{
				secret = secrets.find({},{sort:{date:-1}}).fetch();
				return secret[1].secret;				
			}
		}else{
			return false;
		}
	},
	'previousVisible' : function () {
		if (secrets.find().fetch().length == 0) {
			return "hide";
		}
		return "";
	}
});

Template.hello.rendered = function() {
	$('.collapsible').collapsible({
    	accordion : false 
    });
}

Template.hello.events({	
});