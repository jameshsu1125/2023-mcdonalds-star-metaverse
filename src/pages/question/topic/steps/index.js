import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { QuestionContext, QuestionList, QuestionSteps } from '../../config';
import './index.less';

const DELAY = 200;

const TenDigit = ({ index, steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ scale: 0, rotate: -180 });
	useEffect(() => {
		if (steps === QuestionSteps.fadeIn) {
			setStyle(
				{ scale: 1, rotate: 0 },
				{
					duration: 600,
					easing: Bezier.easeOutBack,
					delay: DELAY,
					onComplete: () => {
						ref.current?.classList.add('tween');
					},
				},
			);
		}
	}, [steps]);
	return (
		<div
			ref={ref}
			className='ten'
			style={{ ...style, backgroundPositionY: `${index === QuestionList.length - 1 ? 100 : 0}%` }}
		/>
	);
};

const SingleDigit = ({ index, steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ scale: 0, rotate: 180 });
	useEffect(() => {
		if (steps === QuestionSteps.fadeIn) {
			setStyle(
				{ scale: 1, rotate: 0 },
				{
					duration: 600,
					easing: Bezier.easeOutBack,
					delay: DELAY + 100,
					onComplete: () => {
						ref.current?.classList.add('tween');
					},
				},
			);
		}
	}, [steps]);

	return (
		<div
			ref={ref}
			className='single'
			style={{ ...style, backgroundPositionY: `${index * (100 / 9)}%` }}
		/>
	);
};

const Steps = memo(() => {
	const [context] = useContext(QuestionContext);
	const { index, steps } = context;

	return (
		<div className='Steps'>
			<TenDigit index={index} steps={steps} />
			<SingleDigit index={index} steps={steps} />
		</div>
	);
});
export default Steps;
