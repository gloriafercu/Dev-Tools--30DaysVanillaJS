const dogs = [
	{name: 'Snickers', age: 2},
	{name: 'Hugo', age: 8}
];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

/* Regular */

console.log('Hola! me llamo Gloria');

/* Interpolated */

console.log('Hola, soy un %s string', ':P');

/* Styled */

console.log('%c Soy un texto muy chulo', 'font-size: 50px; background: lightgreen; text-shadow: 2px 2px 2px black');

/* Warning! */

console.warn('Cuidado!');

/* Error :| */

console.error('Peligro!');

/* Info */

console.info('Información!');

/* Testing */

console.assert(1===2, 'It is wrong!')

/* Clearing */

console.clear();

/* Viewing DOM Elements */

// console.log(p);
// console.dir(p);

/* Grouping together */

dogs.forEach(dog => {
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
})
dogs.forEach(dog => {
	console.groupCollapsed(`${dog.name}`);
	console.log(`This is ${dog.name}`);
	console.log(`${dog.name} is ${dog.age} years old`);
	console.log(`${dog.name} is ${dog.age * 7} dog years old`);
	console.groupEnd(`${dog.name}`);
})

/* Counting */

console.count('wes');
console.count('wes');
console.count('gloria');
console.count('sonia');
console.count('wes');
console.count('wes');
console.count('gloria');

/* Timings */

console.time('fetching data');
fetch('https://api.github.com/users/gloriafercu')
	.then(data => data.json())
	.then(data => {
		console.timeEnd('fetching data');
		console.log(data);
	});

console.table(dogs);
