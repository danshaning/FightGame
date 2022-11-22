class Character {
    constructor(pseudo, classe , health, attack) {
        this.pseudo = pseudo;
        this.classe = classe;
        this.health = health;
        this.attack = attack;
        this.level = 1;

    }

    evolve(){
        this.level ++;
        console.log(this.pseudo + " upgraded to level " + this.level);
    }

    checkHealth(){
        if(this.health <= 0){
            this.health = 0;
            console.log(this.pseudo + " loss");
        }
    }

    get informations(){
        return (this.pseudo + "( " + this.classe + " ) have " + this.health + " life points and is at level " + this.level);    
    }


}

class Sorcerer extends Character {
    constructor(pseudo) {
        super(pseudo, "Sorcerer", 170, 90);
        
    }

    assault(Character){

        Character.health -= this.attack;
        console.log(this.pseudo + " hit " + Character.pseudo + " by throwing a magic spell " + "( "+this.attack + " damage )" );
        this.evolve();
        Character.checkHealth();
    }

    specialAttack (Character){
        Character.health -= (this.attack)*5;
        console.log(this.pseudo + " hit " + Character.pseudo + " with his special attack Arcane power ball " + "( "+(this.attack)*5 + " damage )" );
        this.evolve();
        Character.checkHealth();
    }

}

class Warrior extends Character {
    constructor(pseudo) {
        super(pseudo, "Warrior", 350, 50);
    }

    assault(Character){

        Character.health -= this.attack;
        console.log(this.pseudo + " hit " + Character.pseudo + " by throwing his legendary  shield " + "( "+this.attack + " damage )" );
        this.evolve();
        Character.checkHealth();
    }

    specialAttack (Character){
        Character.health -= (this.attack)*5;
        console.log(this.pseudo + " hit " + Character.pseudo + " with his special attack Omega Shield of death " + "( "+(this.attack)*5 + " damage )" );
        this.evolve();
        Character.checkHealth();
    }
}

var indra = new Sorcerer("Indra");
var captainAmerica = new Warrior("Captain America");

console.log(indra.informations);
console.log(captainAmerica.informations);
indra.assault(captainAmerica);
console.log(captainAmerica.informations);
captainAmerica.assault(indra);
console.log(indra.informations);
captainAmerica.specialAttack(indra);