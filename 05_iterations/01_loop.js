// for 
for (let i = 0; i <= 10; i++) {
    const element = i;
    // console.log(element);
    if (i === 5) {
        // console.log(`here is the 5`);
    }
    // console.log(element);
    // console.log(`initializing...`);
}

for (let i = 1; i <= 10; i++) {
    // console.log(`outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        const element = j;
        // console.log(`inner loop value: ${j}, and outer loop ${i}`);
        // console.log(i + ' * ' + j + ' = ' + i * j);
        
    }
}

const heros = ['Hulk', 'Ironman', 'Batman', 'Superman', 'captain America', 'Thor', 'Loki', 'Batman', 'Superman', 'Aquaman']

console.log(heros.length);

for (let index = 0; index < heros.length; index++) {
    const element = heros[index];
    console.log(`${index}. ${element}`);
       
}