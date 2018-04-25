
let changeColor = document.getElementById('changeColor');

var switchKey="zhihu_switch_zh"

changeColor.onclick = function() {

    chrome.storage.local.get([ switchKey], function(items) {
    	console.log(items);
        var options = items;
        if(options[switchKey]==undefined){
            var arr = window.localStorage.options;
            if (arr) {
                options = JSON.parse(arr);
            }
            options[switchKey] = false;
        }else{
            options[switchKey] = !options[switchKey];
        }


        // if (!options.url) {
        //     options.url = chrome.extension.getURL("options.html");
        // }
        chrome.storage.local.set(options);
    });
};

function switchRemove() {
chrome.storage.local.get([switchKey], function(data) {
	if(data.key){
		chrome.storage.local.set({switchKey:!data.value},function(){
			console.log("value set "+!data.value);
		});
	}else{
		//init
		chrome.storage.local.set({switchKey: false}, function() {
          console.log('Value is set to ' + value);
        });
	}

});
}
