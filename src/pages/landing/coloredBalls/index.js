import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LandingContext, LandingSteps } from '../config';
import './index.less';

const 彩球 = memo(() => {
	const [landingState] = useContext(LandingContext);
	const { steps } = landingState;
	const [style, setStyle] = useTween({ y: -300 });

	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ y: 0 }, { delay: 100, easing: Bezier.easeOutCirc });
		}
	}, [steps]);
	return (
		<div style={style} className='ColoredBalls'>
			<div />
			<div />
		</div>
	);
});
export default 彩球;
