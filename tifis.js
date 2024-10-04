var flag = true;var tablero;var fondo = {	imagenURL: "img/fondo.png",	imagenOK: false};var tifis = {	x: 0,	y: 0,	velocidad: 50,	frenteURL: "img/diana-frente.png",	frenteOK: false,	detrasURL: "img/diana-atras.png",	detrasOK: false,	derechaURL: "img/diana-der.png",	derechaOK: false,	izquierdaURL: "img/diana-izq.png",	izquierdaOK: false};var liz = {	lizURL: "img/liz.png",	lizOK: false};var teclas = {	UP: 38,	DOWN: 40,	RIGHT: 39,	LEFT: 37}function teclado (datos){	var codigo = datos.keyCode;	if (codigo==teclas.DOWN) {		moveDown();	}	else if (codigo==teclas.UP) {		moveUp();	}	else if (codigo==teclas.RIGHT) {		moveRight();	}	else if (codigo==teclas.LEFT) {		moveLeft();	}}function inicio(){	 var canvas = document.getElementById("campo");	 tablero = canvas.getContext("2d");	 fondo.imagen = new Image();	 fondo.imagen.src = fondo.imagenURL;	 fondo.imagen.onload = confirmarFondo;	 	 tifis.frente = new Image();	 tifis.frente.src = tifis.frenteURL;	 tifis.frente.onload = confirmarTifis;	 tifis.detras = new Image();	 tifis.detras.src = tifis.detrasURL;	 tifis.izquierda = new Image();	 tifis.izquierda.src = tifis.izquierdaURL;	 tifis.derecha = new Image();	 tifis.derecha.src = tifis.derechaURL;	 liz.imagen = new Image();	 liz.imagen.src = liz.lizURL;	 liz.imagen.onload = confirmarLiz;	 document.addEventListener("keydown", teclado);	 var mUp = document.getElementById("up");	 mUp.addEventListener("click",moveUp);	 var mDown = document.getElementById("down");	 mDown.addEventListener("click",moveDown);	 var mLeft = document.getElementById("left");	 mLeft.addEventListener("click",moveLeft);	 var mRight = document.getElementById("right");	 mRight.addEventListener("click",moveRight);	 }function confirmarLiz(){	liz.lizOK = true;	dibujar();}function obstaculos(x,y){	//Obstaculo superior	var z;	var zz;	for(zz=151;zz<250;zz++){		if(x == zz){			for(z=0;z<250;z+=tifis.velocidad){				if (y==z) {					flag= false;					break;				}			}			}	}		//Obstaculo Izquierdo	for (zz=151;zz<250;zz++){		if(y==zz){			for(z=0;z<150;z+=tifis.velocidad){			if (x==z) {				flag= false;			}		}				}	}		//Obstaculo Inferior	for(zz=301;zz<350;zz++){		if(y==zz){			for(z=150;z<500;z+=tifis.velocidad){			if (x==z) {				flag= false;			}		}				}	}	if(y == 350){		for(z=150;z<=450;z+=50){			if (x==z) {				flag= false;			}		}		}}function moveUp(){	flag = true;	if(tifis.y>=tifis.velocidad){				obstaculos(tifis.x,tifis.y-tifis.velocidad);		if (flag){			tifis.y-=tifis.velocidad;			tifis.frenteOK = false;			tifis.detrasOK = true;			tifis.izquierdaOK = false;			tifis.derechaOK = false;			dibujar();			}	}	}function moveDown(){	flag = true;	if(tifis.y<=400){		obstaculos(tifis.x,tifis.y+tifis.velocidad);		if (flag){			tifis.y+=tifis.velocidad;			tifis.frenteOK = true;			tifis.detrasOK = false;			tifis.izquierdaOK = false;			tifis.derechaOK = false;			dibujar();		}	}	}function moveLeft(){	flag = true;	if(tifis.x>=tifis.velocidad){		obstaculos(tifis.x-tifis.velocidad,tifis.y);		if (flag){			tifis.x-=tifis.velocidad;		tifis.frenteOK = false;		tifis.detrasOK = false;		tifis.izquierdaOK = true;		tifis.derechaOK = false;		dibujar();			}			}	}function moveRight(){	flag = true;	if(tifis.x<=400){		obstaculos(tifis.x+tifis.velocidad,tifis.y);		if (flag){			tifis.x+=tifis.velocidad;		tifis.frenteOK = false;		tifis.detrasOK = false;		tifis.izquierdaOK = false;		tifis.derechaOK = true;		dibujar();		}				}	}function confirmarTifis(){	tifis.frenteOK = true;	dibujar();}function confirmarFondo(){	fondo.imagenOK = true;	dibujar();}function dibujar(){	if (fondo.imagenOK) {		tablero.drawImage(fondo.imagen,0,0);	}	if (liz.lizOK) {		tablero.drawImage(liz.imagen,450,450);	}	if (tifis.frenteOK) {		tablero.drawImage(tifis.frente,tifis.x,tifis.y);	}	if (tifis.detrasOK) {		tablero.drawImage(tifis.detras,tifis.x,tifis.y);	}	if (tifis.izquierdaOK) {		tablero.drawImage(tifis.izquierda,tifis.x,tifis.y);	}	if (tifis.derechaOK) {		tablero.drawImage(tifis.derecha,tifis.x,tifis.y);	}}