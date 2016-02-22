Meteor.subscribe('secrets');

Template.hello.helpers({
	'displaySecret' : function () {		
		if (secrets.find().fetch().length > 0 ) {
			secreto = secrets.find({},{sort:{date:-1}}).fetch();			
			return secreto[0].secret;
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
	},
	'timerVisible' : function () {
		if (secrets.find().fetch().length > 0) {
			secret = secrets.find({},{sort:{date:-1}}).fetch()[0];		
			minutes = parseInt((secret.date+3600000 - Date.now())/1000/60);			
			seconds = (secret.date+3600000 - Date.now())/1000/60%1;
			seconds = parseInt(seconds * 60);
			if (minutes >= 0&& seconds >= 0) {    		
			}else{
				return "hide";
			}
		}
	}
});

Template.hello.rendered = function() {    
	callCountDown();	

	$('.collapsible').collapsible({
    	accordion : false 
    });


}

Template.hello.events({	
});