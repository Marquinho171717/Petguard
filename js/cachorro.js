function gerarcard(){
const main_div = document.getElementById ("main_div");
const card_div = document.createElement ("div")
const tittle_div = document.createElement  ("div")
const body_div = document.createElement  ("div")

card_div.id = "card"
body_div.id = "body"
tittle_div.id = "tittle"
tittle_div.textContent = "Ração"
main_div.appendChild(card_div)
card_div.appendChild(tittle_div)
card_div.appendChild(body_div)

}