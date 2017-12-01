function one ( niz, trazenaVrednost, vrednostZaZamenu ) {
    var niz1 =  new Array;
        for ( var i=0; i<niz.length; i++){
        	if( niz[i] !== trazenaVrednost ){
        		 niz1.push(niz[i]);
        	}
        	else if ( niz[i] == trazenaVrednost){
        		niz[i]=vrednostZaZamenu;
        		 niz1.push(niz[i]);
        	}

        }
    	console.log(niz1)
}
var niz = [7, 4, 52, 10, 4, 5, 12, 1, 3, 6];
var trazenaVrednost = 4;
var vrednostZaZamenu = 25;
one (niz , trazenaVrednost, vrednostZaZamenu);



// Kao ulazna vrednost zadat je niz celih brojeva. Proveriti da li u tom nizu postoje bar 2 ista elementa.
// Ukoliko postoje bar 2 ista elementa vratiti true vrednost, u suprotnom false.
 
// Primeri:
//   var niz = [3, 6, 7, 8]; // false
//   var niz = [1, 3, 1, 5]; // true

function two(niz){
	var rezultat = true;
	for (var i = 0; i < niz.length; i++) {
		for (var j = 0; j < niz.length; j++) {
			if (i !== j){
				if (niz[i] === niz[j]) {
					rezultat = true;
					break;
				}
				else {
					rezultat = false;
				}
			}
		}
			if (rezultat) {
				break;
			}
	}
	console.log(rezultat);
}

  var niz1 = [3, 6, 7, 8]; 
  var niz2 = [1, 3, 1, 5]; 

  console.log(niz1);
  two(niz1);
  console.log(niz2);
  two(niz2);



// Zadatak 3


var weight1 = prompt("Unesite tezinu prvog pregmeta (u kg)");
var weight2 = prompt("Unesite tezinu drugog pregmeta (u kg)");
var maxWeight = parseInt(16);
var sum = parseInt(weight2) + parseInt(weight1);
console.log(sum);

if (sum <= maxWeight) {
	console.log("Nosimo oba predmeta");
} else if (weight1 > maxWeight  &&  weight2 > maxWeight){
	console.log("Ne mozemo ni jedan da ponesemo");
} else if (weight1 > maxWeight  &&  weight2 <= maxWeight) {
	console.log("Mozemo poneti drugi predmet");
} else if (weight1 <= maxWeight  &&  weight2 > maxWeight) {
	console.log("Mozemo poneti prvi predmet");
} else if (weight1 <= maxWeight  &&  weight2 <= maxWeight  && sum > maxWeight) {
	console.log("Ne mozete poneti oba, mozete da birate koji predmet zelite poneti");
	var odluka = prompt("Koji predmet zelite da ponesete? Molimo ukucajte 1 ili 2");
	if (odluka == 1) {
		console.log("Odlucili ste se za prvi predmet");
	} else if ( odluka == 2) {
		console.log("Odlucili ste se za drugi predmet");
	} else {
		console.log ("Niste dobro izabrali");
	}
} else {
	console.log("Podaci nisu dobro uneti");
}