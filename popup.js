'use strict';

const CURRENCIES = ["EUR", "USD", "PLN"];

function apply() {
    //
}

(function() {
    const source = document.querySelector("#currency-source");
    const target = document.querySelector("#currency-target")
    if (!source && !target) {
        for (let i = 0; i < CURRENCIES.length; i++) {
            let option = document.createElement("option");
            option.value = CURRENCIES[i];
            option.text = CURRENCIES[i];
            source.appendChild(option);
        }
    }
    document.querySelector("#apply").addEventListener("click", apply);
}());
