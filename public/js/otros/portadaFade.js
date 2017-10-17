var text1 = ["Buscamos Talento" , "Somos Head Hunters" , "Capacitate con nosotros" , "Renovate con Ingenio"];

var ima1 = [
"https://image.shutterstock.com/z/stock-photo-close-up-engineers-working-on-a-building-site-holding-a-blueprints-engineering-and-architecture-678980125.jpg",
"https://s3-us-west-2.amazonaws.com/resolveok.com/wp-content/uploads/2017/07/27025105/workplace-safety-Safety-consultant-services-OKC.jpg", "http://marsackgroup.com/images/slider/SL_3.png",
"https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/dTGsD6G/videoblocks-building-engineer-with-a-building-plan-on-a-construction-site-at-sunset_rbqb7rgae_thumbnail-full08.png"	

]

var ima2 = [
"/imagenes/web/skyline.jpg",
"/imagenes/web/portada1.jpg",


]


	function changeSlogan (slogansArray , time){
		//agregar clase shide opacity 0 y transicion 0.7
		//clase slogans opacity 1 y transicion 0.7

		var titulo = document.getElementById("slogans");
		var currText = 0;
		// titulo.textContent = slogansArray[(slogansArray.length)-1];	

	setInterval(function(){
		var textSel = slogansArray[currText];
		titulo.textContent = textSel;								
		//console.log(textSel)
		currText += 1;

		if (currText === slogansArray.length){
			currText = 0 ;
		}


	},time)	

	setTimeout(function(){
		setInterval(function(){
			titulo.classList.add("shide");	
			//console.log("repeticion desaparecer")					
		},time)
		//console.log("empieza a desaparecer")
	} , time-500)


	setTimeout(function(){
		setInterval(function(){
			titulo.classList.remove("shide");	
			//console.log("repeticion aparecer")					
		},time)
		//console.log("empieza a aparecer")
	} , time+500)					

 }

function changePortada(arrImg ,  time){
		var portada = $("#portada")
		var currImg = 0;	

		setInterval(function(){	
			var imgSel = arrImg[currImg];
			//console.log("cambiando a " +imgSel)
			portada.css({
				background: "url("+ imgSel + ")",
				color: 'white'
			});

			currImg += 1;

			if (currImg === arrImg.length){
				currImg = 0 ;
			}

		},time+2000)

	}


	window.onscroll = function(){
		var scry = window.scrollY;
		var nav = document.getElementById("navbar");

		if (scry > 600){
			nav.classList.add("highNav")

						
		}else{
			nav.classList.remove("highNav")
		}


	}


// Wrap every letter in a span

 
var time = 4500;
//changeSlogan(text1 , time)
//changePortada(ima2 , time)



function navbar(){
	var nav = $("#navbar");
	var ima = $("#isotipo")
	window.onscroll = function(){
		var x = window.scrollY;
		console.log(x)
		if (x >600){
			nav.addClass("highNav")
			ima.css({
				display:"inline-block"
			})
			
		}else{
			nav.removeClass("highNav")
			ima.css({
				display:"none"
			})
		}


	}


}

navbar();