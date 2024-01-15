let choices = document.querySelectorAll(".choice");
let myScoreText = document.querySelector("#myscore");
let compScoreText = document.querySelector("#compscore");
let msg = document.querySelector(".msg");
let myScore = 0;
let compScore = 0;
let Win = true;


choices.forEach(choice=>{
    choice.addEventListener("click",()=>{

        let userChoice = choice.getAttribute("id");
        PlayGame(userChoice);
        ScoreCount();
       
    })

});

const ScoreCount = ()=>{
    if(Win==true)
    {
        myScore++;
        myScoreText.innerText = myScore;
        msg.innerText = "You Win";
        
        
        
    }
     else if(Win==false)
    {
        compScore++;
        compScoreText.innerText = compScore;
        msg.innerText = "Comp Win";
      
    }
    else{
        msg.innerText = "Game Draw";


    }
}

const CompChoice = ()=>{

    let ch = ["rock","paper","scissor"];

    let randIdx = Math.floor(Math.random()*3);
    
    return ch[randIdx];
}

const PlayGame = (userChoice)=>{
    let userc = userChoice;
    let compc = CompChoice();
   

    if(userc===compc)
    {
        console.log(`Draw. Smae ${userc} and ${compc}`);
       
    }
    else
    {
        if(userc==="rock")
        {
            if(compc=="paper")
            {
                console.log(`Computer wins .beacause your choice is ${userc} and computer is ${compc}`);
                Win = false;
            }
            else if(compc=="scissor")
            {
                Win = true;
                console.log(`You wins .beacause your choice is ${userc} and computer is ${compc}`);
            } 

        }
        else if(userc=="paper")
        {
            if(compc=="rock")
            {
                Win = true;
                console.log(`you wins .beacause your choice is ${userc} and computer is ${compc}`);
            }
            else if(compc=="scissor")
            {
                Win=false;
                console.log(`computer wins .beacause your choice is ${userc} and computer is ${compc}`);
            } 

        }
        else if(userc=="scissor")
        {
            if(compc=="rock")
            {
                Win = false;
                console.log(`computer wins .beacause your choice is ${userc} and computer is ${compc}`);
            }
            else if(compc=="paper")
            {
                Win = true;
                console.log(`you wins .beacause your choice is ${userc} and computer is ${compc}`);
            } 

        }
    }
   



}