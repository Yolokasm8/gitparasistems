function sw (formulario) {
			var ape=formulario.Apellido.value;
			var nom=formulario.Nombre.value;
			var f=parseInt(formulario.zona.value);
			switch (f) {
					case 1 :
					document.getElementById("mensaje").innerHTML = "Zona: Norte" + "<br/>Votante:" + nom+" "+ ape;
					
					break;

					case 2 :
					document.getElementById("mensaje").innerHTML="Zona: Centro" + "<br/>Votante:" + nom+" "+ ape;
					
					break;

					case 3 :
					document.getElementById("mensaje").innerHTML="Zona: Sur" + "<br/>Votante:" + nom+" "+ ape;
					
					break;
				default:
				window.alert("Atención: No seleccionaste una zona. Intentalo de nuevo por favor.");

					break;
			}
		}