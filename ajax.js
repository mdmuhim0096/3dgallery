let button = document.getElementById("btn");

function ajax(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        let h1 = document.getElementById("h1");
        h1.innerText = this.responseText;
    };

    xhr.open("GET", "./data.text");
    xhr.send();
}

button.addEventListener("click", ajax());