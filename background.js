chrome.browserAction.onClicked.addListener(function(tab) {

    function getParameterByName(name) {
        var url = tab.url;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }

    var videoID = getParameterByName('v');
    if (videoID != null) {
        chrome.tabs.update({url: "https://www.youtube.com/embed/" + videoID + "?autoplay=1"});
    }
});