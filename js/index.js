// Iteration 1: Names and Input
const hacker1 = 'Ernesto'
console.log(`The driver's name is ${hacker1}`)

const hacker2 = 'Arseni'
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${hacker2.length} characters!`)
}

// Iteration 3: Loops
let capitalized = " "
for (let i = 0; i < hacker1.length; i++) {
    capitalized += hacker1.charAt(i) + " "
}
console.log(capitalized.toUpperCase())

let reversed = " "
for (let i = hacker2.length; i >= 0; i--) {
    reversed += hacker2.charAt(i)
}
console.log(reversed)

let paragraph1 = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit.Maxime, consequuntur labore.Velit, necessitatibus porro, neque mollitia quidem veniam delectus odio pariatur quos autem iste voluptas.Quam cum sint vel nostrum Lorem ipsum dolor et sit amet consectetur, adipisicing elit.Exercitationem veritatis maiores voluptatum qui quis id placeat.Culpa quas beatae unde vel itaque architecto delectus et totam reiciendis ? Quisquam, et quis consequuntur! Lorem, ipsum dolor sit amet consectetur adipisicing elit.Incidunt laboriosam rem reiciendis repudiandae commodi minus ratione amet dicta laudantium cumque nulla natus laborum atque ex, eius, consectetur, aperiam animi.Iure.'

let a = paragraph1.split(' ')
let count = 0
for (let i = 0; i < a.length; i++) {
    if ('et' === a[i])
    count++
}

console.log(count)




