var currentDate = moment().format('dddd (l)');


// function called after a search is made
function startCoinCeremony(evt){    
    evt.preventDefault();
    console.log(evt);

}


// Search button handler
$("#startCoinCeremony-btn").on("click", startCoinCeremony);