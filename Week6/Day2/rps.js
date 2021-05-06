//Array of choices
var rps = []
rps[0] = "Rock"
rps[1] = "Paper"
rps[2] = "Scissors"

//Array for buttons
var btn = document.querySelectorAll('button')
//assign event listeners to the buttons
btn[0].addEventListener('click', function(e){playGame(0)})
btn[1].addEventListener('click', function(e){playGame(1)})
btn[2].addEventListener('click', function(e){playGame(2)})

function playGame(playerChoice){
    //generate cpu choice
    var cpuChoice = Math.floor(Math.random() * 2.99)

    //example of switch case
    switch(playerChoice) {
        case 0:
            if(cpuChoice == 0){
                //its a tie
                showResults("Rock","Rock","Oof")
            } 
            else if(cpuChoice == 1){
                //computer wins
                showResults("Rock","Paper","Get Gud")
            }
            else{
            //u win
            showResults("Rock","Scissors","U Win")
            }
            break;
            
        case 1:
            if(cpuChoice == 0){
                //u win
                showResults("Paper","Rock","U Win")
            } 
            else if(cpuChoice == 1){
                //tie
                showResults("Paper","Paper","Oof")
            }
            else{
            //computer wins
            showResults("Paper","Scissors","Get Gud")
            }    
        break;
        case 2:
            if(cpuChoice == 0){
                //its a tie
                showResults("Scissors","Rock","Get Gud")
            } 
            else if(cpuChoice == 1){
                //computer wins
                showResults("Scissors","Paper","U Win")
            }
            else{
            //u win
            showResults("Scissors","Scissors","Oof")
            }    
        break;
    }
}

function showResults(pChoice,cChoice,result) {
    document.getElementById("pChoice").innerHTML = pChoice
    document.getElementById("cChoice").innerHTML = cChoice
    document.getElementById("result").innerHTML = result
}
