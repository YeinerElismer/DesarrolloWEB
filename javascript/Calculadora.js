function Calculadora(pantalla)
{
    this.pantalla = pantalla;
	this.numero =0;
	this.BaseDos="";
	this.cantidad=0;
	this.base = true;
        this.EsDigito = function (dato) {
		var digitos = ["0","1","2","3","4","5","6","7","8","9"];
		var resultado = false;

		for(i = 0; i < digitos.length; i++ ) {
			if(dato == digitos[i]) {
				resultado = true;
			}
		}
		return resultado;
	}
        
	this.CalcularBase2 = function () {
		
            var resultado="";
			while(this.numero>=1){
				resultado=parseInt(this.numero)%2+resultado;
				this.numero=parseInt(this.numero)/2;
			}
			
			/*
                if (numero>0) {
                    while (numero>1) {
                        if (numero%2 == 0 ) {
                            resultado = "0"+resultado;
                        }else{
                            resultado="1"+resultado;
                        }
                        numero = parseInt(numero/2);
                    }
                } else if(numero==0){
                    resultado="0";
                }
				//resultado = "30";
				*/
                return resultado;
	}
	
	this.CalcularBase10=function(){
		var resultado = 0;
		var aux=0;
		while(aux<this.cantidad){
			if( this.numero.toString().charAt(aux)==="1" ){
				resultado=parseInt(Math.pow(2,this.cantidad-aux-1))+resultado;
			}
			aux = aux+1;
		}
		return resultado;
	}
	this.Seleccionar = function (boton) {
		var dato;
        dato = boton.innerHTML;
		if(this.EsDigito(dato)) {
			this.pantalla.value = this.pantalla.value + dato;
		}else if(dato === "Cambio") {
			/*
			      this.numero=parseInt(this.pantalla.value);
                    this.BaseDos = this.Calcular();
                    this.pantalla.value = this.BaseDos.toString();
			*/
              if(this.base===true ){
				    this.numero=parseInt(this.pantalla.value);
                    this.BaseDos = this.CalcularBase2();
                    this.pantalla.value = this.BaseDos.toString();
					this.base=false;
			  }else{
				  this.cantidad= this.pantalla.value.toString().length;
				  this.numero=parseInt(this.pantalla.value);
                    this.BaseDos = this.CalcularBase10();
                    this.pantalla.value = this.BaseDos.toString();
					this.base=true;
			  }
		}else if(dato == "C"){
			this.numero =0;
			this.BaseDos="";
			this.cantidad=0;
			this.base = true;
			this.pantalla.value = "";
			
		}
	}
}