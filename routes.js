Router.map(function() {
	this.route('hello', {
		path: '/',
		onBeforeAction: function (pause){
			Meteor.call('startWork');
			this.render('hello');
		}
	})
});