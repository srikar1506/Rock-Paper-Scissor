let choice=["rock","paper","scissor"]
let userChoice;
let computerChoice;
document.getElementById("ro").onclick=()=>{
    userChoice=choice[0];
    computerChoice=choice[Math.floor(Math.random()*choice.length)]
    outcome();
}
document.getElementById("pa").onclick=()=>{
    userChoice=choice[1];
    computerChoice=choice[Math.floor(Math.random()*choice.length)]
    outcome();
}
document.getElementById("sc").onclick=()=>{
    userChoice=choice[2];
    computerChoice=choice[Math.floor(Math.random()*choice.length)]
    outcome();
}
let outcome=()=>{
    if(choice==userChoice)
        {
            window.alert("it is a Tie Match!")
        }
        else if(userChoice=='rock'&& computerChoice=='scissor'||userChoice=='scissor'&&computerChoice=='paper'||userChoice=='paper'||computerChoice=='rock')
        {
            window.alert("You Won!!")
        }
        else{
            window.alert("You Lose  TRY AGAIN!!")
        }
        
}


