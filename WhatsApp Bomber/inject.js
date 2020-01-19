
function start(n,s){

window.InputEvent = window.Event || window.InputEvent;
var t=document.querySelector("#main > footer > div._2i7Ej._14Mgc.copyable-area > div._13mgZ > div > div._3u328.copyable-text.selectable-text")
var event = new InputEvent('input', {bubbles: true});


for(var i=0;i<n;i++)
{
t.textContent=s
t.dispatchEvent(event);
document.querySelector("#main > footer > div._2i7Ej._14Mgc.copyable-area > div:nth-child(3) > button > span").click()
}

}


var n=""
var s=""

chrome.storage.local.get('n', function (result) {
        n = result.n;

            
    });



chrome.storage.local.get('s', function (result) {
        s = result.s; 
        alert("WhatsApp Bomber Activated");
        start(n,s); 
        let url = chrome.runtime.getURL('beep.mp3')
	    let a = new Audio(url)
	    a.play()    
        
    });






