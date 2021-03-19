var buttons = document.getElementsByTagName("button");
var display = document.getElementById("display");
var history_text = document.getElementById("history_text");

var display_font_size_em = 4;
var angle = "DEG";

for (let currButton of buttons) {
    currButton.addEventListener('click', function() {
        if (this.innerHTML == "=" && display.value.length > 0 && display.value.includes("=") == false) {
            history_text.innerHTML = display.value;
    
            display.value = eval(display.value);

        } else if (this.innerHTML == "C") {
            history_text.innerHTML = "&nbsp;";
            display.value = "";
        } else if (this.innerHTML == "π") {
            history_text.innerHTML = display.value + "π";
            display.value += Math.PI;
        } else if (this.innerHTML == "%") {
            history_text.innerHTML = `${display.value}%`;
            display.value = display.value / 100;
        } else if (this.innerHTML == "cos") {
            if(angle == "DEG") {
                display.value = Math.cos(toRadians(display.value));
                display.value = Math.fround(display.value);
            } else {
                display.value = Math.cos(toDegrees(display.value));
                display.value = Math.fround(display.value);
            }
        } else if (this.innerHTML == "sin") {
            if(angle == "DEG") {
                display.value = Math.sin(toRadians(display.value));
                display.value = Math.fround(display.value);
            } else {
                display.value = Math.sin(toDegrees(display.value));
                display.value = Math.fround(display.value);
            }
        } else if (this.innerHTML == "tan") {
            if(angle == "DEG") {
                display.value = Math.tan(toRadians(display.value));
                display.value = Math.fround(display.value);
            } else {
                display.value = Math.tan(toDegrees(display.value));
                display.value = Math.fround(display.value);
            }
        } else if (this.innerHTML == "RAD") {
            angle = "RAD";
            document.querySelector(".angle_div").innerHTML = angle;
        } else if (this.innerHTML == "DEG") {
            angle = "DEG";
            document.querySelector(".angle_div").innerHTML = angle;
        } else if (this.innerHTML == "^") {
            let temp = display.value.indexOf("^");
            if(display.value[temp] == undefined && display.value.length > 0) {
                display.value += this.innerHTML;
            }
        } else if (this.innerHTML == "+/-") {
            if (display.value.charAt(0) == '-') {
                display.value = display.value.slice(1);
            } else {
                display.value = '-' + display.value;
            }
        } else {
            if(display.value.length > 12) {
                if(display_font_size_em > 2) { display_font_size_em -= 0.25; }
                display.style.fontSize = `${display_font_size_em}em`;
            } else {
                display.style.fontSize = `4em`
            }
            display.value += this.innerHTML;
        }
    });
}

function toDegrees (angle) {
    return angle * (180 / Math.PI);
}

function toRadians (angle) {
    return angle * (Math.PI / 180);
}