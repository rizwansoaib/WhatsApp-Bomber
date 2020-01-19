


function get() {

	var n=document.getElementById('count').value;
	var s=document.getElementById('message').value;


	
chrome.storage.local.set({
    'n': n,
    's':s
});

chrome.tabs.executeScript({
    file: 'inject.js'
  }); 



    




  
   




  
}

document.getElementById('start').addEventListener('click', get);

