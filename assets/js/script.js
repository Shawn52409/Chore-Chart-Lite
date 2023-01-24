var currentDate = moment().format('dddd');

var choreChart = [
  {
    "choreName": "HELPING OUT - Do something above and beyond to help out without being asked to",
    "noChore": false,
    "caseyComplete": false,
    "connorComplete": false,
  },
  {
    "choreName": "BEING NICE - Say something nice to your brother (Any negative words to your brother cancels this for the day)",
    "noChore": false,
    "caseyComplete": false,
    "connorComplete": false,
  },
  {
    "choreName": "NO FIGHTING - No fighting, complaining, whining or growling about anything",
    "noChore": false,
    "caseyComplete": false,
    "connorComplete": false,
  },
  {
    "choreName": "SCHOOL STUFF - Complete all homework, hangup book bag, shoes in bin, water bottles on counter and ipads plugged in",
    "noChore": false,
    "caseyComplete": false,
    "connorComplete": false,
  },
  {
    "choreName": "BEDROOM - Bedroom clean, lights off after leaving, bed made nicely, dirty clothes/towels in hamper and all drawers closed",
    "caseyComplete": false,
    "connorComplete": false,
  },
  {
      "choreName": "BATHROOM - Brush teeth in the morning and night, clean sink and counter",
      "noChore": false,
      "caseyComplete": false,
      "connorComplete": false,
  },
  {
    "choreName": "DISHES - All dishes, cups, medicine cups cleaned off and in the sink after every meal",
    "noChore": false,
    "caseyComplete": false,
    "connorComplete": false,
  },
  {
    "choreName": "FAMILY ROOM - TV off after leaving, controllers put away, no socks and clutter free",
    "noChore": false,
    "caseyComplete": false,
    "connorComplete": false,
  },
]
  
// Create variables for chart
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

// Create chart
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
// Save checked info to chart array
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


// Create results for chore chart based off of checked boxes
function startCoinCeremony(evt){    
    evt.preventDefault();
    
    updateChoreChart();

    var choreWinners = [];

    for(i=1;i<choreChart.length;i++){
        if(!choreChart[i].noChore){
            choreWinners.push(i);
        }
    };
    
// Change body of html to display results
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
        if (i<5) {
          $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[choreWinners[winningNumber]].choreName}<br>Casey Wins ${choreChart[choreWinners[winningNumber]].caseyComplete} Coin!<br>Connor Wins ${choreChart[choreWinners[winningNumber]].connorComplete} Coin!`)
          choreWinners.splice(winningNumber, 1);
          // } else if (i===4){
          //   $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[0].choreName}<br>Casey Wins ${choreChart[0].caseyComplete} Coin!<br>Connor Wins ${choreChart[0].connorComplete} Coin!`)
          } else if (i===5){
            var numberOfBonusCoins = Math.floor(Math.random() * (3 - 2 + 1)) + 2;
            if(choreChart[0].caseyComplete === 1 && choreChart[0].connorComplete === 1){
              $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[0].choreName}<br>Casey Wins ${numberOfBonusCoins} Coins!<br>Connor Wins ${numberOfBonusCoins} Coins!`)
            } else if(choreChart[0].caseyComplete === 1 && choreChart[0].connorComplete === 0){
              $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[0].choreName}<br>Casey Wins ${numberOfBonusCoins} Coins!`)
            } else if(choreChart[0].caseyComplete === 0 && choreChart[0].connorComplete === 1){
              $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[0].choreName}<br>Connor Wins ${numberOfBonusCoins} Coins!`)
            } else if(choreChart[0].caseyComplete === 0 && choreChart[0].connorComplete === 0){
              $(`#result${i}`).append(`Winning Chore #${i+1}: ${choreChart[0].choreName}<br>No one wins ${numberOfBonusCoins} Coins!`)
            }

          } else if (i===6){
            var bonusNumber = Math.floor(Math.random() * (4 - 1 + 1)+1);
            console.log(bonusNumber);
            var numberOfBonusCoins = Math.floor(Math.random() * (4 - 3 + 1)) + 3;
            if(bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete == 1 && choreChart[choreWinners[winningNumber]].connorComplete == 1 && choreChart[2].caseyComplete == 1 && choreChart[2].connorComplete == 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: ${choreChart[choreWinners[winningNumber]].choreName}<br>Casey Wins ${numberOfBonusCoins} Coins!<br>Connor Wins ${numberOfBonusCoins} Coins!`)
            } else if (bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete == 1 && choreChart[choreWinners[winningNumber]].connorComplete != 1 && choreChart[2].caseyComplete == 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: ${choreChart[choreWinners[winningNumber]].choreName}<br>Casey Wins ${numberOfBonusCoins} Coins!`)  
            } else if (bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete != 1 && choreChart[choreWinners[winningNumber]].connorComplete == 1 && choreChart[2].connorComplete == 1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: ${choreChart[choreWinners[winningNumber]].choreName}<br>Connor Wins ${numberOfBonusCoins} Coins!`)
            } else if (bonusNumber == 1 && choreChart[choreWinners[winningNumber]].caseyComplete != 1 && choreChart[choreWinners[winningNumber]].connorComplete != 1 || bonusNumber == 1 && choreChart[2].caseyComplete !=1 && choreChart[2].connorComplete !=1){
              $(`#resultBonus`).append(`Today's ***BONUS*** Chore is: ${choreChart[choreWinners[winningNumber]].choreName}<br>No one wins ${numberOfBonusCoins} Coins!`)
            } else {
              $(`#resultBonus`).append("Sorry no bonus chore today.");
            }
            choreWinners.splice(winningNumber, 1);
          }
      }
  };


// Start coin ceremony button handler
$("#startCoinCeremony-btn").on("click", startCoinCeremony);
