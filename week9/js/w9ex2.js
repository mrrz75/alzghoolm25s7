console.log("Test 2")



function showGreetingMessage(){
    let name = window.prompt("Wha is your name?");
    window.alert("Hello "+name);
}

//showGreetingMessage();
document.querySelector('#btn').addEventListener('click',showGreetingMessage);