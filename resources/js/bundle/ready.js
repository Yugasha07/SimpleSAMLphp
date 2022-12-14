'use strict';

window.readyHandlers = [];
window.ready = function ready(handler)
{
    window.readyHandlers.push(handler);
    handleState();
};

window.handleState = function handleState()
{
    if (document.readyState === 'interactive' || document.readyState === "complete") {
        while (window.readyHandlers.length > 0) {
            (window.readyHandlers.shift())();
        }
    }
};

document.onreadystatechange = window.handleState;
