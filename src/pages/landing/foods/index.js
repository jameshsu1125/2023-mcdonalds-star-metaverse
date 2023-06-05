import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LandingContext, LandingSteps } from '../config';
import './index.less';

const Coke1 = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			// setStyle({ y: 0 });
		}
	}, [steps]);
	return <div style={style} className='coke-0' />;
};

const Coffee = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			// setStyle({ y: 0 });
		}
	}, [steps]);
	return <div style={style} className='coffee' />;
};

const Fried = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			// setStyle({ y: 0 });
		}
	}, [steps]);
	return <div style={style} className='fried' />;
};

const McFlurry = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			// setStyle({ y: 0 });
		}
	}, [steps]);
	return <div style={style} className='McFlurry' />;
};

const ChickenNuggets = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			// setStyle({ y: 0 });
		}
	}, [steps]);
	return <div style={style} className='chickenNuggets' />;
};

const FriedChicken = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			// setStyle({ y: 0 });
		}
	}, [steps]);
	return <div style={style} className='friedChicken' />;
};

const Hamburger = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			// setStyle({ y: 0 });
		}
	}, [steps]);
	return <div style={style} className='hamburger' />;
};

const Coke0 = ({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			// setStyle({ y: 0 });
		}
	}, [steps]);
	return <div style={style} className='coke-0' />;
};

const 食物們 = memo(() => {
	const [landingState] = useContext(LandingContext);
	const { steps } = landingState;
	return (
		<div className='Foods'>
			<Coke0 steps={steps} />
			<Hamburger steps={steps} />
			<FriedChicken steps={steps} />
			<ChickenNuggets steps={steps} />
			<McFlurry steps={steps} />
			<Fried steps={steps} />
			<Coffee steps={steps} />
			<Coke1 steps={steps} />
		</div>
	);
});
export default 食物們;
