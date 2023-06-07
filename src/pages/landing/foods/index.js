import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { LandingContext, LandingSteps } from '../config';
import './index.less';

const OFFSET_DELAY = 1000;
const random = () => Math.random() * OFFSET_DELAY;

const Coke1 = ({ steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ y: window.innerHeight * 0.4 });
	useEffect(() => {
		if (steps === LandingSteps.buttonFadeIned) {
			setStyle(
				{ y: 0 },
				{
					duration: 1000,
					delay: random(),
					onComplete: () => {
						ref.current?.classList.add('swing-5');
						if (Math.random > 0.5) ref.current?.classList.add('reverse');
					},
				},
			);
		}
	}, [steps]);
	return <div ref={ref} style={style} className='coke-1' />;
};

const Coffee = ({ steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ y: window.innerHeight * 0.4 });
	useEffect(() => {
		if (steps === LandingSteps.buttonFadeIned) {
			setStyle(
				{ y: 0 },
				{
					duration: 1000,
					delay: random(),
					onComplete: () => {
						ref.current?.classList.add('swing-5');
						if (Math.random > 0.5) ref.current?.classList.add('reverse');
					},
				},
			);
		}
	}, [steps]);
	return <div ref={ref} style={style} className='coffee' />;
};

const Fried = ({ steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ y: window.innerHeight * 0.4 });
	useEffect(() => {
		if (steps === LandingSteps.buttonFadeIned) {
			setStyle(
				{ y: 0 },
				{
					duration: 1000,
					delay: random(),
					onComplete: () => {
						ref.current?.classList.add('swing-5');
						if (Math.random > 0.5) ref.current?.classList.add('reverse');
					},
				},
			);
		}
	}, [steps]);
	return <div ref={ref} style={style} className='fried' />;
};

const McFlurry = ({ steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ y: window.innerHeight * 0.4 });
	useEffect(() => {
		if (steps === LandingSteps.buttonFadeIned) {
			setStyle(
				{ y: 0 },
				{
					duration: 1000,
					delay: random(),
					onComplete: () => {
						ref.current?.classList.add('swing-5');
						if (Math.random > 0.5) ref.current?.classList.add('reverse');
					},
				},
			);
		}
	}, [steps]);
	return <div ref={ref} style={style} className='McFlurry' />;
};

const ChickenNuggets = ({ steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ y: window.innerHeight * 0.4 });
	useEffect(() => {
		if (steps === LandingSteps.buttonFadeIned) {
			setStyle(
				{ y: 0 },
				{
					duration: 1000,
					delay: random(),
					onComplete: () => {
						ref.current?.classList.add('swing-5');
						if (Math.random > 0.5) ref.current?.classList.add('reverse');
					},
				},
			);
		}
	}, [steps]);
	return <div ref={ref} style={style} className='chickenNuggets' />;
};

const FriedChicken = ({ steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ y: window.innerHeight * 0.4 });
	useEffect(() => {
		if (steps === LandingSteps.buttonFadeIned) {
			setStyle(
				{ y: 0 },
				{
					duration: 1000,
					delay: Math.random() * 2000,
					onComplete: () => {
						ref.current?.classList.add('swing-5');
						if (Math.random > 0.5) ref.current?.classList.add('reverse');
					},
				},
			);
		}
	}, [steps]);
	return <div ref={ref} style={style} className='friedChicken' />;
};

const Hamburger = ({ steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ y: window.innerHeight * 0.4 });
	useEffect(() => {
		if (steps === LandingSteps.buttonFadeIned) {
			setStyle(
				{ y: 0 },
				{
					duration: 1000,
					delay: Math.random() * 2000,
					onComplete: () => {
						ref.current?.classList.add('swing-7');
						if (Math.random > 0.5) ref.current?.classList.add('reverse');
					},
				},
			);
		}
	}, [steps]);
	return <div ref={ref} style={style} className='hamburger' />;
};

const Coke0 = ({ steps }) => {
	const ref = useRef();
	const [style, setStyle] = useTween({ y: window.innerHeight * 0.4 });
	useEffect(() => {
		if (steps === LandingSteps.buttonFadeIned) {
			setStyle(
				{ y: 0 },
				{
					duration: 1000,
					delay: Math.random() * 2000,
					onComplete: () => {
						ref.current?.classList.add('swing-5');
						if (Math.random > 0.5) ref.current?.classList.add('reverse');
					},
				},
			);
		}
	}, [steps]);
	return <div ref={ref} style={style} className='coke-0' />;
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
