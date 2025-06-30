const header = ["MY USTHUB", "UST Portal", "USTHub", "Pure's USTHub"];
a = document.getElementById("myh1");

function randomHeader(){
    setInterval(() => {
        let x = Math.random() * header.length;
        while (a.textContent === header[Math.floor(x)]) {
            x = Math.random() * header.length;
        }
        a.textContent = header[Math.floor(x)];
    }, 500);
}

function inorderHeader(){
    setInterval(() => {
        let head= header.shift();
        header.push(head);
        a.textContent = head;
    }, 500);
}

function recursion_test(num){
    if (num===0){
        return 0;
    }
    if(num===1){
        return 1;
    }
    return recursion_test(num-1)*num;
}
inorderHeader();
console.log(recursion_test(5)); // 120
// randomHeader();
