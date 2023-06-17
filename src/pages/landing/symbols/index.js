import { memo, useContext, useEffect, useRef } from 'react';
import { LandingContext, LandingSteps } from '../config';
import './index.less';

const StarLeftBottom = ({ steps }) => {
	const ref = useRef();
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setTimeout(() => {
				ref.current.style.display = 'block';
				ref.current?.classList.add('elasticObject');
			}, 1600);
			setTimeout(() => {
				ref.current?.classList.remove('elasticObject');
				ref.current?.classList.add('swing_star');
				ref.current.classList.add('reverse');
			}, 1600 + 700);
		}
	}, [steps]);
	return <div ref={ref} />;
};

const StarLeftTop = ({ steps }) => {
	const ref = useRef();
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setTimeout(() => {
				ref.current.style.display = 'block';
				ref.current?.classList.add('elasticObject');
			}, 1500);

			setTimeout(() => {
				ref.current?.classList.remove('elasticObject');
				ref.current?.classList.add('swing_star');
			}, 1500 + 700);
		}
	}, [steps]);
	return <div ref={ref} />;
};

const StarRight = ({ steps }) => {
	const ref = useRef();
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setTimeout(() => {
				ref.current.style.display = 'block';
				ref.current?.classList.add('elasticObject');
			}, 1400);
			setTimeout(() => {
				ref.current?.classList.remove('elasticObject');
				ref.current?.classList.add('swing_star');
			}, 1400 + 700);
		}
	}, [steps]);
	return <div ref={ref} />;
};

const 星星們 = memo(() => {
	const [landingState] = useContext(LandingContext);
	const { steps } = landingState;
	return (
		<div className='Symbols'>
			<StarRight steps={steps} />
			<StarLeftTop steps={steps} />
			<StarLeftBottom steps={steps} />
		</div>
	);
});
export default 星星們;
