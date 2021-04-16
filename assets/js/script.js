var today = moment();
$("#currentDay").text(today.format("dddd MMMM Do, YYYY  k:mm"));

var time8 = moment('8:00', "k:mm");
$("#time8").text(time8.format("k:mm"));

var time9 = moment('9:00', "k:mm");
$("#time9").text(time9.format("k:mm"));

var time10 = moment('10:00', "k:mm");
$("#time10").text(time10.format("kk:mm"));

var time11 = moment('11:00', "k:mm");
$("#time11").text(time11.format("kk:mm"));

var time12 = moment('12:00', "k:mm");
$("#time12").text(time12.format("kk:mm"));

var time13 = moment('13:00', "k:mm");
$("#time13").text(time13.format("kk:mm"));

var time14 = moment('14:00', "k:mm");
$("#time14").text(time14.format("kk:mm"));

var time15 = moment('15:00', "k:mm");
$("#time15").text(time15.format("kk:mm"));

var time16 = moment('16:00', "k:mm");
$("#time16").text(time16.format("kk:mm"));

var time17 = moment('17:00', "k:mm");
$("#time17").text(time17.format("kk:mm"));

var time18 = moment('18:00', "k:mm");
$("#time18").text(time18.format("kk:mm"));

var time19 = moment('19:00', "k:mm");
$("#time19").text(time19.format("kk:mm"));

if (today.format("k") === time8.format("k")) { 
    $("#activityText8").css({"backgroundColor" : "navy"});
} else if (today > time8) {
    $("#activityText8").css({"backgroundColor" : "gray"});
} else {
    $("#activityText8").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") === time9.format("k")) { 
    $("#activityText9").css({"backgroundColor" : "navy"});
} else if (today >= time9) {
    $("#activityText9").css({"backgroundColor" : "gray"});
} else {
    $("#activityText9").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") == time10.format("k")) { 
    $("#activityText10").css({"backgroundColor" : "navy"});
} else if (today >= time10) {
    $("#activityText10").css({"backgroundColor" : "gray"});
} else {
    $("#activityText10").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") === time11.format("k")) { 
    $("#activityText11").css({"backgroundColor" : "navy"});
} else if (today.format("k") > time11.format("k")) {
    $("#activityText11").css({"backgroundColor" : "gray"});
} else {
    $("#activityText11").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") === time12.format("k")) { 
    $("#activityText12").css({"backgroundColor" : "navy"});
} else if (today > time12) {
    $("#activityText12").css({"backgroundColor" : "gray"});
} else {
    $("#activityText12").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") === time13.format("k")) { 
    $("#activityText13").css({"backgroundColor" : "navy"});
} else if (today > time13) {
    $("#activityText13").css({"backgroundColor" : "gray"});
} else {
    $("#activityText13").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") === time14.format("k")) { 
    $("#activityText14").css({"backgroundColor" : "navy"});
} else if (today > time14) {
    $("#activityText14").css({"backgroundColor" : "gray"});
} else {
    $("#activityText14").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") === time15.format("k")) { 
    $("#activityText15").css({"backgroundColor" : "navy"});
} else if (today > time15) {
    $("#activityText15").css({"backgroundColor" : "gray"});
} else {
    $("#activityText15").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") === time16.format("k")) { 
    $("#activityText16").css({"backgroundColor" : "navy"});
} else if (today > time16) {
    $("#activityText16").css({"backgroundColor" : "gray"});
} else {
    $("#activityText16").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") === time17.format("k")) { 
    $("#activityText17").css({"backgroundColor" : "navy"});
} else if (today > time17) {
    $("#activityText17").css({"backgroundColor" : "gray"});
} else {
    $("#activityText17").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") === time18.format("k")) { 
    $("#activityText18").css({"backgroundColor" : "navy"});
} else if (today > time18) {
    $("#activityText18").css({"backgroundColor" : "gray"});
} else {
    $("#activityText18").css({"backgroundColor" : "limegreen"});
}

if (today.format("k") === time19.format("k")) { 
    $("#activityText19").css({"backgroundColor" : "navy"});
} else if (today > time19) {
    $("#activityText19").css({"backgroundColor" : "gray"});
} else {
    $("#activityText19").css({"backgroundColor" : "limegreen"});
}