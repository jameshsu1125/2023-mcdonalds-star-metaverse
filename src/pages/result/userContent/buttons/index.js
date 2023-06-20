/* eslint-disable react/jsx-no-useless-fragment */
import Click from 'lesca-click';
import UserAgent from 'lesca-user-agent';
import { memo, useContext, useEffect, useId, useState } from 'react';
import { Context } from '../../../../settings/config';
import { ACTION, PAGE } from '../../../../settings/constant';
import './index.less';

let timeout;

const DownloadButton = memo(() => {
	const id = useId();
	const [context, setContext] = useContext(Context);
	const { body } = context[ACTION.modal];
	const [device, setDevice] = useState(UserAgent.get());

	useEffect(() => {
		Click.add(`#${id}`, () => {
			if (device === 'mobile') {
				setContext({ type: ACTION.modal, state: { enabled: true } });
				window.dataLayer?.push({
					event: 'click_btn',
					eventCategory: 'engagement',
					eventLabel: '下載圖片',
				});
			}
		});
		return () => Click.remove(`#${id}`);
	}, [device]);

	const onClick = () => {
		window.dataLayer?.push({
			event: 'click_btn',
			eventCategory: 'engagement',
			eventLabel: '下載圖片',
		});
		clearTimeout(timeout);
		timeout = setTimeout(() => {
			alert('下載成功！立即拿起手機開啟 Instagram Story 分享專屬你的測驗結果吧！');
		}, 2000);
	};

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
				<a href={body} onClick={onClick} className='button' download='麥當勞1+1星級點'>
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
			window.dataLayer?.push({
				event: 'click_btn',
				eventCategory: 'engagement',
				eventLabel: '再測一次',
			});
			setTimeout(() => {
				setContext({ type: ACTION.page, state: PAGE.landing });
			}, 100);
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
