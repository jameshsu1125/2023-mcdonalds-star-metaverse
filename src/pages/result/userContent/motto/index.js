import { memo, useEffect } from 'react';
import './index.less';

const Motto = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Motto'>
			<div className='context'>
				<div className='header'>你的星級金句</div>
				<div className='body'>買啦哪次不買！吃啦哪次不吃！</div>
			</div>
		</div>
	);
});
export default Motto;
