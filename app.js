var str =  "'li', 'div', 'li', 'p', 'h1', 'p', 'h1', 'div', 'div', 'li', 'h1',  'p', 'h1', 'ol’, ‘br’";
var words = str.split(" ");
var collect = {};
for (var i = 0; i < words.length; i++) {
    if (!collect[words[i]])
        collect[words[i]] = 0;
    collect[words[i]]++;
}

for(var word in collect)
    console.log(word, collect[word]);


let arr = [10, 20, 30, 50, 235, 30000, 5000439857];

for (let i = 0; i < arr.length; i++) {
    let num = String(arr[i]);
    let char = num[0];
    if (char == 1 || char == 2 || char == 5) {
        console.log(num);
    }
}


for (i=20;i>0;i--) {
    console.log(i);
}
