Router.route('/secret',{where:'server'})
	.get(function() {})
	.post(function() {
		var response;
		if(this.request.body.secret === undefined || this.request.body.secret === null || this.request.body.secret === "") {
            response = {
                "error" : true,
                "message" : "invalid data"
            };
        } else {            
            secret = this.request.body.secret;            
            secrets.insert({secret:secret, date:Date.now()});            
            response = {
                "error" : false,
                "message" : "secret posted."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));

	});