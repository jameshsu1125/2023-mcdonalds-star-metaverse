/* eslint-disable no-param-reassign */
export default class Rain {
	constructor({ container, count }) {
		this.container = container;
		this.count = count;
		this.shuffle = 8;
		this.speed = 2;
		this.offset = 0.5;
		this.minOffset = 0.7;
		this.rotateOffset = 5;

		this.createTargets();
	}

	rainTarget(target) {
		const render = () => {
			const { innerHeight } = window;
			const targetY = window.parseInt(target.style.top);
			target.style.top = `${targetY + this.speed}px`;

			const offset = window.parseInt(target.dataset.offset);
			const targetX = window.parseInt(target.style.left);
			target.style.left = `${targetX + offset}px`;

			const rotate = window.parseInt(target.dataset.rotate);
			const rotateOffset = window.parseInt(target.dataset.rotateOffset);

			const nextRotate = rotate + rotateOffset;
			target.style.transform = `rotate(${nextRotate}deg)`;
			target.dataset.rotate = nextRotate;

			if (targetY < innerHeight) requestAnimationFrame(render);
			else target.remove();
		};
		render();
	}

	createTargets() {
		[...new Array(this.count).keys()]
			.map(() => {
				const { innerWidth } = window;
				const target = document.createElement('div');
				target.classList.add(`r-${Math.round(Math.random() * this.shuffle)}`);

				const left = Math.random() * innerWidth;
				const rotate = Math.random() * 360;
				target.dataset.offset =
					left > innerWidth * 0.5
						? this.minOffset + Math.random() * this.offset
						: this.minOffset * -1 - Math.random() * this.offset;
				target.dataset.rotateOffset = -this.rotateOffset + Math.random() * this.rotateOffset * 2;
				target.dataset.rotate = rotate;

				target.style.top = `${-20 - Math.random() * 500}px`;
				target.style.left = `${left}px`;
				target.style.transform = `rotate(${rotate}deg)`;

				return target;
			})
			.forEach((item) => {
				this.rainTarget(item);
				this.container.appendChild(item);
			});
	}
}
