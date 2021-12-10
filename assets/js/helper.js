function redirect(path){
    $(location).prop('href', "file:///C:/Users/ThinkPad%20T580/Desktop/ui/" + path)
}

$.urlParam = function(name){
	var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
	return results[1] || 0;
}

function confirm_delete() {
	return confirm('Are You Sure?!');
  }