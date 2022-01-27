var taskID = 0;

function oldTasks() {
    let keys = Object.keys(localStorage);
    keys.sort()
    for (let i = 0; i < keys.length; i++) {
        let key = keys[i];
        let lineValue = localStorage.getItem(key);
        newLine(key, lineValue);
        if (key[0] === "d"){
            taskID = key.slice(1);
        }else{
            taskID = key;
        }
    }
}

document.addEventListener('DOMContentLoaded', oldTasks, false);
function newElement() {
    let inputValue = document.getElementById("newInput").value;
    taskID++;
    localStorage.setItem(taskID, inputValue);
    newLine(taskID, inputValue);
}

function newLine(key, value) {
    document.getElementById('newInput').value='';
    let ul = document.getElementById("TaskList");
    let templ = document.getElementById("line");
    let clone = templ.content.cloneNode(true);
    clone.childNodes[1].childNodes[0].textContent = value;
    if (key[0] === 'd') {
        clone.childNodes[1].classList.add("done");
    }
    ul.appendChild(clone);
    let dn = document.getElementsByClassName("close");
    let dels = document.getElementsByClassName("del");


    for (i = 0; i < dn.length; i++) {
        dn[i].onclick = function() {
            let line = this.parentElement;
            let keys = Object.keys(localStorage);
            keys.sort();
            console.log(keys)
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                console.log(localStorage.getItem(key))
                if (localStorage.getItem(key) === line.childNodes[0].data) {
                    if (key[0] !== "d") {
                        line.classList.add("done");
                        localStorage.removeItem(key);
                        localStorage.setItem("d" + key, line.childNodes[0].data);
                    } else {
                        line.classList.remove("done");
                        localStorage.removeItem(key);
                        localStorage.setItem(key.slice(1), line.childNodes[0].data);
                    }
                    break;
                }
            }
        }
    }

    for (i = 0; i < dels.length; i++) {
        dels[i].onclick = function() {
            let line = this.parentElement;
            let keys = Object.keys(localStorage);
            keys.sort();
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                if (localStorage.getItem(key) === line.childNodes[0].data) {
                    localStorage.removeItem(key);
                    line.remove();
                    break;
                }
            }
        }
    }


}