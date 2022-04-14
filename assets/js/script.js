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
      "choreName": "Dishes cleaned off and in the dishwasher after every meal",
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

function updateChoreChart(){
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
};



function startCoinCeremony(evt){    
    evt.preventDefault();
    
    updateChoreChart();

    var choreWinners = [];

    for(i=0;i<choreChart.length;i++){
        if(!choreChart[i].noChore){
            choreWinners.push(i);
        }
    };
    
    document.body.innerHTML = `
    <header id="header">
      <div class="display-4"><b>Results</b></div>
    </header>
    <div id="results">
    <a href="./index.html">Back to Form</a>
    <div id="result0" class="results"></div>
    <div id="result1" class="results"></div>
    <div id="result2" class="results"></div>
    <div id="result3" class="results"></div>
    <div id="result4" class="results"></div>
    <div id="result5" class="results"></div>
    <div id="resultBonus" class="results"></div>
    <div>`;
    
    var winningNumber
    for(i=0;i<7;i++){
      winningNumber = Math.floor(Math.random() * choreWinners.length);
        if (i<6) {
          $(`#result${i}`).append(`The Winning Chore is: \r\n#${i+1} ${choreChart[choreWinners[winningNumber]].choreName}<br>Casey Wins ${choreChart[choreWinners[winningNumber]].caseyComplete} Coin!<br>Connor Wins ${choreChart[choreWinners[winningNumber]].connorComplete} Coin!`)
          choreWinners.splice(winningNumber, 1);
          
          } else {
            var bonusNumber = Math.floor(Math.random() * 4 + 1);
            var numberOfBonusCoins = Math.floor(Math.random() * (6 - 3 + 1) + 3);
            if(bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete == 1 && choreChart[choreWinners[winningNumber]].connorComplete == 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: \r\n${choreChart[choreWinners[winningNumber]].choreName}<br>Casey Wins ${numberOfBonusCoins} Coins!<br>Connor Wins ${numberOfBonusCoins} Coins!`)
            } else if (bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete == 1 && choreChart[choreWinners[winningNumber]].connorComplete != 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: \r\n${choreChart[choreWinners[winningNumber]].choreName}<br>Casey Wins ${numberOfBonusCoins} Coins!`)  
            } else if (bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete != 1 && choreChart[choreWinners[winningNumber]].connorComplete == 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: \r\n${choreChart[choreWinners[winningNumber]].choreName}<br>Connor Wins ${numberOfBonusCoins} Coins!`)
            } else if (bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete != 1 && choreChart[choreWinners[winningNumber]].connorComplete != 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: \r\n${choreChart[choreWinners[winningNumber]].choreName}<br>No one wins ${numberOfBonusCoins} Coins!`)
            } else {
              $(`#resultBonus`).append("Sorry no bonus chore today.");
            }
            choreWinners.splice(winningNumber, 1);
          }
      }
  };


// Search button handler
$("#startCoinCeremony-btn").on("click", startCoinCeremony);