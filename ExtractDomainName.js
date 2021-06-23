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
	//console.log(url.toUpperCase());
	return url.toUpperCase();
}

console.log(domainName("www.google.com"));

