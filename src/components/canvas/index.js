/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable no-confusing-arrow */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
import { memo, useContext, useEffect, useRef, useState } from 'react';
import './index.less';
import { Context } from '../../settings/config';
import { ACTION, IDs } from '../../settings/constant';
import ENF from './img/ENF.png';
import ENT from './img/ENT.png';
import ESF from './img/ESF.png';
import EST from './img/EST.png';
import INF from './img/INF.png';
import INT from './img/INT.png';
import ISF from './img/ISF.png';
import IST from './img/IST.png';
import Star from './img/star.svg';
import { ResultContext, ResultSteps } from '../../pages/result/config';

const Canvas = memo(() => {
	const ref = useRef();
	const [context, setContext] = useContext(Context);
	const { id, userName } = context[ACTION.result];

	const [, setState] = useContext(ResultContext);

	const [size, setSize] = useState();
	const [star, setStar] = useState();

	useEffect(() => {
		if (size) {
			const ctx = ref.current.getContext('2d');
			ctx.drawImage(size.target, 0, 0);

			ctx.font = '38px Microsoft JhengHei, 微軟正黑體, PingFang, LiHei Pro, 黑體-繁, sans-serif';
			ctx.fillStyle = '#fff';
			ctx.fillText(userName, 382, 213);

			const split = userName.split('');
			const offset = split
				.map((s, i) => (userName.charCodeAt(i) >= 0 && userName.charCodeAt(i) <= 128 ? 1 : 2))
				.reduce((prev, current) => prev + current, 0);
			ctx.drawImage(star, 387 + offset * 19.5, 176);

			setContext({ type: ACTION.modal, state: { body: ref.current.toDataURL('image/png', 1) } });
			setState((S) => ({ ...S, steps: ResultSteps.fadeIn }));
		}
	}, [size]);

	useEffect(() => {
		let url = ENF;
		switch (id) {
			case IDs['1ENT']:
				url = ENT;
				break;
			case IDs['2ENF']:
				url = ENF;
				break;
			case IDs['3ESF']:
				url = ESF;
				break;
			case IDs['4INT']:
				url = INT;
				break;
			case IDs['5EST']:
				url = EST;
				break;
			case IDs['6ISF']:
				url = ISF;
				break;
			case IDs['7IST']:
				url = IST;
				break;
			case IDs['8INF']:
				url = INF;
				break;
			default:
				url = INF;
		}

		const image = new Image();
		const startImage = new Image();

		image.onload = (e) => {
			const { target } = e;
			const { width, height } = target;
			setSize({ width, height, target });
		};

		startImage.onload = (e) => {
			const { target } = e;
			setStar(target);
			image.src = url;
		};

		startImage.src = Star;
	}, [id]);

	return (
		<div className='Canvas'>
			{size && <canvas ref={ref} width={size.width} height={size.height} />}
		</div>
	);
});
export default Canvas;
