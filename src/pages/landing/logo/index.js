import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LandingContext, LandingSteps } from '../config';
import './index.less';

const OnePlusOne = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: -100 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ opacity: 1, y: 0 }, { delay: 600, easing: Bezier.easeOutBack, duration: 500 });
		}
	}, [steps]);
	return <div style={style} />;
};

const McLogo = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: -100 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ opacity: 1, y: 0 }, { delay: 500, easing: Bezier.easeOutBack, duration: 500 });
		}
	}, [steps]);
	return <div style={style} />;
};

const 麥當當LOGO = memo(() => {
	const [landingState] = useContext(LandingContext);
	const { steps } = landingState;
	return (
		<div className='Logo'>
			<McLogo steps={steps} />
			<OnePlusOne steps={steps} />
		</div>
	);
});
export default 麥當當LOGO;
