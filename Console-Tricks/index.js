const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
const p = document.querySelector('p');
function makeGreen() {
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
// Regular
console.log('hello');

// Interpolated
console.log('hello I am a %s string! ','Hi');
// Styled
// console.log('%c I am some great text',
// 'font-size:50px; background: red; text-shadow: 3px 3px 0 blue;')

// warning!
console.warn('this is a warning');
// Error :|
console.error('ah shiit');
// Info
console.info('Have some info');
// Testing
 console.assert(p.classList.contains('ouch'), 'That is wrong!');
// clearing
// console.clear();
// Viewing DOM Elements
console.log(p);
console.dir(p);
// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`this is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old `);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('greg');
console.count('greg');
console.count('greg');
console.count('greg');
// timing
console.time('fetching data');
fetch('https://api.github.com/users/greg-hub')
.then(data => data.json())
.then(data => {
  console.timeEnd('fetching data');
  console.log(data);
});

console.table(dogs);
