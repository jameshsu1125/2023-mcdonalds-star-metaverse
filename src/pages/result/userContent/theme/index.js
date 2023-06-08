import { memo, useEffect } from 'react';
import './index.less';
import ENT from './ENT';

const Theme = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Theme'>
			<div className='content'>
				<ENT />
				<div className='description'>description</div>
			</div>
			<div className='symbols' />
		</div>
	);
});
export default Theme;
