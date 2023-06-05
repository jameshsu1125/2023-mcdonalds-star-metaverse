import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LandingContext, LandingSteps } from '../config';
import './index.less';

const Master2 = ({ steps }) => {
	const [style, setStyle] = useTween({ y: 220 });

	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ y: 0 }, { delay: 1500 });
		}
	}, [steps]);
	return (
		<div style={style} className='master-2'>
			<div className='wabble' />
			<div />
		</div>
	);
};

const Master1 = ({ steps }) => {
	const [style, setStyle] = useTween({ y: 200 });

	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ y: 0 }, { delay: 1600 });
		}
	}, [steps]);
	return <div style={style} className='master-1' />;
};

const Master0 = ({ steps }) => {
	const [style, setStyle] = useTween({ y: 200 });

	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ y: 0 }, { delay: 1400 });
		}
	}, [steps]);
	return (
		<div style={style} className='master-0'>
			<div className='wabble' />
		</div>
	);
};

const Carpet = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0, scale: 1.1 });

	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ opacity: 1, scale: 1 }, { delay: 1000, duration: 800 });
		}
	}, [steps]);
	return <div style={style} className='carpet' />;
};

const 地毯 = memo(({ children }) => {
	const [landingState] = useContext(LandingContext);
	const { steps } = landingState;
	return (
		<div className='Carpet'>
			<Master0 steps={steps} />
			<Master1 steps={steps} />
			<Master2 steps={steps} />
			<Carpet steps={steps} />
			<div className='absolute top-0 h-full w-full'>{children}</div>
		</div>
	);
});
export default 地毯;
