var isImg1=true;
var isImg2=false;
function bodyImg(){
	if(isImg1==true){
		document.body.style.backgroundColor='#09101d';
		document.body.style.color='black';
		isImg1=false;
		isImg2=true;
	}
	else if(isImg2==true){
		document.body.style.backgroundColor='#36454F';
		isImg1=true;
		isImg2=false;
	}
}