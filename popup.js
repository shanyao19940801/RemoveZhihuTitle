// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

console.log("init popup.js");

let changeColor = document.getElementById('changeColor');

// chrome.storage.local.get('color', function(data) {
//   changeColor.style.backgroundColor = data.color;
//   changeColor.setAttribute('value', data.color);
// });

var switchKey="zhihu_switch_zh"

changeColor.onclick = function() {
//   chrome.storage.local.get([switchKey], function(data) {
//   	console.log(data);
// 	if(data.key){
// 		chrome.storage.local.set({switchKey:true},function(){
// 			// console.log("value set "+!data.value);
// 			// if(!data.value){
//    //        		changeColor.setAttribute('style','background-color: green');
// 			// }
// 			// else{
//    //        		changeColor.setAttribute('style','background-color: red');
// 			// }
// 		});
// 	}else{
// 		//init
// 		chrome.storage.local.set({switchKey: false}, function() {
//           console.log('Value is set to false');
//           changeColor.setAttribute('style','background-color: red');
//         });
// 	}

// });
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



// function switch(){
// 	var value=localStorage.getItem(switchKey);
// 	console.log(value);
// 	if(value!=nudefined){
// 		localStorage.setItem(!value);
// 	}
// }

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
