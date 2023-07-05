import copy from 'copy-text-to-clipboard';
import Click from 'lesca-click';
import OnloadProvider from 'lesca-react-onload';
import QueryString from 'lesca-url-parameters';
import useTween from 'lesca-use-tween';
import { memo, useCallback, useContext, useEffect, useId, useMemo, useRef, useState } from 'react';
import { ResultNames } from '../../pages/result/config';
import { Context, 麥當勞IG } from '../../settings/config';
import { ACTION, TRANSITION } from '../../settings/constant';
import './index.less';

const CloseButton = ({ setTran }) => {
	const id = useId();
	useEffect(() => {
		Click.add(`#${id}`, () => {
			Click.remove(`#${id}`);
			setTran(TRANSITION.fadeOut);
		});
		return () => Click.remove(`#${id}`);
	}, []);

	return (
		<div id={id} className='close'>
			<svg
				version='1.1'
				xmlns='http://www.w3.org/2000/svg'
				x='0px'
				y='0px'
				width='42.4px'
				height='42.4px'
				viewBox='0 0 42.4 42.4'
				stroke='#000'
			>
				<line x1='41.6' y1='0.8' x2='0.8' y2='41.6' />
				<line x1='0.8' y1='0.8' x2='41.6' y2='41.6' />
			</svg>
		</div>
	);
};

const CopyButton = () => {
	const id = useId();

	useEffect(() => {
		const URL = QueryString.root();
		Click.add(`#${id}`, () => {
			if (navigator.clipboard === undefined) {
				if (copy(URL)) alert('網址已經複製到剪貼簿');
			} else {
				navigator.clipboard?.writeText?.(URL).then(
					() => alert('網址已經複製到剪貼簿'),
					() => alert('剪貼簿功能不支援，請直接到網址列複製'),
				);
			}
		});
		return () => Click.remove(`#${id}`);
	}, []);

	return <div id={id} />;
};

const LinkToIGButton = () => {
	const id = useId();

	useEffect(() => {
		Click.add(`#${id}`, () => {
			window.open(麥當勞IG);
		});
		return () => Click.remove(`#${id}`);
	}, []);

	return <div id={id} />;
};

const Content = ({ tran, body, setContext, setTran, result }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ opacity: 0, y: window.innerHeight });
	const [width, setWidth] = useState(0);

	useEffect(() => {
		if (tran === TRANSITION.fadeIn) setStyle({ opacity: 1, y: 0 }, 600);
		else if (tran === TRANSITION.fadeOut) {
			setStyle(
				{ opacity: 0, y: window.innerHeight },
				{
					duration: 600,
					onComplete: () => setContext({ type: ACTION.modal, state: { enabled: false } }),
				},
			);
		}
	}, [tran]);

	useEffect(() => {
		const { clientHeight } = ref.current;
		const r = clientHeight / 1921;
		setWidth(1081 * r + 8);
	}, []);

	const onTouchStart = useCallback(() => {
		window.dataLayer?.push({
			event: 'save_test_result',
			eventCategory: 'engagement',
			eventLabel: `星級咖心測長按儲存_${result.name}x${result.productName}`,
		});
	}, []);

	return (
		<div style={style} className='content'>
			<div className='symbol'>
				<div />
				<div />
				<div />
				<div />
			</div>
			<div className='McLogo' />
			<div ref={ref} className='containers'>
				<div className='module-border-wrap' style={{ width: `${width}px` }}>
					<div className='module'>
						{body !== '' && <img onTouchStart={onTouchStart} role='none' src={body} alt='' />}
					</div>
				</div>
			</div>
			<div className='footer'>
				<div className='slogan' />
				<div className='steps'>
					<div />
					<div />
					<CopyButton />
					<div />
					<LinkToIGButton />
				</div>
			</div>
			<CloseButton setTran={setTran} />
		</div>
	);
};

const Background = ({ tran }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (tran === TRANSITION.fadeIn) {
			setStyle({ opacity: 1 }, 600);
		} else if (tran === TRANSITION.fadeOut) {
			setStyle({ opacity: 0 }, 600);
		}
	}, [tran]);
	return <div style={style} className='bg' />;
};

const Modal = memo(() => {
	const [context, setContext] = useContext(Context);
	const { body } = context[ACTION.modal];
	const [tran, setTran] = useState(TRANSITION.unset);

	const { id } = context[ACTION.result];

	const result = useMemo(() => {
		const [currentResult] = Object.values(ResultNames).filter((item) => item.ID === id);
		const { name, productName } = currentResult;
		return { name, productName };
	}, [id]);

	useEffect(() => {
		window.dataLayer?.push({
			event: 'pop_up',
			eventCategory: 'engagement',
			eventLabel: `${result.name}x${result.productName}-IG Story分享步驟`,
		});
	}, [result]);

	return (
		<OnloadProvider
			onload={() => {
				setTran(TRANSITION.fadeIn);
			}}
		>
			<div className='Modal'>
				<Background tran={tran} />
				<div className='context'>
					<Content
						tran={tran}
						body={body}
						setContext={setContext}
						setTran={setTran}
						result={result}
					/>
				</div>
			</div>
		</OnloadProvider>
	);
});
export default Modal;
