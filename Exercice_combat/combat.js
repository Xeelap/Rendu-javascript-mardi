console.log('COMBAT')
console.log('==============================')

function verifPrecision(combattant) {
    let x = Math.random()
    if (x<combattant.precision){
        return true
    }else {
        return false
    }
} // fonction precision qui determine si l'attaque fonctionne

function attaquer(attaquant, cible) {
    console.log(attaquant.nom + " tente une attaque...")
    let precis = verifPrecision(attaquant)
        if (precis == true) {
            cible.pv -= attaquant.attaque
            console.log(" Touché ! " + cible.nom + " perd " + attaquant.attaque + " PV")
        } else {
            console.log(" Attaque ratée")
        }
} // fonction attaque pour chaque fois que le perso attaque, inflige le nombre de degats si l'attaque fonctionne

let abdoul = {
    nom: "Abdoul",
    pv: 200,
    attaque: 30,
    precision: 0.4,
}

let sawda = {
    nom: "Sawda",
    pv: 170,
    attaque: 24,
    precision: 0.6,
} // genere les persos

let tour = 1

while (abdoul.pv > 0 && sawda.pv > 0) {
    console.log("====== Tour " + tour + " ======")
    attaquer(abdoul, sawda)
    if (sawda.pv <= 0) break
    attaquer(sawda, abdoul)
    console.log("PV Abdoul : " + abdoul.pv)
    console.log("PV Sawda : " + sawda.pv)
    tour++
} // boucle pour chaque tour
if (abdoul.pv > 0) {
    console.log("Sawda n'a plus de pv")
    console.log("Perso KO")
    console.log("Victoire d'Abdoul dans le colisée")
} else {
    console.log("Abdoul n'a plus de pv")
    console.log("Perso KO")
    console.log("Victoire de Sawda dans le colisée")
}
// annonce le vainqueur