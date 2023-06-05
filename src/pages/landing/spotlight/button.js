import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { Context } from '../../../settings/config';
import { ACTION, PAGE } from '../../../settings/constant';
import { LandingSteps } from '../config';

const LandingButton = memo(({ steps, setLandingState }) => {
	const [style, setStyle] = useTween({ opacity: 0, scale: 0.8, y: -100 });
	const [, setContext] = useContext(Context);

	useEffect(() => {
		if (steps === LandingSteps.fadeIned) {
			setStyle(
				{ opacity: 1, scale: 1, y: 0 },
				{
					delay: 1200,
					duration: 500,
					onComplete: () => {
						setLandingState((S) => ({ ...S, steps: LandingSteps.buttonFadeIned }));
					},
				},
			);
		}
	}, [steps]);
	return (
		<button
			style={style}
			type='button'
			onClick={() => {
				setContext({ type: ACTION.page, state: PAGE.question });
			}}
		>
			<svg
				fill='#D9447E'
				x='0px'
				y='0px'
				width='24.5px'
				height='23.3px'
				viewBox='0 0 24.5 23.3'
				className='mr-1'
			>
				<polygon points='4.7,23.3 12.2,17.8 14.8,19.7 19.8,23.3 17.5,16.4 16.9,14.4 24.5,8.9 15.1,8.9 15.1,8.9 12.2,0 9.4,8.9 9.4,8.9 0,8.9 7.6,14.4' />
			</svg>
			開始探索
			<svg
				fill='#D9447E'
				x='0px'
				y='0px'
				width='24.5px'
				height='23.3px'
				viewBox='0 0 24.5 23.3'
				className='ml-1'
			>
				<polygon points='4.7,23.3 12.2,17.8 14.8,19.7 19.8,23.3 17.5,16.4 16.9,14.4 24.5,8.9 15.1,8.9 15.1,8.9 12.2,0 9.4,8.9 9.4,8.9 0,8.9 7.6,14.4' />
			</svg>
		</button>
	);
});
export default LandingButton;
