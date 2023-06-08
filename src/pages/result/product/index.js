import { memo, useEffect } from 'react';
import './index.less';

const Product = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Product'>
			<div>
				<div className='temp' />
				<div className='context'>
					<div className='onePlusOne' />
					<div className='chickenNuggets' />
				</div>
			</div>
		</div>
	);
});
export default Product;
