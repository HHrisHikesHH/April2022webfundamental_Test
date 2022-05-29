// Question 5. Using SWITCH statement, get the day of the week based on day number, means if the day is 1, the day of week is Sunday. If the day is 2 , it's Monday and so on.

let select=0;
console.log(`You selected ${select} so today is`);
switch(select){
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("Sunday again!!");
        break;    

}