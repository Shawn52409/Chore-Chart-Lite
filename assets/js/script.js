var currentDate = moment().format('dddd (l)');


// function called after a search is made
function startCoinCeremony(evt){    
    evt.preventDefault();
    
    var results = {};

    // for(i=0;i<18;i++){
    
    
    // var ${`chore1CheckBox${i}`} = $(`#chore${i}`).val();
    // var ${`caseyCompletedChore${i}`} = $(`#caseyCompletedChore${i}`).val();
    // var ${`caseyCompletedChore${i}`} = $(`#caseyCompletedChore${i}`).val();

    // }

};


// Search button handler
$("#startCoinCeremony-btn").on("click", startCoinCeremony);