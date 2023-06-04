import { memo, useEffect } from 'react';
import LandingButton from './button';
import './index.less';

const 聚光燈 = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='Spotlight'>
			<div className='penumbra'>
				<div className='spotlight-star' />
				<LandingButton />
			</div>
			{children}
		</div>
	);
});
export default 聚光燈;
