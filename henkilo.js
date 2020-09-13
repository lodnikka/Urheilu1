"use strict";

function Henkilo()
{
    this.etunimi = en; 
    this.sukunimi= sn; 
    this.kutsunimi = kn;
    this.age = age;       
}
class Urheilija {
    constructor(kuva,paino,laji,saavutus) 
    {
        this._kuva = kuva;
        this._paino = paino;
        this._laji = laji;
        this._saavutus = saavutus;
        console.log("UUdet tiedot, this");
    }

//_kuva
get kuva() {
    return this._kuva;
}
set kuva(value) {
    this._kuva = value;
}

//_paino;
get paino() {
    return this._paino;
}
set lastName(value) {
    this._paino = value;
}

//_laji;
get laji() {
    return this._laji;
}
set laji(value) {
    this._laji = value;
}

//_saavutukset;
get saavutus() {
    return this._saavutus;
}
set saavutus(value) {
    this._saavutus = value;
}
}


var person = new Urheilija("linkki_kuvaan", "99", "Judo","mestari");

console.log(person);