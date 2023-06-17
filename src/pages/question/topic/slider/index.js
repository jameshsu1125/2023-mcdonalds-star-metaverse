import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { QuestionContext, QuestionSteps } from '../../config';
import './index.less';

const DELAY = 400;
const Smile = ({ steps }) => {
	const [state] = useContext(QuestionContext);
	const { index } = state;

	const [style, setStyle] = useTween({ scale: 0, rotate: 720, opacity: 0, left: '0%' });
	useEffect(() => {
		if (steps === QuestionSteps.fadeIn) {
			setStyle(
				{ scale: 1, rotate: 0, opacity: 1 },
				{ duration: 700, delay: DELAY, easing: Bezier.easeOutBack },
			);
		}
	}, [steps]);

	useEffect(() => {
		if (index !== 0) {
			setStyle(
				{ left: `${index * 10}%`, rotate: 360 * index },
				{ duration: 600, easing: Bezier.easeInOutBack },
			);
		}
	}, [index]);

	return <div style={style} />;
};

const Bar = ({ steps, children }) => {
	const [style, setStyle] = useTween({ width: '0%' });
	useEffect(() => {
		if (steps === QuestionSteps.fadeIn) {
			setStyle({ width: '100%' }, { duration: 800, delay: DELAY + 500 });
		}
	}, [steps]);
	return (
		<div style={style} className='bar'>
			<div>{children}</div>
		</div>
	);
};

const Slider = memo(({ steps }) => (
	<div className='Slider'>
		<div className='process'>
			<Bar steps={steps}>
				<Smile steps={steps} />
			</Bar>
		</div>
	</div>
));
export default Slider;
