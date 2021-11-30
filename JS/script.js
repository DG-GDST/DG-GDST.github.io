var now = new Date();
window.onload = function(){
    var OutputText = document.getElementById("timeinfo")
    OutputText.innerHTML += ' ' + new Date().getTime() - now.getTime() + ' milliseconds';
}
