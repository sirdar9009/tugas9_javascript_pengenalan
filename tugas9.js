var nilai={
	a:1,
	b:2,
	c:3,}
console.log(nilai,"awal")
nilai.a=10,
nilai.b=20,
nilai.c=30,

console.log(nilai,"setelah dirubah")


for(let x in nilai){
	console.log(nilai[x])
}