import { memo, useEffect } from 'react';
import './index.less';

const ENT = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='ENT'>
			<div className='sun' />
			<div className='earth'>
				<div>
					<div className='workers'>
						<div className='man' />
					</div>
				</div>
			</div>
		</div>
	);
});
export default ENT;
