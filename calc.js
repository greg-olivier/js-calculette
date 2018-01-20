var CALC = CALC || {};

CALC.vars = {
    result : document.getElementById('result')
};

var opes = {
    diviser : '/',
    fois : '*',
    moins : '-',
    plus : '+',
    paropen : '(',
    parcl : ')',
    virgule : '.'
};


CALC.events = {
    addListener: function (el, action) {
        //el = element
        el.addEventListener("click", function (event) {
            switch (action) {
                case 'v' :
                    CALC.vars.result.innerHTML += event.target.val;
                    break;
                case 'd':
                    CALC.vars.result.innerHTML = '';
                    break;
                case 'eq':
                    CALC.vars.result.innerHTML = eval(CALC.vars.result.innerText);
                    break;
                case 'pc' :
                    CALC.vars.result.innerHTML = eval(parseFloat(CALC.vars.result.innerText)/100);
                    break;
            }
        });
    }
};

for (var i = 0; i < 10; i++) {
    window['c' + i] = document.getElementById('c' + i);
    window['c' + i].val = i;
    CALC.events.addListener(window['c' + i], 'v');
}

var d = document.getElementById('delete');
CALC.events.addListener(d, 'd');

var pc = document.getElementById('pourcent');
CALC.events.addListener(pc, 'pc');

for (var y in opes) {
    window[y] = document.getElementById(y);
    window[y].val = opes[y];
    CALC.events.addListener(window[y], 'v');
}

var r  = document.getElementById('egual');
CALC.events.addListener(r, 'eq');

