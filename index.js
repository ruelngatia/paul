var clicked = false;

function dropMini() {

	if (clicked == false) {
		document.getElementById('toBeHidden').style.display = 'inline'
		clicked = true;
	}else{
		document.getElementById('toBeHidden').style.display = 'none'
		clicked = false;
	}
	
}