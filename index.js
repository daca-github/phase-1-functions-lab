// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    const hq= 42;
    let distance
    if (blocks >= hq) {
        distance = blocks - hq;
    }else {
        distance = hq - blocks;
    }
    return distance;
}

function distanceFromHqInFeet(feet){
    const feetPerBlock = 264;
    const distanceInBlocks = distanceFromHqInBlocks(feet);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    return distanceInFeet;
}

function distanceTravelledInFeet(start, destination){
    const feetPerBlock = 264;
    let distance
    if (start >= destination){
        distance = (start - destination) * feetPerBlock;
    } else {
        distance = (destination - start) * feetPerBlock;
    }
    return distance;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    const freeRide = 400;
    let price;
    if (distance <= freeRide){
        price = 0;
    } else if (distance > 400 && distance < 2000){
        price = (distance - freeRide) * 0.02;
    } else if (distance > 2000 && distance < 2500){
        price = 25;
    } else 
        price = "cannot travel that far"
    
    return price;
}
