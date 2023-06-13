/* eslint-disable react/jsx-no-useless-fragment */
import Click from 'lesca-click';
import UserAgent from 'lesca-user-agent';
import { memo, useContext, useEffect, useId, useState } from 'react';
import { Context } from '../../../../settings/config';
import { ACTION, PAGE } from '../../../../settings/constant';
import './index.less';

const DownloadButton = memo(() => {
	const id = useId();
	const [context, setContext] = useContext(Context);
	const { body } = context[ACTION.modal];
	const [device, setDevice] = useState(UserAgent.get());

	useEffect(() => {
		Click.add(`#${id}`, () => {
			if (device === 'mobile') {
				setContext({ type: ACTION.modal, state: { enabled: true } });
			}
		});
		return () => Click.remove(`#${id}`);
	}, [device]);

	useEffect(() => {
		const resize = () => setDevice(UserAgent.get());
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);
	return (
		<>
			{(device === 'mobile' && (
				<button id={id} className='button' type='button'>
					<div>下載圖片</div>
				</button>
			)) || (
				<a href={body} className='button' download='麥當勞1+1星級點'>
					<div>下載圖片</div>
				</a>
			)}
		</>
	);
});

const AgainButton = memo(() => {
	const id = useId();
	const [, setContext] = useContext(Context);
	useEffect(() => {
		Click.add(`#${id}`, () => {
			Click.remove(`#${id}`);
			setContext({ type: ACTION.page, state: PAGE.question });
		});
		return () => Click.remove(`#${id}`);
	}, []);
	return (
		<button id={id} className='button' type='button'>
			<div>再測一次</div>
		</button>
	);
});

const Buttons = memo(({ data }) => {
	const { back, front } = data.buttonSymbols;

	return (
		<div className='Buttons'>
			<div className='back'>{back}</div>
			<DownloadButton />
			<AgainButton />
			<div className='front'>{front}</div>
		</div>
	);
});
export default Buttons;
