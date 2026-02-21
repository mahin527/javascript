const githubUname = '@mahin527'
let repoCount = 10

// console.log('My github username is '+ githubUname);
// console.log(`My github username is ${githubUname} and my repo count is ${repoCount}`);

const gameName = new String('Free-fire-game')

console.log(gameName);
// console.log(typeof gameName);
// console.log(gameName[4]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(6));
// console.log(gameName.indexOf('f'));

const newString = gameName.substring(5, 9)
console.log(newString);

const AnotherString = gameName.slice(-5, -1)
console.log(AnotherString);

let userName = '     abubakar    '
console.log(userName);
console.log(userName.trim());
// trim_start, trim_end

const url = 'https://mahin%20hasan.com'
console.log(url.replace('%20', '-'));

console.log(url.includes(' '));

console.log(gameName.split('-'));
