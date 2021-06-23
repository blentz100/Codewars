/* https://www.codewars.com/kata/514a024011ea4fb54200004b/train/javascript
 * Extract the Domain Name from the URL
 * 
 * Write a function that when given a URL as a string, parses out just the
 * domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github"
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"

*/

function domainName(url){
	console.log("got inside domainName function, and url is: " + url);
	console.log("original input is: " + url );	
	// Strip out the http part
	let tempAnswer = "";

	if(url.match(/https:\/\/www.(.)*/)){
		tempAnswer = url.replace("https://www.", "")
		console.log("got inside first if");
		console.log("tempAnswer is: " + tempAnswer);
	}
	else if (url.match(/https:\/\/(.)*/)){
		tempAnswer = url.replace("https://", "" );
		console.log("got inside second if");
		console.log("tempAnswer is: " + tempAnswer);
	}
	else if (url.match(/http:\/\/www.(.)*/)){
		tempAnswer = url.replace("http://www.", "")
		console.log("got inside third if");
		console.log("tempAnswer is: " + tempAnswer);
	}
	else if (url.match(/http:\/\/(.)*/)){
		tempAnswer = url.replace("http://", "")
		console.log("got inside fourth if");
		console.log("tempAnswer is: " + tempAnswer);
	}
	
	// If it has www, then strip that out too
	if(url.match(/www.(.)*/)){
		console.log("got inside the if statemenet")
		tempAnswer = url.replace("www.", "");
		}
	let dotPosition = tempAnswer.indexOf('.');
	console.log(dotPosition);
	return tempAnswer.slice(0,dotPosition);

	
}

console.log(domainName("www.google.com"));

