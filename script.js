// function ShowMessage()
//  {

//     alert("Hello after 3 Second");
    
// }

// function startTimeout()
//  {

//     setTimeout(ShowMessage,3000);
    
// }



// function Message()
//  {

//     alert("Hello every 3 Second");
    
// }

// function startInterval()
//  {

//     setInterval(startInterval,3000);
    
// }



let time = 10;
let timer; 

function updatetimer()
 {
    document.getElementById("timer").innerText=time;

    if(time===0){
        clearInterval(timer);
        alert("Time is Up!");

    }
    
    time--;
}



function startCoundoun()
 {
    time=10;
    timer=setInterval(updatetimer,1000);
    
}