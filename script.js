// const res = require("express/lib/response");

{/* <div id="joke" class="joke">Awesome joke is loading...</div>
       <button id="jokebtn" class="btn">Next JOKE</button> */}

// PROMISES

// 2 -Condition =>Succ =>fail

// fetch()

//--Promises method to call API

// const jokes = document.querySelector("#joke");
// const jokebtn = document.querySelector("#jokebtn");


// const generateJokes = () =>{

//     const setHeader = {
//         headers:{
//             Accept:"application/json"
//         }
//     }

//     fetch("https://icanhazdadjoke.com",setHeader)
//     .then((res)=> res.json())
//     .then((data)=> {
//         jokes.innerHTML = data.joke;
//     }).catch((error)=>{
//         console.log(error);
//     })
// }


// jokebtn.addEventListener('click',generateJokes);
// generateJokes();





//---Asynchronous method to call API

const jokes = document.querySelector("#joke");
const jokebtn = document.querySelector("#jokebtn");


const generateJokes =async () =>{
    
    try{
    const setHeader = {
        headers:{
            Accept:"application/json"
        }
    }

    const res = await fetch("https://icanhazdadjoke.com",setHeader)
    const data  =await res.json();
    jokes.innerHTML = data.joke;
    }catch(error){
        console.log(`The error is ${error}`);
    }
}

jokebtn.addEventListener('click',generateJokes);
generateJokes();