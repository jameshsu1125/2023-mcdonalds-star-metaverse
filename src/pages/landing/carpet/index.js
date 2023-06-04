import { memo, useEffect } from 'react';
import './index.less';

const 地毯 = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='Carpet'>
			<div className='master-0'>
				<div />
			</div>
			<div className='master-1' />
			<div className='master-2'>
				<div />
				<div />
			</div>
			<div className='carpet' />
			<div className='absolute top-0 h-full w-full'>{children}</div>
		</div>
	);
});
export default 地毯;
