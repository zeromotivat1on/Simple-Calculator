var buttons = document.getElementsByTagName('button');
var display = document.getElementById('display');
var history_text = document.getElementById('history_text');

var display_font_size_em = 3;
var angle = 'DEG';

for (let currButton of buttons) {
    currButton.addEventListener('click', function() {
        if (this.innerHTML == '=' && display.value.length > 0 && display.value.includes('=') == false) {

            history_text.value = display.value;
            
            if (display.value.indexOf('^') > -1) {
                let base = display.value.slice(0, display.value.indexOf('^'));
                let exponent = display.value.slice(display.value.indexOf('^') + 1);
                display.value = eval('Math.pow(' + base + ',' + exponent + ')');
            } else {
                display.value = eval(display.value);
            }

        } else if (this.innerHTML == 'C') {

            history_text.value = '';
            display.value = '';

        } else if (this.innerHTML == 'π') {

            let wasPI = false;
            if(display.value.includes(Math.PI) == true || wasPI == true || display.value.length > 0) { 
                display.value *= Math.PI; 
                wasPI = true;
            }
            else { display.value = Math.PI; }

        } else if (this.innerHTML == 'e') {

            let wasE = false;
            if(display.value.includes(Math.E) == true || wasE == true || display.value.length > 0) { 
                display.value *= Math.E; 
                wasE = true;
            }
            else { display.value = Math.E; }

        } else if (this.innerHTML == '%') {

            history_text.value = `${display.value}%`;
            display.value = display.value / 100;

        } else if (this.innerHTML == 'cos') {

            if(angle == 'DEG') {
                display.value = Math.cos(toRadians(display.value));
                display.value = Math.fround(display.value);
            } else {
                display.value = Math.cos(toDegrees(display.value));
                display.value = Math.fround(display.value);
            }
            
        } else if (this.innerHTML == 'sin') {

            if (angle == 'DEG') {
                display.value = Math.sin(toRadians(display.value));
                display.value = Math.fround(display.value);
            } else {
                display.value = Math.sin(toDegrees(display.value));
                display.value = Math.fround(display.value);

            }

        } else if (this.innerHTML == 'tan') {

            if (angle == 'DEG') {
                display.value = Math.tan(toRadians(display.value));
                display.value = Math.fround(display.value);
            } else {
                display.value = Math.tan(toDegrees(display.value));
                display.value = Math.fround(display.value);
            }

        } else if (this.innerHTML == 'RAD') {

            angle = 'RAD';
            document.querySelector('.angle_div').innerHTML = angle;

        } else if (this.innerHTML == 'DEG') {

            angle = 'DEG';
            document.querySelector('.angle_div').innerHTML = angle;

        } else if (this.innerHTML == 'n!') {

            if (display.value == 0) { display.value = '1'; }
            else if (display.value < 0) { display.value = NaN; } 
            else {
                let number = 1;
                for (let i = display.value; i > 0; i--) {
                    number *= i;
                }
                display.value = number;
            }

        } else if (this.innerHTML === '√') {

            history_text.value = `√${display.value}`;
            display.value = Math.sqrt(display.value);
            display.value = Math.fround(display.value);
    
        } else if (this.innerHTML == '+/-') {

            if (display.value.charAt(0) == '-') {
                display.value = display.value.slice(1);
            } else {
                display.value = '-' + display.value;
            }

        } else if (this.innerHTML == '&lt;') {

            display.value = display.value.substring(0, display.value.length - 1);

        } else if (this.innerHTML === 'log') {

            display.value = Math.log10(display.value);
            display.value = Math.fround(display.value);
    
        } else if (this.innerHTML === 'ln') {
    
            display.value = Math.log(display.value);
            display.value = Math.fround(display.value);
    
        } else {

            if(display.value.length > 16) {
                if(display_font_size_em > 2) { display_font_size_em -= 0.25; }
                display.style.fontSize = `${display_font_size_em}em`;
            } else {
                display_font_size_em = 3;
                display.style.fontSize = `${display_font_size_em}em`;
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