let boxes = document.querySelectorAll(".box");  // element access for changing track
let resetbtn = document.querySelector("#reset-btn");
let newGameBtn =document.querySelector("#new-btn");
let msgContainer =document.querySelector(".msg-container")
let msg =document.querySelector("#msg");

let turnO = true; // playerx,playerO

const winPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];    // 2D array


const resetgame =()=>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");

}



boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turnO){ //player O
            box.innerHTML="O";
            turnO = false;
        }
            else {
                box.innerHTML="X";
                turnO = true;
            }
        box.disabled = true;
        checkwinner();
    });
});


 const disableBoxes=()=>{      // after winner match ticks O or X not run is disabled  fucntion written here 
            for(let box of boxes){
                box.disabled = true;
            }
}
  
const enableBoxes=()=>{      // after winner match ticks O or X not run is enabled  fucntion written here 
    for(let box of boxes){
        box.disabled = false;
        box.innerHTML="";
    }
}



const showwinner =(winner)=>{                                 // winner function create
    msg.innerHTML = `congratulation ,winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const checkwinner = () =>{
    for(let pattern of winPattern){
        let post1val = boxes[pattern[0]].innerHTML;
        let post2val = boxes[pattern[1]].innerHTML;
        let post3val = boxes[pattern[2]].innerHTML;
        if(post1val !="" && post2val !="" && post3val !=""){      // check is it empty or not agr empty hai toh next line check
            if(post1val === post2val && post2val === post3val){
                console.log("winner", post1val);                  // print winner X or O
                showwinner(post1val);
            }
        }

    }
}


newGameBtn.addEventListener("click", resetgame);
resetbtn.addEventListener("click",resetgame);





//   https://tic-tac-toe-game7dd8b3.netlify.app/