var dictionary = ["drool","cats","clean","code","dogs","materials","needed","this","is",
				  "hard","what","are","you","smoking","shot","gun","down","river","super",
				  "man","rule","acklen","developers","are","amazing"];
var words = [];

Meteor.publish('secrets', function(){
	return secrets.find();
});

requestGUID = function () {
	return Guid.create();
}

getWords = function (guid){
	url = '/values/'+guid;	
	response = HTTP.call( 'GET', 'http://internal-devchallenge-2-dev.apphb.com'+url, {headers:{
		'Accept':'application/json'
	}});
 	return response.data;
}

postEncoded = function(guid, algorithm, encoded) {
	url = guid+'/'+algorithm;
	HTTP.call( 'POST', 'http://internal-devchallenge-2-dev.apphb.com/values/'+url, {
		headers:{
		'Accept':'application/json'
		},
		data:{
			'encodedValue':encoded,
			'emailAddress':'gjherrera.i@gmail.com',
			'name': 'Nicolas Jalil',
			'webhookUrl':'http://temporal.com',
			'repourl':'https://temporal.com'
		}
	}, function	(error, response){
		if (error) {
			console.log(error);
		}else{
			console.log(response.data);
		}
	});
}

getEnconded = function  (guid, algName) {
	url = '/encoded/'+guid+'/'+algName;
	response = HTTP.call( 'GET', 'http://internal-devchallenge-2-dev.apphb.com'+url, {
		headers:{'Accept':'application/json'}
	});	
	return response.data;
}

clone = function (obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

swap = function (a,b){
	a = tmp;
	a = b;
	b = tmp;
}

isVowel = function  (a) {
	return /[a,e,i,o,u,y,A,E,I,O,U,Y]/.test(a);
}

isUpper = function  (a) {
	return /[A-Z]/.test(a);
}

vowelShift = function (a){	
	for (var i = 0; i < a.length; i++) {
		val = a[i];		
		for (var j = 0; j < val.length; j++) {
			//if not last
			if (j<val.length-1) {				
				//if current is a vowel
				if (isVowel(val[j])) {					
					//if following is a vowel
					if (isVowel(val[j+1])) {						
						//if either is upper case
						if(isUpper(val[j])||isUpper(val[j+1])){
						val = swap(val, j, val[j], val[j+1]);						
						j++;
						}
					}else{
						val = swap(val, j, val[j], val[j+1]);						
						j++;
					}
				}
			//if last
			}else{
				//if last is vowel
				if (isVowel(val[j])) {					
					val = pushPop(val, val[j]);
				}
			}
		}
		a[i] = val;					
	}	
	return a;
}

swap = function(str, index, chr1, chr2) {
	if (index+2>str.length) {
		return str
	}
	return str.substr(0, index) + chr2 + chr1 + str.substr(index+2);
}

pushPop = function  (str, chr) {
	return chr + str.substr(0,str.length-1);
}

delimit = function (a){
	last = a[a.length-1];
	str = a[0]+last.charCodeAt(0);	
	for (var i = 1; i < a.length; i++) {
		str = str + a[i] + a[i-1].charCodeAt(0);
	}
	return str;
}

delimit2 = function (a) {
	str = a[0];
	for (var i = 1; i < a.length; i++) {
		str = str +"*"+a[i];
	}
	return str;
}

traverse = function (a){
	b = clone(a);
	size = a.length;	
	for (var i = 0; i < size; i++) {
		words = [];
		if(wordBreak(a[i])){
			b[i] = "";
			b = b.concat(words);
		}
	}	
	return b;
}

wordBreak = function (a){
	if (a.length == 0){
		return true;		
	} 
	for (var i = 1; i <= a.length; i++) {
		if (inDictionary(a.substr(0,i).toLowerCase())&&
			wordBreak(a.substr(i, a.length-i))){			
			words = words.concat(a.substr(0,i));			
			return true;
		}
	}	
	return false;
}

inDictionary = function (a){	
	for (var i = 0; i < dictionary.length; i++) {
		if(a == dictionary[i]){
			return true;
		}
	}
	return false;
}

alternate = function (a) {
	word = a[0];
	upper = null;	
	if(isUpper(word[0])){
		upper = true;
	}else{
		upper = false;
	}
	for (var i = 0; i < a.length; i++) {
		word = a[i];
		for (var j = 0	; j < word.length; j++) {
			if (!isVowel(word[j])) {
				if (upper) {					
					word = changeUpper(word,j);					
					upper = false;					
				}else{					
					word = changeLower(word,j);
					upper = true;	
				}
			}
		}
		a[i] = word;
	}
	return a;
}

changeUpper = function (a,j){
	size = a.length;	
	a = a.substr(0,j)+a.substr(j,1).toUpperCase()+a.substr(j+1);
	return a;
}

changeLower = function (a, j){
	size = a.length;	
	a = a.substr(0,j)+a.substr(j,1).toLowerCase()+a.substr(j+1);
	return a;
}

changeVowel = function (a, f, j){
	size = a.length;	
	a = a.substr(0,j)+f+a.substr(j+1);	
	return a;
}

swapVowelsFib = function (a, n ){	
	vowels = 0;
	for (var i = 0; i < a.length; i++) {
		word = a[i];
		for (var j = 0; j < word.length; j++) {
			if (isVowel(word[j])) {
				vowels++;
			}
		}
	}	
	fibValues = fibArray(vowels,n);
	n = 0;	

	for (var i = 0; i < a.length; i++) {
		word = a[i];
		for (var j = 0; j < word.length; j++) {
			if (isVowel(word[j])) {
				word = changeVowel(word,fibValues[n], j);				
				n++;				
			}
		}
		a[i] = word;
	}
	return a;

}

fibArray = function(vowels, n){
	a = 0, b = 1, f = 1;
	fibValues = [];
	while (vowels>0)
	{
		if (n<=f) {			
			if (n==0){
				fibValues.push(n);
				vowels--;
			}else{
				fibValues.push(f);
				vowels--;				
			}
		}
		f = a+b;
		a = b;
		b = f;

	}	
	return fibValues;
}

fibonacci = function(n) {
	var s5=Math.sqrt(5);
	return Math.round((Math.pow( 1 + s5, n) - Math.pow( 1 - s5, n))/ (Math.pow(2, n) * s5));	

}

findFib = function(f){	
	var s5=Math.sqrt(5);
	val = 0;
	n1 = 0;
    for (var n = 0; f > val; n++) {
    	n1 = n;
    	val = Math.round((Math.pow(1+s5,n) - Math.pow(1-s5,n)) / ((1<<n)*s5));
    }
    return n1;
}

test = function(){
	for (var i = 0; i < 80; i++) {
		console.log(i+" "+fibonacci(i));
	}	
}

Array.prototype.clean = function(deleteValue) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] == deleteValue) {         
      this.splice(i, 1);
      i--;
    }
  }
  return this;
}