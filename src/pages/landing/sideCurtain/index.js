import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LandingContext, LandingSteps } from '../config';
import './index.less';

const Right = ({ steps }) => {
	const [style, setStyle] = useTween({ x: -500 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ x: 0 }, { delay: 200 });
		}
	}, [steps]);
	return <div style={{ transform: `scale(-1, 1) ${style.transform}` }} />;
};

const Left = ({ steps }) => {
	const [style, setStyle] = useTween({ x: -500 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ x: 0 }, { delay: 200, duration: 1300 });
		}
	}, [steps]);
	return <div style={style} />;
};

const 門簾 = memo(() => {
	const [landingState] = useContext(LandingContext);
	const { steps } = landingState;
	return (
		<div className='SideCurtain'>
			<Left steps={steps} />
			<Right steps={steps} />
		</div>
	);
});
export default 門簾;
