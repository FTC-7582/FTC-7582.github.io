// JavaScript Document
function setWidthP(element, percent){
	element.width=window.innerWidth * percent;
}

function setHeightP(element, percent){
	element.height=window.innerHeight * percent;
}

function collectionToArray(collection){
	var tmp = [];
	for (var i = 0; i < collection.length; i++){
		tmp.push(collection.item(i));
	}
	return tmp;
}

function setH1FontByScreenSize(element){
	console.log((window.innerWidth*window.innerHeight));
	console.log(1366*433);
	console.log((window.innerWidth*window.innerHeight)/(1366*433));
	element.style.fontSize = (2 * ((window.innerWidth*window.innerHeight)/(1366*433))).toString() + "em";
	//element.style.fontSize = ((window.innerWidth > window.innerHeight) ? (2 * ((1366*433)/(window.innerWidth*window.innerHeight))).toString() + "em" : "1.5em");
}

function setH3FontByScreenSize(element){
	element.style.fontSize = ((window.innerWidth > window.innerHeight) ? window.innerWidth/683 : 0) + "em";
}

function setPFontByScreenSize(element){
	element.style.fontSize = ((window.innerWidth > window.innerHeight) ? window.innerWidth/1366 : 0) + "em";
}

function percentToPixels(percent){
	return window.innerWidth * (percent/100);
}

function setDropdownVisible(){
	document.getElementById("ddc1").style.display="block";
}

function setDropdownInvisible(){
	document.getElementById("ddc1").style.display="none";
}