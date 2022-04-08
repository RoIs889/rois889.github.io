var isImg1=true;
var isImg2=false;
function bodyImg(){
	if(isImg1==true){
		document.body.style.backgroundImage='url("C:/xampp/htdocs/My portfolio/assets/light_background.jpg")';
		document.body.style.color='black';
		isImg1=false;
		isImg2=true;
	}
	else if(isImg2==true){
		document.body.style.backgroundImage='url("C:/xampp/htdocs/My portfolio/assets/dark_background.png")';
		isImg1=true;
		isImg2=false;
	}
}