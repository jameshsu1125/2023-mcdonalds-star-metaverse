import Click from 'lesca-click';
import useTween from 'lesca-use-tween';
import UserAgent from 'lesca-user-agent';
import { memo, useCallback, useContext, useEffect, useId, useRef } from 'react';
import { QuestionContext, QuestionDirect, QuestionSteps } from '../config';
import './index.less';

const PrevButton = memo(() => {
	const id = useId();
	const ref = useRef();
	const [state, setState] = useContext(QuestionContext);
	const { index } = state;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (index === 0) {
			if (ref.current?.style.opacity !== '0') {
				setStyle(
					{ opacity: 0 },
					{
						duration: 300,
						onComplete: () => {
							ref.current.style.display = 'none';
						},
					},
				);
			}
		} else if (ref.current?.style.opacity !== '1') {
			setStyle(
				{ opacity: 1 },
				{
					duration: 300,
					onStart: () => {
						ref.current.style.display = 'block';
					},
				},
			);
		}
	}, [index]);

	useEffect(() => {
		if (index === 0) return () => {};
		Click.add(`#${id}`, () => {
			setState((S) => ({ ...S, steps: QuestionSteps.questionOut, direct: QuestionDirect.prev }));
			window.dataLayer?.push({
				event: 'click_btn',
				eventCategory: 'engagement',
				eventLabel: '回上一題',
			});
		});
		return () => {
			Click.remove(`#${id}`);
		};
	}, [index]);

	const onMouseOver = useCallback(() => {
		if (UserAgent.get() === 'desktop') {
			if (index !== 0) {
				const [mastersContainer] = document.getElementsByClassName('Masters');
				const masters = [...mastersContainer.children];
				masters[10].classList.add('Invert');
			}
		}
	}, [index]);

	const onMouseOut = useCallback(() => {
		if (UserAgent.get() === 'desktop') {
			if (index !== 0) {
				const [mastersContainer] = document.getElementsByClassName('Masters');
				const masters = [...mastersContainer.children];
				masters[10].classList.remove('Invert');
			}
		}
	}, [index]);

	const onTouchStart = useCallback(() => {
		if (UserAgent.get() === 'mobile') {
			if (index !== 0) {
				const [mastersContainer] = document.getElementsByClassName('Masters');
				const masters = [...mastersContainer.children];
				masters[0].classList.add('Invert');
			}
		}
	}, [index]);

	const onTouchEnd = useCallback(() => {
		if (UserAgent.get() === 'mobile') {
			if (index !== 0) {
				const [mastersContainer] = document.getElementsByClassName('Masters');
				const masters = [...mastersContainer.children];
				masters[0].classList.remove('Invert');
			}
		}
	}, [index]);

	return (
		<div
			id={id}
			ref={ref}
			onTouchStart={onTouchStart}
			onTouchEnd={onTouchEnd}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			onFocus={onMouseOver}
			onBlur={onMouseOut}
			style={style}
			className='QuestionPrevButton cursor-pointer'
		>
			回上一題
		</div>
	);
});
export default PrevButton;
