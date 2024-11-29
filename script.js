// const  random  = Math.floor(Math.random()*100)
// console.log(random)

const h1Ele = document.createElement("h1")
h1Ele.innerText = `Come let's guess the number 🎲`
document.body.append(h1Ele)
const newDiv = document.createElement("div")
newDiv.setAttribute("class","random")
document.body.append(newDiv)

const input = document.createElement("input")
input.setAttribute("id","input")
newDiv.append(input)

const button = document.createElement("button")
button.setAttribute("class","btn")
button.innerText =`Guess the number`
newDiv.append(button)

const result = document.createElement("div")
result.setAttribute("class","res-div")
newDiv.append(result)



button.addEventListener(("click"),()=>{

    
        const random = Math.floor(Math.random()*10)+1
        let guess;
    
        guess = parseInt(input.value,10)
    if(isNaN(guess)){
        result.innerText = `Please enter the valid input`
        result.style.color = "red";
    } else if(guess<1 || guess>10){
        result.innerText = `Please enter 1 to 10`
        result.style.color = "red";
    }
    else if(guess>random){
           result.innerText = `Its too High`
           result.style.color = "blue"
        }else if(guess<random){
           result.innerText = `Its too Low`
           result.style.color = "blue"
        }else {
            result.innerText = `Correct! You guessed it! `
            result.style.color = 'green'
    }
input.value =""
})


    
    

