// Code your solutions in this file
function writeCards(names, occasion) {
    let output = [];
    for (let i = 0; i < names.length; i++) {
        output.push(`Thank you, ${names[i]}, for the wonderful ${occasion} gift!`);
    }
    return output;
}

function countDown(n) {
    while (n >= 0) {
        console.log(n);
        --n;
    }
}