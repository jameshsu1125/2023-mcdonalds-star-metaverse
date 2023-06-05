import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LandingContext, LandingSteps } from '../config';
import './index.less';

const 窗簾 = memo(() => {
	const [landingState] = useContext(LandingContext);
	const { steps } = landingState;
	const [style, setStyle] = useTween({ y: 0 - window.innerHeight * 0.65 });

	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ y: 0 }, 1500);
		}
	}, [steps]);
	return <div style={style} className='Curtain' />;
});
export default 窗簾;
