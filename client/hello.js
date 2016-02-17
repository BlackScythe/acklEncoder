Meteor.subscribe('secrets');

Template.hello.helpers({
	'displaySecret' : function (){
		if (secrets.findOne({})) {
			Session.set('secret',secrets.findOne({}).secret);
		}
		Meteor.call('clearSecrets');
		return Session.get('secret');
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