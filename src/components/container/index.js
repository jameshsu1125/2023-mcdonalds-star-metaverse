import { memo, useEffect, useRef } from 'react';
import { ResultSteps } from '../../pages/result/config';
import './index.less';

let timeout;
const Container = memo(({ children, steps }) => {
	const ref = useRef();

	useEffect(() => {
		if (steps === ResultSteps.fadeIn) {
			timeout = setTimeout(() => {
				ref.current.scrollTo(0, 800);
				setTimeout(() => {
					ref.current.scrollTo(0, 0);
				}, 800);
			}, 2000);
		}

		const scroll = () => {
			clearTimeout(timeout);
			ref.current.removeEventListener('scroll', scroll);
		};

		ref.current.addEventListener('scroll', scroll);
	}, [steps]);

	return (
		<div
			ref={ref}
			className='scrollable flex h-full w-full justify-center overflow-x-hidden overflow-y-scroll'
		>
			<div className='relative w-full max-w-3xl'>{children}</div>
		</div>
	);
});
export default Container;
