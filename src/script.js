const minus=document.querySelector("#minus");
const upperButton=document.querySelector("#upper");
const pushButton=document.querySelector("#push");
const pullButton=document.querySelector("#pull");
const legsButton=document.querySelector("#legs");
const chestButton=document.querySelector("#chest");
const backButton=document.querySelector("#back");
const armsButton=document.querySelector("#arms");
const plus=document.querySelector("#plus");
const bubbleHolder=document.querySelector("#bubbles");
const bubbles=document.querySelectorAll(".bubble-small")
const workouts=document.querySelectorAll(".workout")

let bubbleArray=Array.from(bubbles);
let workoutArray=Array.from(workouts);
let emptyBubbles=new Array();
let days=2;
minus.addEventListener("click",()=>updateDays("-"));
plus.addEventListener("click",()=>updateDays("+"));

updateDays = function (sign){
    if(sign=="+"&&days<7){
        document.getElementById("days").innerText=days;
        addWorkout("")
        


    }
    else if(sign=="-"&&days>0){
        document.getElementById("days").innerText=days;
        removeWorkout(bubbleHolder.lastElementChild);
        

    }
}
for(let wrk of workoutArray){
    wrk.addEventListener("click",()=>addWorkout(wrk.id));
}
for(let bbl of bubbleArray){
    bbl.addEventListener("dblclick",()=>removeWorkout(bbl));
    bbl.addEventListener("click",()=>completeWorkout(bbl));
}



addWorkout=function(workout){
    if(days<7){
        if(workout==""||emptyBubbles.length==0){
        days+=1;
        document.getElementById("days").innerText=days;
        const newBubble=document.createElement("div");
        const newContent=document.createElement("p");
        newContent.innerText=`day ${days}:`;
        const newWorkout=document.createElement("p");
        newWorkout.innerText=workout;
        newBubble.appendChild(newContent);
        newBubble.appendChild(newWorkout);
        newBubble.addEventListener("dblclick",()=>removeWorkout(newBubble));
        if(workout!=""){newBubble.addEventListener("click",()=>completeWorkout(newBubble));}
        if(workout==""){emptyBubbles.push(newBubble);}
        newBubble.classList.add("bubble-small");
        bubbleHolder.appendChild(newBubble);
        
        }
        else{
            const newBubble=emptyBubbles.shift();
            newBubble.children[1].innerText=workout;
            newBubble.addEventListener("click",()=>completeWorkout(newBubble))
            console.log(emptyBubbles)
        }
    }
    else {
        if(emptyBubbles.length!=0){
            const newBubble=emptyBubbles.shift();
            newBubble.children[1].innerText=workout;
            newBubble.addEventListener("click",()=>completeWorkout(newBubble))
        }
    }
}

removeWorkout=function(bubble){
    
    days-=1;
    document.getElementById("days").innerText=days;
    bubbleHolder.removeChild(bubble);
}

completeWorkout=function(bubble){
    bubble.classList.toggle("complete");
}
