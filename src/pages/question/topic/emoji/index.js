import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useRef } from 'react';
import { QuestionContext, QuestionList, QuestionSteps } from '../../config';
import './index.less';

const DELAY = 2500;

const Ico = ({ emoji, steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ scale: 0 });
	useEffect(() => {
		if (steps === QuestionSteps.fadeIn) {
			setStyle({ scale: 1 }, { duration: 700, delay: DELAY, easing: Bezier.easeOutBack });
		} else if (steps === QuestionSteps.questionOut) {
			setStyle({ scale: 0 }, { duration: 500, easing: Bezier.easeInBack });
		} else if (steps === QuestionSteps.questionIn) {
			setStyle({ scale: 1 }, { duration: 700, delay: 300, easing: Bezier.easeOutBack });
		}
	}, [steps]);
	return <div ref={ref} style={style} className={emoji} />;
};

const Emoji = memo(() => {
	const [context] = useContext(QuestionContext);
	const { index, steps } = context;
	const { emoji } = useMemo(() => QuestionList[index], [index]);

	return (
		<div className='Emoji'>
			<Ico emoji={emoji} steps={steps} />
		</div>
	);
});
export default Emoji;
