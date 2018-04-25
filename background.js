chrome.runtime.onInstalled.addListener(function() {
  chrome.storage.sync.set({color: '#3aa757'}, function() {
    console.log('The color is green.');
  });
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    chrome.declarativeContent.onPageChanged.addRules([{
      conditions: [new chrome.declarativeContent.PageStateMatcher({
        pageUrl: {hostEquals: 'www.zhihu.com'}
      })],
      actions: [new chrome.declarativeContent.ShowPageAction()]
    }]);
  });
});


chrome.omnibox.onInputChanged.addListener(
  function(text, suggest) {
    updateDefaultSuggestion(text);
        results.push({
          content: path + '@' + line,
          description: description
        });
      suggest(results);


      chrome.bookmarks.getTree(function what(results){
        console.log("aaa");
          console.log(results);
      });
    })



function resetDefaultSuggestion() {
  chrome.omnibox.setDefaultSuggestion({
    description: '<url><match>快捷查找书签:</match></url> Search Chromium source'
  });
}

function updateDefaultSuggestion(text) {
  var description = '<match><url>快捷查找书签</url></match><dim> :</dim>';
  description +='<match>' + text + '</match>';

  chrome.omnibox.setDefaultSuggestion({
    description: description
  });
}

resetDefaultSuggestion();

chrome.omnibox.onInputStarted.addListener(function() {
  updateDefaultSuggestion('');
});

chrome.omnibox.onInputCancelled.addListener(function() {
  resetDefaultSuggestion();
});
