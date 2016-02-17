ironMan = function(a){		
	
	sorted = clone(a);
	sorted.sort(function(a,b){
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});
	//console.log(sorted);
	sorted = vowelShift(sorted);
	//console.log(sorted);
	dString = delimit(sorted);
	//console.log(dString);
	eArray = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(dString));	
	
	return eArray;
	
}

theIncredibleHulk = function(a){
	
	sorted = clone(a);
	sorted = vowelShift(sorted);
	//console.log(sorted);
	sorted.sort(function(a,b){
		return a.toLowerCase().localeCompare(b.toLowerCase());
	}).reverse();
	//console.log(sorted);
	dString = delimit2(sorted);			
	//console.log(dString);
	eArray = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(dString));

	return eArray;
	
}

thor = function(a, n){	
	
	sorted = clone(a);
	//console.log(sorted);
	sorted = traverse(sorted);
	//console.log(sorted);
	sorted.clean("");
	//console.log(sorted);
	sorted.sort(function(a,b){
		return a.toLowerCase().localeCompare(b.toLowerCase());
	});
	//console.log(sorted);
	sorted = alternate(sorted);
	//console.log(sorted);		
	sorted = swapVowelsFib(sorted,n);
	//console.log(sorted);
	dString = delimit2(sorted);
	//console.log(dString);
	eArray = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(dString));

	return eArray;
}

captainAmerica = function(a,n){	
	
	sorted = clone(a);		
	sorted = vowelShift(sorted);
	//console.log(sorted);
	sorted.sort(function(a,b){
		return a.toLowerCase().localeCompare(b.toLowerCase());
	}).reverse();
	//console.log(sorted);
	sorted = swapVowelsFib(sorted,n);
	//console.log(sorted);
	dString = delimit(sorted);
	//console.log(dString);
	eArray = CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(dString));	
		
	return eArray;
}