import { CoverSize } from 'lesca-number';
import { memo, useEffect, useState } from 'react';
import './index.less';

const Frame = memo(({ children }) => {
	const [size, setSize] = useState({
		left: 0,
		top: 0,
		width: window.innerWidth,
		height: window.innerHeight,
	});

	useEffect(() => {
		const resize = () => {
			const coverSize = CoverSize(
				{ width: 1920, height: 1050 },
				{ width: window.innerWidth, height: window.innerHeight },
			);
			setSize(coverSize);
		};
		resize();
		window.addEventListener('resize', resize);
		return () => window.removeEventListener('resize', resize);
	}, []);
	return (
		<div className='Frame'>
			<div className='background' style={{ ...size }} />
			{children}
		</div>
	);
});
export default Frame;
