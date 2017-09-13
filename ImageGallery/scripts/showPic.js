// function getElem(id){
// 	return document.getElementById("id");
// }

function showPic(whichPic){
	if(!document.getElementById("placeholder")) return false;
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	if(placeholder.nodeName !="IMG") return false;
	placeholder.setAttribute("src",source);
	if(document.getElementById("description")){
		var text = whichPic.getAttribute("title")? whichPic.getAttribute("title"): "";
		var description = document.getElementById("description");
		if(description.firstChild.nodeType==3){
			description.firstChild.nodeValue = text;
		}
	}
	return true;
}
function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	var childNodes = body_element.childNodes;
	for(var i = 0;i<childNodes.length;i++)
		console.log(childNodes[i].nodeType);
}

function prepareGallery(){
	if(!document.getElementsByTagName) return false;
	if(!document.getElementById) return false;
	if(!document.getElementById("imagegallery")) return false;

	var gallery = document.getElementById("imagegallery");
	var links = gallery.getElementsByTagName("a");
	for(var i = 0;i < links.length; i++){
		links[i].onclick = function(){
			// this.preventDefault();
			console.log(this);
			return	showPic(this)? false : true;
		}
	}
}

function addLoadEvent(func){
	var oldLoad = window.onload;
	if(typeof window.onload != 'function' ){
		window.onload = func;
	}
	else{
		window.onload = function(){
			oldLoad();
			func();
			console.log(window.onload);
		}
	}

}
addLoadEvent(prepareGallery);