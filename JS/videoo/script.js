function playvideo(video)
{
    video.play()
}
function stopvideo(video)
{
    video.pause()
}
function turnOff(element) {
    if (element.innerText == "subscribed") {
        console.log;
        element.innerText = "Subscribe";
    }

    else {
        element.innerText = "Subscribed"
        console.log;
    }
}