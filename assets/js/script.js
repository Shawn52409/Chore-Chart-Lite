var currentDate = moment().format('dddd (l)');


var choreChart = [
    {
      "choreName": "Brush teeth in the morning",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Hang up book bags after school",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Dishes cleaned off and in the dishwasher after breakfast",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Dishes cleaned off and in the dishwasher after dinner",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Lights off after leaving a room",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "No fighting",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "No complaining about bedtime",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "No complaining about homework",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Say something nice to your brother",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Put away electronics after use",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Clothes in hamper and towels hung up",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Dresser drawers closed after use",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Clean up mess after done playing (any room)",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Tablets and ipads plugged in",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Shoes in bin",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Outside toys put away",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Toothpaste cleaned out of sink",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "In bed by 9pm",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    }
]
function startCoinCeremony(evt){    
    evt.preventDefault();
    
    for(i=0;i<choreChart.length;i++){
      if($(`#chore${i}`).is(":checked")){  
        choreChart[i].noChore = true;
      } else{
        choreChart[i].noChore = false;
      }
      
      if($(`#caseyCompletedChore${i}`).is(":checked")){  
        choreChart[i].caseyComplete = 1;
      } else{
        choreChart[i].caseyComplete = 0;
      }
      
      if($(`#connorCompletedChore${i}`).is(":checked")){  
        choreChart[i].connorComplete = 1;
      } else{
        choreChart[i].connorComplete = 0;
      }
    };

    var choreWinners = [];

    for(i=0;i<choreChart.length;i++){
        if(!choreChart[i].noChore){
            choreWinners.push(i);
        }
    };
    
    console.log(choreWinners);
    
    var winningNumber
     
    for(i=0;i<6;i++){
      winningNumber = Math.floor(Math.random() * choreWinners.length);
      alert(`The Winning Chore is: \r\n${choreChart[choreWinners[winningNumber]].choreName}\r\n \r\nCasey Wins ${choreChart[choreWinners[winningNumber]].caseyComplete} Coin!\r\n \r\nConnor Wins ${choreChart[choreWinners[winningNumber]].connorComplete} Coin!`)
      choreWinners.splice(winningNumber, 1);
      console.log(winningNumber);
    }




};


// Search button handler
$("#startCoinCeremony-btn").on("click", startCoinCeremony);