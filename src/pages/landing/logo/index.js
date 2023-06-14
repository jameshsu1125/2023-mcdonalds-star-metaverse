import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { LandingContext, LandingSteps } from '../config';
import Logo from './img/logo.png';
import Pattern from './img/pattern.svg';
import './index.less';

const OnePlusOne = ({ steps, children }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: -100 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ opacity: 1, y: 0 }, { delay: 600, easing: Bezier.easeOutBack, duration: 500 });
		}
	}, [steps]);
	return <div style={style}>{children}</div>;
};

const McLogo = ({ steps, children }) => {
	const [style, setStyle] = useTween({ opacity: 0, y: -100 });
	useEffect(() => {
		if (steps === LandingSteps.fadeIn) {
			setStyle({ opacity: 1, y: 0 }, { delay: 500, easing: Bezier.easeOutBack, duration: 500 });
		}
	}, [steps]);
	return <div style={style}>{children}</div>;
};

const 麥當當LOGO = memo(() => {
	const [landingState] = useContext(LandingContext);
	const { steps } = landingState;
	return (
		<div className='Logo'>
			<McLogo steps={steps}>
				<img src={Logo} alt='麥當勞LOGO' />
			</McLogo>
			<OnePlusOne steps={steps}>
				<img src={Pattern} alt='1+1星級點' />
			</OnePlusOne>
		</div>
	);
});
export default 麥當當LOGO;
