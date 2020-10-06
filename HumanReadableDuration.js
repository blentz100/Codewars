/*https://www.codewars.com/kata/52742f58faf5485cae000b9a
 *
 Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

formatDuration(62)    // returns "1 minute and 2 seconds"
formatDuration(3662)  // returns "1 hour, 1 minute and 2 seconds"

 */

function formatDuration (seconds) {
	let minutes = 0;
	let hours = 0;
	let days = 0;
	let years = 0;

	//Now
	if (seconds == 0){
		  return 'now';
	}

	//1 Second	
	else if (seconds == 1){
		return `${seconds} second`;
	}

	//Less than 1 minute
	else if (seconds < 60){
		return `${seconds} seconds`;
	}

	//Less than 1 hour
	else if (seconds < 3600){

		minutes = (Math.floor(seconds / 60));
		seconds = (seconds % 60);
		//console.log("Minutes: " + minutes);
		//console.log("Seconds: " + seconds);
		return formatCleaner(seconds, minutes, hours, days, years);
	}

	//Less than 1 day
	else if (seconds < 86400){

		hours = (Math.floor(seconds / 3600));
		console.log("hours: " + hours);
		seconds = seconds - (hours * 3600);
		console.log("now we have seconds at: " + seconds);
		minutes = (Math.floor(seconds / 60));
		console.log("minutes: " + minutes);
		seconds = seconds - (minutes * 60);
		console.log("seconds: " + seconds);	
		return formatCleaner(seconds, minutes, hours, days, years);
	}

	// Less than 1 year
	else if (seconds < 31536000){
		days = (Math.floor(seconds / 86400));
		console.log("days: " + days);
		seconds = seconds - (days * 86400);
		console.log("now we have seconds at: " + seconds);
		hours = (Math.floor(seconds / 3600));
		console.log("hours: " + hours);
		seconds = seconds - (hours * 3600);
		console.log("now we have seconds at: " + seconds);
		minutes = (Math.floor(seconds / 60));
		console.log("minutes: " + minutes);
		seconds = seconds - (minutes * 60);
		console.log("seconds: " + seconds);	
		return formatCleaner(seconds, minutes, hours, days, years);
	}

	// More than 1 year
	else if (seconds >= 31536000){
		years = (Math.floor(seconds / 31536000));
		console.log("years: " + years);
		seconds = seconds - (years * 31536000);
		console.log("now we have seconds at: " + seconds);
		days = (Math.floor(seconds / 86400));
		console.log("days: " + days);
		seconds = seconds - (days * 86400);
		console.log("now we have seconds at: " + seconds);
		hours = (Math.floor(seconds / 3600));
		console.log("hours: " + hours);
		seconds = seconds - (hours * 3600);
		console.log("now we have seconds at: " + seconds);
		minutes = (Math.floor(seconds / 60));
		console.log("minutes: " + minutes);
		seconds = seconds - (minutes * 60);
		console.log("seconds: " + seconds);	
		return formatCleaner(seconds, minutes, hours, days, years);
	}


}

function formatCleaner(seconds, minutes, hours, days, years){
	let labelSingle = ['second', 'minute', 'hour', 'day', 'year'];
	let labelMultiple = ['seconds', 'minutes', 'hours', 'days', 'years'];
	let unitsOfTimeArray = Array.from(arguments);
	let newUnitsOfTimeArray = [];
	
	// Iterate through incoming args, strip out 0s and adjust the label
	// ex. 1 hour vs 42 hours
	for(let x = unitsOfTimeArray.length; x >= 0; x--){
			if (unitsOfTimeArray[x] == 1){
				newUnitsOfTimeArray.push(unitsOfTimeArray[x]); 
				newUnitsOfTimeArray.push(labelSingle[x]);					
			}
			else if (unitsOfTimeArray[x] > 1){
				newUnitsOfTimeArray.push(unitsOfTimeArray[x]); 
				newUnitsOfTimeArray.push(labelMultiple[x]);					
			}

		}

	// Now clean up the output to include the appropriate number of
	// commas and use of the word 'and' as applicable

	// Case 1: One unit of time
	if (newUnitsOfTimeArray.length == 2){
		return newUnitsOfTimeArray.join(" ");

	}
	//Case 2: Two units of time
	if (newUnitsOfTimeArray.length == 4){
		return (newUnitsOfTimeArray[0] + ' ' + 
				newUnitsOfTimeArray[1] + ' and ' +
				newUnitsOfTimeArray[2] + ' ' + 
				newUnitsOfTimeArray[3]);

	}
	
	//Case 3: Three units of time
	if (newUnitsOfTimeArray.length == 6){
		return (newUnitsOfTimeArray[0] + ' ' + 
				newUnitsOfTimeArray[1] + ', ' +
				newUnitsOfTimeArray[2] + ' ' + 
				newUnitsOfTimeArray[3] + ' and ' +
				newUnitsOfTimeArray[4] + ' ' +
				newUnitsOfTimeArray[5])
	}

	//Case 4: Four units of time
	if (newUnitsOfTimeArray.length == 8){
		return (
				newUnitsOfTimeArray[0] + ' ' + 
				newUnitsOfTimeArray[1] + ', ' +
				newUnitsOfTimeArray[2] + ' ' + 
				newUnitsOfTimeArray[3] + ', ' +
				newUnitsOfTimeArray[4] + ' ' + 
				newUnitsOfTimeArray[5] + ' and ' +
				newUnitsOfTimeArray[6] + ' ' +
				newUnitsOfTimeArray[7])
	}
	
	//Case 5: Five  units of time
	if (newUnitsOfTimeArray.length == 10){
		return (
				newUnitsOfTimeArray[0] + ' ' + 
				newUnitsOfTimeArray[1] + ', ' +
				newUnitsOfTimeArray[2] + ' ' + 
				newUnitsOfTimeArray[3] + ', ' +
				newUnitsOfTimeArray[4] + ' ' + 
				newUnitsOfTimeArray[5] + ', ' +
				newUnitsOfTimeArray[6] + ' ' + 
				newUnitsOfTimeArray[7] + ' and ' +
				newUnitsOfTimeArray[8] + ' ' +
				newUnitsOfTimeArray[9])
	}
} //end of formatCleaner function

//console.log(formatDuration(0));
//console.log(formatDuration(1));
//console.log(formatDuration(59));
//console.log(formatDuration(60));
//console.log(formatDuration(65));
//console.log(formatDuration(120));
//console.log(formatDuration(129));
//console.log(formatDuration(3600));
//console.log("3600 ... " + formatDuration(3660))
	
console.log(formatDuration(132030240));

