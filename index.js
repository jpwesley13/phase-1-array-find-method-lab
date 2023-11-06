/*function superbowlWin(history){
    for (const season of history){
        if (season.result === "W"){
            return season.year
        }
    }
}*/
//My way above works, but it doesn't use the find() method

function superbowlWin(history){
    const dub = history.find(({result}) => result === 'W');
    if (dub){
    return dub.year;
    }
}