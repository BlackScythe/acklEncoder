Router.map(function() {
	this.route('hello', {
		path: '/',
		onBeforeAction: function (pause){
			Session.set('secretSize', secrets.find().fetch().length);
			if (Session.get('secretSize')>0) {
				secret0 = secrets.find({},{sort:{date:-1}}).fetch()[0]; 
				
				
        		minutes = parseInt((secret0.date+3600000 - Date.now())/1000/60);
        		
				if (minutes<0) {
        		
        			Meteor.call('startWork');
					
				}
			}
			if (Session.get('secretSize')<=0) {
				
				Meteor.call('startWork');
			}
			this.render('hello');		
		}
	})
});