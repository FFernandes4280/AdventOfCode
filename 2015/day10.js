let input = "1113222113";

for (let i = 0; i < 50; i++) {
    input = lookAndSay(input);
}

console.log(input.length);

function lookAndSay(input) {
    let count = 1;
    let answer = []; 
    
    for (let i = 1; i < input.length; i++) {
        if (input[i] === input[i - 1]) {
            count++;
        } else {
            answer.push(count, input[i - 1]);
            count = 1;
        }
    }
    
    answer.push(count, input[input.length - 1]);
    return answer.join(''); 
}