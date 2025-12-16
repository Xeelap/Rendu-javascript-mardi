console.log('COMBAT')
console.log('==============================')

function verifPrecision(combattant) {
    let x = Math.random()
    if (x<combattant.precision){
        return true
    }else {
        return false
    }
}

function attaquer(attaquant, attaqué) {
    console.log(attaquant.nom + " tente une attaque...")
    let precis = verifPrecision(attaquant)
        if (precis == true) {
            attaqué.pv -= attaquant.attaque
            console.log(" Touché ! " + attaqué.nom + " perd " + attaquant.attaque + " PV")
        } else {
            console.log(" Attaque ratée")
        }
}

let abdoul = {
    nom: "Abdoul",
    pv: 200,
    attaque: 30,
    precision: 0.4,
    attaquer: function(adversaire) {
        console.log(this.nom + " tente une attaque...")
        let precis = verifPrecision(this)
        if (precis == true) {
            adversaire.pv -= this.attaque
            console.log(" Touché ! " + adversaire.nom + " perd " + this.attaque + " PV")
        } else {
            console.log(" Attaque ratée")
        }
    }
}

let sawda = {
    nom: "Sawda",
    pv: 170,
    attaque: 24,
    precision: 0.6,
    attaquer: function(adversaire) {
        console.log(this.nom + " tente une attaque...")
        let precis = verifPrecision(this)
        if (precis == true) {
            adversaire.pv -= this.attaque
            console.log(" Touché ! " + adversaire.nom + " perd " + this.attaque + " PV")
        } else {
            console.log(" Attaque ratée")
        }
    }
}

let tour = 1

while (abdoul.pv > 0 && sawda.pv > 0) {
    console.log("====== Tour " + tour + " ======")
    attaquer(abdoul, sawda)
    if (sawda.pv <= 0) break
    attaquer(sawda, abdoul)
    console.log("PV Abdoul : " + abdoul.pv)
    console.log("PV Sawda : " + sawda.pv)
    tour++
}
if (abdoul.pv > 0) {
    console.log("Victoire d'Abdoul dans le colisée")
} else {
    console.log("Victoire de Sawda dans le colisée")
}
