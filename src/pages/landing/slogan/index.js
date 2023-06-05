import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { LandingContext, LandingSteps } from '../config';
import './index.less';

const Main = () => {
	const ref = useRef();
	const [landingState] = useContext(LandingContext);
	const { steps } = landingState;
	const [style, setStyle] = useTween({ opacity: 0, scale: 0.5, y: -200 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIned) {
			setStyle(
				{ opacity: 1, scale: 1, y: 0 },
				{
					delay: 900,
					duration: 500,
					onComplete: () => {
						ref.current?.classList.add('halo');
					},
				},
			);
		}
	}, [steps]);
	return (
		<div style={style} className='main'>
			<div ref={ref} />
			<div />
		</div>
	);
};

const Sub = () => {
	const [landingState] = useContext(LandingContext);
	const { steps } = landingState;
	const [style, setStyle] = useTween({ opacity: 0, scale: 0.8, y: -200 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIned) {
			setStyle({ opacity: 1, scale: 1, y: 0 }, { delay: 1000, duration: 500 });
		}
	}, [steps]);
	return <div style={style} className='sub breath' />;
};

const 標語 = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Slogan'>
			<Sub />
			<Main />
		</div>
	);
});
export default 標語;
