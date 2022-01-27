document.addEventListener('DOMContentLoaded', ButtonL, false);

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function ButtonL() {
    let button = document.getElementById("make-promise");
    button.addEventListener("click", tryPromise);
}
function tryPromise(){
    let promise_block = document.getElementById("log");
    let gifLoad = document.createElement("img");
    gifLoad.id = "gif";
    gifLoad.src = "../content/load.gif";
    promise_block.appendChild(gifLoad);
    let testPromise = new Promise(async (resolve, reject) => {
        let url = "https://jsonplaceholder.typicode.com/users";
        let response;
        try {
        response = await fetch(url);
        } catch (e) {
            reject(new Error("network error"));
        }
        if (response.ok) {
            let json = await response.json();
            let data =  json[getRandomInt(json.length)];
            let userinfo = [];
            userinfo[0] = data['username'];
            userinfo[1] = data['name'];
            userinfo[2] = data['email'];
            userinfo[3] = data['address']['city'];
            userinfo[4] = data['phone'];
            userinfo[5] = data['website'];
            userinfo[6] = data['company']['name'];
            resolve(userinfo);
        }
        reject(new Error("Something went wrong"));
    }).then((val) => {
        let child = document.getElementById("gif");
        promise_block.removeChild(child);
        let card = document.getElementById("userCard");
        var clone = card.content.cloneNode(true);
        for (i = 1; i <= val.length; i++){
            clone.childNodes[1].childNodes[i * 4 - 1].textContent = val[i - 1];
        }
        promise_block.appendChild(clone);
    }).catch((reason) => {
        let child = document.getElementById("gif");
        promise_block.removeChild(child);

        let error_card = document.getElementById("errorMessage");
        var error_clone = error_card.content.cloneNode(true);
        error_clone.childNodes[1].childNodes[0].textContent = reason;
        promise_block.appendChild(error_clone);
    });
}