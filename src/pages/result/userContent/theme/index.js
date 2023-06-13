import { memo, useEffect } from 'react';
import './index.less';
import ENT from './ENT';
import ENTSymbols from './ENT/symbols';

const Theme = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Theme'>
			<div className='content'>
				<ENT />
				{/* <div className='description'>description</div> */}
			</div>
			<div className='symbols'>
				<ENTSymbols />
			</div>
		</div>
	);
});
export default Theme;
