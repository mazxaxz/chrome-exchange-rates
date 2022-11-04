'use strict';

const ALARM_NAME = "background-currency-update";

const URL = (source, target)  => {
    sourceUpperCase = source.toUpperCase();
    targetUpperCase = target.toUpperCase();
    return `https://g.co/finance/${sourceUpperCase}-${targetUpperCase}`;
}

(function(){
    chrome.alarms.getAll(alarms => {
        let exists = alarms.some(function(a) {
            return a.name == ALARM_NAME;
        });
        if (!exists) {
            chrome.alarms.create(ALARM_NAME, {periodInMinutes: 10});
        }
    });

    chrome.alarms.onAlarm.addListener((alarm) => {
        console.log(alarm)
    })
})();
