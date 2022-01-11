
//function distanceFromHqInBlocks(blocks){ 
//let distance = Math.abs(blocks -42);
//return (distance)
//}

function distanceFromHqInBlocks(block){
    const hq=42;
    if (block>=hq){
        return block-hq;
    } else {
        return hq-block;
    }
}


function distanceFromHqInFeet(block){
    return distanceFromHqInBlocks(block) * 264
}

function distanceTravelledInFeet(start, dest) {
    return Math.abs(start - dest) * 264
}

function calculatesFarePrice(start, dest){
    const distance = distanceTravelledInFeet(start, dest)
    if (distance < 400){
        return 0
    }else if (distance <2000){
    return .02 * (distance - 400)
}   
else if (distance > 2000 && distance < 2500) {
    return 25
} else if (distance > 2500){
    return 'cannot travel that far'
}
}


