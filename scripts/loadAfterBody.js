// enum for handling search modes
const SearchMode = {
	GOOGLE: 0,
	YOUTUBE: 1,
	DUCK: 2,
}

//default to google
var selectedSearchMode = localStorage.search_mode || SearchMode.GOOGLE;

//we assume the global variable quote has already been set
set_quote(quote);

function set_quote(quote) {
    document.getElementById("quote").innerHTML = quote;
}

//get search mode from local storage
function save_search_mode() {
    console.log("not implemented save yet");
}
