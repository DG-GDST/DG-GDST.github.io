var now = new Date();
window.onload = function(){
    var OutputText = document.getElementById("timeinfo")
    OutputText.innerHTML += ' ' + new Date().getTime() - now.getTime() + ' milliseconds';
    var page = document.location.href.split('/');
    switch (page[page.length - 1]) {
        case "index.html":
        {
            document.getElementById("main").classList.add("page-navigation_selected");
            break;
        }
        case "table-page.html":
        {
            document.getElementById("table").classList.add("page-navigation_selected");
            break;
        }
        case "form-page.html":
        {
            document.getElementById("form").classList.add("page-navigation_selected");
            break;
        }
        case "promises.html":
        {
            document.getElementById("promises").classList.add("page-navigation_selected");
            break;
        }
    }
}
