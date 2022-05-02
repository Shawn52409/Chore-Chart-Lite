var currentDate = moment().format('dddd');

var choreChart = [
  {
    "choreName": "Say something nice to your brother",
    "noChore": false,
    "caseyComplete": false,
    "connorComplete": false,
  },
  {
    "choreName": "Do something above and beyond to help out",
    "noChore": false,
    "caseyComplete": false,
    "connorComplete": false,
  },
  {
      "choreName": "Brush teeth in the morning and night",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Water bottles on counter in the morning",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Ipads in bookbags on school mornings",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Book bags hung up and shoes put in bin",
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
      "choreName": "No complaining or growling about anything",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
    },
    {
      "choreName": "Put away all toys inside and out (including electronics)",
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
      "choreName": "Tablets and ipads plugged in",
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
]
  

var chart = "";
for(i=0; i<2; i++){
chart += `
<tr>
  <td><name="chore${i}" id="chore${i}"></td>
  <td class="text-left pl-3">${choreChart[i].choreName}</td>
  <td><input type="checkbox" name="caseyCompletedChore${i}" id="caseyCompletedChore${i}"></td>
  <td><input type="checkbox" name="connorCompletedChore${i}" id="connorCompletedChore${i}"></td>
</tr>
`
}

for(i=2;i<choreChart.length;i++){
  chart += `
  <tr>
    <td><input type="checkbox" name="chore${i}" id="chore${i}"></td>
    <td class="text-left pl-3">${choreChart[i].choreName}</td>
    <td><input type="checkbox" name="caseyCompletedChore${i}" id="caseyCompletedChore${i}"></td>
    <td><input type="checkbox" name="connorCompletedChore${i}" id="connorCompletedChore${i}"></td>
  </tr>
`
}

document.body.innerHTML = `
<header id="header">
<div class="display-4"><b>Casey & Connor's<br>Chore Chart</b></div>
</header>
<div id="form">
<form action="results.html" method="GET">
<div class="fixTableHead">
<table>
  <div class="text-center p-4">
  <button id="reset-btn" type="reset">Remove All Checks</button>
  </div>
  <thead>
    <tr>
      <th>Do Not Count</th>
      <th class="text-left pl-3">Chore Name</th>
      <th id="caseyName">Casey</th>
      <th id="connorName">Connor</th>
    </tr>
  </thead>
  ${chart}
  </table>
  </div>
  <div class="text-center m-4">
  <button id="startCoinCeremony-btn"><span class="p-2 img-fluid img-smaller img-spin">💰</span>Start Coin Ceremony<span class="p-2">💰</span></button>
  </div>
  </form>
  </div>
  `

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

    for(i=2;i<choreChart.length;i++){
        if(!choreChart[i].noChore){
            choreWinners.push(i);
        }
    };
    

    document.body.innerHTML = `
    <header id="header">
      <div class="display-4"><b>${currentDate}<br>Results</b></div>
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
        if (i<4) {
          $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[choreWinners[winningNumber]].choreName}<br>Casey Wins ${choreChart[choreWinners[winningNumber]].caseyComplete} Coin!<br>Connor Wins ${choreChart[choreWinners[winningNumber]].connorComplete} Coin!`)
          choreWinners.splice(winningNumber, 1);
          } else if (i===4){
            $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[0].choreName}<br>Casey Wins ${choreChart[0].caseyComplete} Coin!<br>Connor Wins ${choreChart[0].connorComplete} Coin!`)
          } else if (i===5){
            var numberOfBonusCoins = Math.floor(Math.random() * (3 - 2 + 1)) + 2;
            if(choreChart[1].caseyComplete === 1 && choreChart[1].connorComplete === 1){
              $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[1].choreName}<br>Casey Wins ${numberOfBonusCoins} Coins!<br>Connor Wins ${numberOfBonusCoins} Coins!`)
            } else if(choreChart[1].caseyComplete === 1 && choreChart[1].connorComplete === 0){
              $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[1].choreName}<br>Casey Wins ${numberOfBonusCoins} Coins!`)
            } else if(choreChart[1].caseyComplete === 0 && choreChart[1].connorComplete === 1){
              $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[1].choreName}<br>Connor Wins ${numberOfBonusCoins} Coins!`)
            } else if(choreChart[1].caseyComplete === 0 && choreChart[1].connorComplete === 0){
              $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[1].choreName}<br>No one wins ${numberOfBonusCoins} Coins!`)
            }

          } else if (i===6){
            var bonusNumber = Math.floor(Math.random() * (3 - 1 + 1)) + 1;
            console.log(bonusNumber);
            var numberOfBonusCoins = Math.floor(Math.random() * (6 - 3 + 1)) + 3;
            if(bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete == 1 && choreChart[choreWinners[winningNumber]].connorComplete == 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: ${choreChart[choreWinners[winningNumber]].choreName}<br>Casey Wins ${numberOfBonusCoins} Coins!<br>Connor Wins ${numberOfBonusCoins} Coins!`)
            } else if (bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete == 1 && choreChart[choreWinners[winningNumber]].connorComplete != 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: ${choreChart[choreWinners[winningNumber]].choreName}<br>Casey Wins ${numberOfBonusCoins} Coins!`)  
            } else if (bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete != 1 && choreChart[choreWinners[winningNumber]].connorComplete == 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: ${choreChart[choreWinners[winningNumber]].choreName}<br>Connor Wins ${numberOfBonusCoins} Coins!`)
            } else if (bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete != 1 && choreChart[choreWinners[winningNumber]].connorComplete != 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: ${choreChart[choreWinners[winningNumber]].choreName}<br>No one wins ${numberOfBonusCoins} Coins!`)
            } else {
              $(`#resultBonus`).append("Sorry no bonus chore today.");
            }
            choreWinners.splice(winningNumber, 1);
          }
      }
  };


// Search button handler
$("#startCoinCeremony-btn").on("click", startCoinCeremony);
