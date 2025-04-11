// Temperature check  
// 1. Write a code using if else statements to check the  temperature and print a 
// message based on the following  conditions:  
// a. If the temperature is below 0, print "It's freezing!" 
// b. If the temperature is between 0 and 15, print "It's cold."  
// c. If the temperature is between 16 and 25, print "It's mild."  
// d. If the temperature is above 25, print "It's warm." 
// 2.  Re-write the code using switch Statements.


function checkTemperature(temperature) {
    if (temperature < 0) {
        console.log("It's freezing!");
    } else if (temperature >= 0 && temperature <= 15) {
        console.log("It's cold.");
    } else if (temperature >= 16 && temperature <= 25) {
        console.log("It's mild.");
    } else {
        console.log("It's warm.");
    }
}


checkTemperature(-5);  
checkTemperature(10);   
checkTemperature(20);   
checkTemperature(30);   


function checkTemperatureSwitch(temperature) {
    let category;

    if (temperature < 0) {
        category = 'freezing';
    } else if (temperature >= 0 && temperature <= 15) {
        category = 'cold';
    } else if (temperature >= 16 && temperature <= 25) {
        category = 'mild';
    } else {
        category = 'warm';
    }

    switch (category) {
        case 'freezing':
            console.log("It's freezing!");
            break;
        case 'cold':
            console.log("It's cold.");
            break;
        case 'mild':
            console.log("It's mild.");
            break;
        case 'warm':
            console.log("It's warm.");
            break;
        default:
            console.log("Unknown temperature category.");
    }
}


checkTemperatureSwitch(-5);  
checkTemperatureSwitch(10);   
checkTemperatureSwitch(20);   
checkTemperatureSwitch(30);   