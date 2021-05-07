let num = [9, 7, 2, 5]

/* for (let pos = 0 ; pos < num.length ; pos++) {
    console.log(num[pos])    
} */

for (let pos in num) {
    console.log(num[pos])
}

num.sort()

console.log(`Nosso vetor é ${num}`)

console.log("O tamanho do nosso array é " + num.length)