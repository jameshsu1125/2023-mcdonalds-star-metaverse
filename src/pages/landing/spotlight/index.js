import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { LandingContext, LandingSteps } from '../config';
import LandingButton from './button';
import './index.less';

const Penumbra = ({ steps, setLandingState }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle(
				{ opacity: 1 },
				{
					delay: 2000,
					onComplete: () => {
						setLandingState((S) => ({ ...S, steps: LandingSteps.fadeIned }));
					},
				},
			);
		}
	}, [steps]);
	return <div style={style} className='penumbraShadow' />;
};

const Spotlight = ({ steps, setLandingState }) => {
	const ref = useRef();
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setTimeout(() => {
				ref.current?.classList.add('blank');
			}, 2000);
		}
	}, [steps]);
	return (
		<div ref={ref} className='penumbra'>
			<div className='spotlight-star' />
			<LandingButton steps={steps} setLandingState={setLandingState} />
		</div>
	);
};

const 聚光燈 = memo(({ children }) => {
	const [landingState, setLandingState] = useContext(LandingContext);
	const { steps } = landingState;
	return (
		<div className='Spotlight'>
			<Penumbra steps={steps} setLandingState={setLandingState} />
			<Spotlight steps={steps} setLandingState={setLandingState} />
			{children}
		</div>
	);
});
export default 聚光燈;
