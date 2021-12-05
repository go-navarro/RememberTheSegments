const offColor = "#ffffff";
const segmentInfo = { "segment0": "#cd7f32", "segment1": "#ffbf00", "segment2": "#880808", "segment3": "#000000" };
const statusColors = { "success": "#7ec850", "failure": "#ff4d4d" };
const numSegments = Object.keys(segmentInfo).length;

const numBlinks = 4;
const timeIncrement = 400;

var correctAns = [];
var userAns = [];

function isGameWon(correctAns, userAns) {
    return JSON.stringify(correctAns) === JSON.stringify(userAns);
}

function resetSegmentColor(segment) {
    document.getElementById(segment).setAttribute("fill", segmentInfo[segment]);
}

function resetSegments(segmentInfo) {
    for (segment in segmentInfo) {
        resetSegmentColor(segment);
    }
}

function registerClick(segment) {

    document.getElementById(segment).setAttribute("fill", offColor);
    userAns.push(segment);
    disableSegment(segment, true);

    if (userAns.length === numBlinks) {
        if (isGameWon(userAns, correctAns)) {
            changeStatus("You win. Play again?", "white", statusColors.success);
        } else {
            changeStatus("You lose. Play again?", "white", statusColors.failure);
        }
        userAns = []; correctAns = [];

        disableAllSegments(true);
        document.getElementById("buttonNewGame").disabled = false;

    }
    setTimeout(() => {
        resetSegmentColor(segment);
        disableSegment(segment, false);
    }, 120);
    return segment;
}

function disableAllSegments(disableYes) {
    for (segment in segmentInfo) {
        disableSegment(segment, disableYes);
    }
}

function disableSegment(segment, disableYes) {
    if (disableYes) {
        document.getElementById(segment).setAttribute("onmousedown", "");
    } else {
        document.getElementById(segment).setAttribute("onmousedown", `registerClick("${segment}")`);
    }
}

function changeStatus(statusText, statusTextColor, statusBackground) {
    let button = document.getElementById("buttonNewGame");
    button.innerText = statusText;
    button.innerText = statusText;
    button.style.color = statusTextColor;
    button.style.background = statusBackground;
}
