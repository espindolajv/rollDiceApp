function diceRoll(){
    const inputValue = document.getElementById("input-value").value

    const outputNumbers = document.getElementById("output")

    const outputImg = document.getElementById("dic-img")

    const values = []
    const images = []

    for(let i = 0; i<inputValue; i++){
        const value = Math.floor(Math.random() * 6) + 1
        values.push(value)
        images.push(`<img src="img/${value}.png" alt="Dice ${value}">`)
    }

    outputNumbers.textContent = `dice: ${values.join(', ')}`   
    outputImg.innerHTML = images.join('')
}   
const button = document.getElementById("btn-submit")

button.onclick = diceRoll

console.log(images)