const names = ['Mary', 'Joab', 'Edward', 'Gabriel', 'Julie']

const spliced = names.splice(names.length - 2, Number.MAX_VALUE)
const pop = names.splice(names.length - 1, Number.MAX_VALUE)
const shift = names.splice(0, 1)
names.splice(names.length, 0, 'Silva')
names.splice(0, 0, 'Athirson')
console.log(names, spliced, pop, shift)
