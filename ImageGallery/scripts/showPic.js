function getElem(id){
	return document.getElementById("id");
}
function showPic(whichPic){
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("placeholder");
	placeholder.setAttribute("src",source);
	var text = whichPic.getAttribute("title");
	var description = document.getElementById("description");
	description.innerHTML = text;
	// console.log(description.innerHTML);
}
function countBodyChildren(){
	var body_element = document.getElementsByTagName("body")[0];
	var childNodes = body_element.childNodes;
	for(var i = 0;i<childNodes.length;i++)
	console.log(childNodes[i].nodeType);
}

countBodyChildren();