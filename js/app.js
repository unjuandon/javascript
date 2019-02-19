var calculadora = {
	init: function(){

		var num0=document.getElementById("0");
		var num1=document.getElementById("1");
		var num2=document.getElementById("2");
		var num3=document.getElementById("3");
		var num4=document.getElementById("4");
		var num5=document.getElementById("5");
		var num6=document.getElementById("6");
		var num7=document.getElementById("7");
		var num8=document.getElementById("8");
		var num9=document.getElementById("9");
		var mas=document.getElementById("mas");
		var menos=document.getElementById("menos");
		var por=document.getElementById("por");
		var dividido=document.getElementById("dividido");
		var sign=document.getElementById("sign");
		var raiz=document.getElementById("raiz");
		var igual=document.getElementById("igual");
		var punto=document.getElementById("punto");
		var on=document.getElementById("on");
		var display=document.getElementById("display");
		var sumar = false;
		var cifra =parseFloat(display.innerHTML);
		var acumulador=acumulador+cifra;
		var operacion;
		var puntos=false;



		function suma()
		{
			cifra = parseFloat(display.innerHTML);
			operacion = "+";
			display.innerHTML = "";
		}

		function resta()
		{
			cifra = parseFloat(display.innerHTML);
			operacion ="-";
			display.innerHTML = "";
		}

		function multiplicar()
		{
			cifra = parseFloat(display.innerHTML);
			operacion ="*";
			display.innerHTML = "";
		}


		function dividir()
		{
			cifra = parseFloat(display.innerHTML);
			operacion ="/";
			display.innerHTML = "";
		}



		function mostrar(num){

		if(display.innerHTML=="0")
		{
			display.innerHTML=num;
		}
		else
		{
			if(display.innerHTML.length < 8)
			{
			display.innerHTML += num;
	     }
			 if (sumar==true)
			 {
			 		display.innerHTML= suma;
			 }
		}

		}
		function resolverOperacion()
		{
				cifra2 = parseFloat(display.innerHTML);
					if(operacion == "+")
					{
						var resultado = cifra + cifra2;
						display.innerHTML=resultado;
					}
					else if (operacion=="-")
					{
						var resultado = cifra-cifra2;
						display.innerHTML=resultado;
					}
					else if (operacion=="*")
					 {
						 var resultado=cifra*cifra2;
						 display.innerHTML=resultado;
					}

			}
			function funcionPunto()
			{
				display.innerHTML;
				if (puntos==false)
				{
					if (display.innerHTML.indexOf(".")<1)
					 {
						display.innerHTML+=".";
					 }
				}
				else
				{
						display.innerHTML;
				}
			}



		on.addEventListener('click', function(){display.innerHTML="0"})
		mas.addEventListener('click', suma)
		menos.addEventListener('click', resta)
		por.addEventListener('click', multiplicar)
		dividido.addEventListener('click', dividir)
		igual.addEventListener('click', resolverOperacion)
		punto.addEventListener('click', funcionPunto)
		sign.addEventListener('click', function(){var cast = parseFloat(display.innerHTML); var signo=cast*(-1); display.innerHTML=signo;})
		num0.addEventListener('click', function(){mostrar("0")} )
		num1.addEventListener('click', function(){mostrar("1")} )
		num2.addEventListener('click', function(){mostrar("2")} )
		num3.addEventListener('click', function(){mostrar("3")} )
		num4.addEventListener('click', function(){mostrar("4")} )
		num5.addEventListener('click', function(){mostrar("5")} )
		num6.addEventListener('click', function(){mostrar("6")} )
		num7.addEventListener('click', function(){mostrar("7")} )
		num8.addEventListener('click', function(){mostrar("8")} )
		num9.addEventListener('click', function(){mostrar("9")} )

		//mas.addEventListener('click', function(){mostrar("0")})
		//menos.addEventListener('click', function(){mostrar("0")})
		//por.addEventListener('click', function(){mostrar("0")})
		//dividido.addEventListener('click', function(){mostrar("0")})
		num0.addEventListener('mousedown', function(){document.getElementById("0").style.transform="scale(0.8)"} )
		num0.addEventListener('mouseup', function(){document.getElementById("0").style.transform="scale(1)"} )
		num1.addEventListener('mousedown', function(){document.getElementById("1").style.transform="scale(0.8)"})
		num1.addEventListener('mouseup', function(){document.getElementById("1").style.transform="scale(1)"} )
		num2.addEventListener('mousedown', function(){document.getElementById("2").style.transform="scale(0.8)"} )
		num2.addEventListener('mouseup', function(){document.getElementById("2").style.transform="scale(1)"} )
		num3.addEventListener('mousedown', function(){document.getElementById("3").style.transform="scale(0.8)"} )
		num3.addEventListener('mouseup', function(){document.getElementById("3").style.transform="scale(1)"} )
		num4.addEventListener('mousedown', function(){document.getElementById("4").style.transform="scale(0.8)"} )
		num4.addEventListener('mouseup', function(){document.getElementById("4").style.transform="scale(1)"} )
		num5.addEventListener('mousedown', function(){document.getElementById("5").style.transform="scale(0.8)"} )
		num5.addEventListener('mouseup', function(){document.getElementById("5").style.transform="scale(1)"} )
		num6.addEventListener('mousedown', function(){document.getElementById("6").style.transform="scale(0.8)"} )
		num6.addEventListener('mouseup', function(){document.getElementById("6").style.transform="scale(1)"} )
		num7.addEventListener('mousedown', function(){document.getElementById("7").style.transform="scale(0.8)"} )
		num7.addEventListener('mouseup', function(){document.getElementById("7").style.transform="scale(1)"} )
		num8.addEventListener('mousedown', function(){document.getElementById("8").style.transform="scale(0.8)"} )
		num8.addEventListener('mouseup', function(){document.getElementById("8").style.transform="scale(1)"} )
		num9.addEventListener('mousedown', function(){document.getElementById("9").style.transform="scale(0.8)"} )
		num9.addEventListener('mouseup', function(){document.getElementById("9").style.transform="scale(1)"} )
		mas.addEventListener('mousedown', function(){document.getElementById("mas").style.transform="scale(0.8)"} )
		mas.addEventListener('mouseup', function(){document.getElementById("mas").style.transform="scale(1)"} )
		menos.addEventListener('mousedown', function(){document.getElementById("menos").style.transform="scale(0.8)"} )
		menos.addEventListener('mouseup', function(){document.getElementById("menos").style.transform="scale(1)"} )
		por.addEventListener('mousedown', function(){document.getElementById("por").style.transform="scale(0.8)"} )
		por.addEventListener('mouseup', function(){document.getElementById("por").style.transform="scale(1)"} )
		dividido.addEventListener('mousedown', function(){document.getElementById("dividido").style.transform="scale(0.8)"} )
		dividido.addEventListener('mouseup', function(){document.getElementById("dividido").style.transform="scale(1)"} )
		raiz.addEventListener('mousedown', function(){document.getElementById("raiz").style.transform="scale(0.8)"} )
		raiz.addEventListener('mouseup', function(){document.getElementById("raiz").style.transform="scale(1)"} )
		igual.addEventListener('mousedown', function(){document.getElementById("igual").style.transform="scale(0.8)"} )
		igual.addEventListener('mouseup', function(){document.getElementById("igual").style.transform="scale(1)"} )
		punto.addEventListener('mousedown', function(){document.getElementById("punto").style.transform="scale(0.8)"} )
		punto.addEventListener('mouseup', function(){document.getElementById("punto").style.transform="scale(1)"} )
		on.addEventListener('mousedown', function(){document.getElementById("on").style.transform="scale(0.8)"} )
		on.addEventListener('mouseup', function(){document.getElementById("on").style.transform="scale(1)"} )
		sign.addEventListener('mousedown', function(){document.getElementById("sign").style.transform="scale(0.8)"} )
		sign.addEventListener('mouseup', function(){document.getElementById("sign").style.transform="scale(1)"} )

	}
}


calculadora.init()
