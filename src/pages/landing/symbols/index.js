import { memo, useContext, useEffect, useRef } from 'react';
import { LandingContext, LandingSteps } from '../config';
import './index.less';

const StarLeftBottom = ({ steps }) => {
	const ref = useRef();
	useEffect(() => {
		if (steps === LandingSteps.fadeIned) {
			setTimeout(() => {
				ref.current?.classList.add('elasticObject');
			}, 400);
			setTimeout(() => {
				ref.current?.classList.remove('elasticObject');
				ref.current?.classList.add('swing_star');
				ref.current.classList.add('reverse');
			}, 400 + 700);
		}
	}, [steps]);
	return <div ref={ref} />;
};

const StarLeftTop = ({ steps }) => {
	const ref = useRef();
	useEffect(() => {
		if (steps === LandingSteps.fadeIned) {
			setTimeout(() => {
				ref.current?.classList.add('elasticObject');
			}, 300);

			setTimeout(() => {
				ref.current?.classList.remove('elasticObject');
				ref.current?.classList.add('swing_star');
			}, 300 + 700);
		}
	}, [steps]);
	return <div ref={ref} />;
};

const StarRight = ({ steps }) => {
	const ref = useRef();
	useEffect(() => {
		if (steps === LandingSteps.fadeIned) {
			ref.current?.classList.add('elasticObject');
			setTimeout(() => {
				ref.current?.classList.remove('elasticObject');
				ref.current?.classList.add('swing_star');
			}, 700);
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
