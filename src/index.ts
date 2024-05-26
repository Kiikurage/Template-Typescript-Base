export function add(a: number, b: number): number {
	return a + b;
}

let x = 0;
setInterval(() => {
	x += 1;
	console.log(x);
}, 1000);

console.log("Hello World");
