function turnOff(element) {
    console.log(element);

    if (element.innerText == "Login") {
        console.log;
        element.innerText = "Logout";
    }
    else {
        element.innerText = "Login"
        console.log;
    }
}

function hide (element) {
    element.remove();

}