import Click from 'lesca-click';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useId, useRef } from 'react';
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
			if (ref.current?.style.opacity !== '0') setStyle({ opacity: 0 });
		} else if (ref.current?.style.opacity !== '1') setStyle({ opacity: 1 });
	}, [index]);

	useEffect(() => {
		Click.add(`#${id}`, () => {
			setState((S) => ({ ...S, steps: QuestionSteps.questionOut, direct: QuestionDirect.prev }));
			window.dataLayer?.push({
				event: 'click_btn',
				eventCategory: 'engagement',
				eventLabel: '回上一題',
			});
		});
	}, []);

	return (
		<div id={id} ref={ref} style={style} className='QuestionPrevButton cursor-pointer'>
			回上一題
		</div>
	);
});
export default PrevButton;
