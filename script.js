let userscore=0;
let compscore=0;
const usersc=document.querySelector("#user-score");
const compsc=document.querySelector("#comp-score");
 const choices=document.querySelectorAll(".choice");
 const msg=document.querySelector("#moves");
 const showwinner= (userwin,userchoice,compchoice)=>{
    if(userwin){
        console.log("you win");
        userscore++;
        usersc.innerText=userscore;
        moves.innerText=`you win!your ${userchoice} beats ${compchoice}`;
        moves.style.backgroundColor="green"

    }
    else{console.log("you lose");
        compscore++;
        compsc.innerText=compscore;
        // console.log("you lose");
        moves.innerText=`you lose! ${compchoice} beats ${userchoice}`;
        moves.style.backgroundColor="red";

    }
}

const draw= ()=>
{
    console.log("draw game");
    moves.innerText="draw game!play again"
    moves.style.backgroundColor="blue"

}





const gencomputerchoice=()=>{
    //rock paper scissors
    const option=["rock","paper","scissors"];
    const ranidx=Math.floor(Math.random()*3);
    return option[ranidx];
    
}







const playgame=(userchoice)=>{
    console.log("userchoice:" ,userchoice);
    const compchoice=gencomputerchoice();
    console.log("computerchoice:",compchoice);
    if(userchoice==compchoice)
    {draw();
        //draw game
    }
    else{
        let userwin=true;
        if(userchoice== "rock")
            {
               userwin=compchoice=="paper"? false:true; 
            
            }
            else if(userchoice=="scissors")
            {
                userwin=compchoice=="paper"?true:false;
            }
            else{
                userwin=compchoice=="rock"?true:false;
            }
            showwinner(userwin,userchoice,compchoice);
        
            }
        
    }






 choices.forEach((choice=>{
    // console.log(choice)
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id")
        // console.log("choicewas clicked",userchoice);
        playgame(userchoice)
    })
 }))
