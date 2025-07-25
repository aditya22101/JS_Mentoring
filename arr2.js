const marv_heros = ["thor", "spiderman"," dr. strange"]
const dc_heros = ["superman","batman","flash"]
// marv_heros.push(dc_heros)
// console.log(marv_heros);
const allheros = marv_heros.concat(dc_heros);
console.log(marv_heros)
console.log(allheros)
const allnheros = [... marv_heros, ...dc_heros]
console.log(allnheros);
const another_array = [1,2,3,[4,9],[[9,0],2]]
console.log(another_array)
const realarray = another_array.flat(Infinity)
console.log(realarray)
console.log(Array.isArray("AAdi"));
console.log(Array.from("AADi"))
console.log(Array.from({name : "Aditya"}))