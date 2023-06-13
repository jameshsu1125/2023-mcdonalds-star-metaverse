import { memo } from 'react';
import './index.less';

const Container = memo(({ children }) => (
	<div className='scrollable flex h-full w-full justify-center overflow-y-scroll'>
		<div className='relative w-full max-w-3xl'>{children}</div>
	</div>
));
export default Container;
