import { memo, useEffect } from 'react';

const Container = memo(({ children }) => {
	useEffect(() => {}, []);
	return (
		<div className='flex min-h-screen w-full justify-center'>
			<div className='w-full max-w-3xl'>{children}</div>
		</div>
	);
});
export default Container;
