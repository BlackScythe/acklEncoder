Meteor.methods({
	startWork: function(){		
		var start = new Date().getTime();
		for (var i = 0; i < 20; i++) {
			guid = requestGUID().value;
			data = getWords(guid);			
			switch (data.algorithm){
				case 'IronMan':
					encoded = ironMan(data.words);					
					break;
				case 'TheIncredibleHulk':
					encoded = theIncredibleHulk(data.words);					
					break;
				case 'Thor':
					encoded = thor(data.words, data.startingFibonacciNumber);					
					break;
				case 'CaptainAmerica':
					encoded = captainAmerica(data.words, data.startingFibonacciNumber);					
					break;
				default:
					console.log("That's not a recognized encoding algorithm!");
			}			
			postEncoded(guid,data.algorithm,encoded);
		}
		var end = new Date().getTime();
		var time = end - start;
		console.log("Execution time was "+ time +" ms");
		console.log("***************************************-----------------------------------*********************************");

	}	
});