let i = 0;
let s = setInterval(() => {
	console.log(`${i * 5}%{ opacity:${0.2 + Math.random() * 0.8}; }`);
	if (i === 10) clearInterval(s);
	else i++;
}, 30);

let index = 0;
let r = 15;
const render = () => {
	const x = Math.cos((Math.PI / 180) * index) * r;
	const y = Math.sin((Math.PI / 180) * index * 2) * r;

	console.log(
		`${Math.round((index / 360) * 100)}%{transform: translateX(${
			x.toFixed(2) - r
		}px) translateY(${y.toFixed(2)}px)}`,
	);
	index += 5;
	if (index <= 360) requestAnimationFrame(render);
};
render();
