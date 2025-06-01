export default class Commande {
    constructor (commandeNom, medicamants, medicamantQuantiter) {
        this._id = Date.now() + Math.floor(Math.random()*10)
        this._commandeNom = commandeNom;
        this._medicamant = medicamants;
        this._medicamantQuantiter = medicamantQuantiter;
    }


    get commandeNom() {
        return this._commandeNom;
    }

    set commandeNom(value) {
        this._commandeNom = value;
    }


    get medicamant() {
        return this._medicamant;
    }

    set medicamant(value) {
        this._medicamant = value;
    }

    get medicamantQuantiter() {
        return this._medicamantQuantiter;
    }

    set medicamantQuantiter(value) {
        this._medicamantQuantiter = value;
    }

    get id() {
        return this._id;
    }

    set id(value) {
        this._id = value;
    }

    pourAfficher() {
        return this.commandeNom + ": " + this._medicamantQuantiter + " " +this._medicamant ;
    }
}