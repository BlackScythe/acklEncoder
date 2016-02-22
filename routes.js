Router.map(function() {
	this.route('hello', {
		path: '/',
		onBeforeAction: function (pause){
			if (secrets.find().fetch().length>0) {
				secret = secrets.find({},{sort:{date:-1}}).fetch()[0];      
        		minutes = parseInt((secret.date+3600000 - Date.now())/1000/60);
				if (minutes<0) {
					meteor.call('startWork');
					
				}
			}else{
				meteor.call('startWork');
			}
			this.render('hello');		
		}
	})
});