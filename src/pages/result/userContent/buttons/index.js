import { memo, useEffect } from 'react';
import './index.less';

const Buttons = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Buttons'>
			<button className='button' type='button'>
				<div>下載圖片</div>
			</button>
			<button className='button' type='button'>
				<div>再測一次</div>
			</button>
		</div>
	);
});
export default Buttons;
