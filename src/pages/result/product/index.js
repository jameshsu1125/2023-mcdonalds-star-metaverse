import { memo, useEffect } from 'react';
import './index.less';
import CommercialImage from './commercialImage';
import Information from './information';

const Product = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Product'>
			<div>
				{/* <div className='temp' /> */}
				<div className='context'>
					<div className='onePlusOne' />
					<CommercialImage />
					<Information />
				</div>
				<div className='button'>
					<button type='button'>看更多明星級美味</button>
				</div>
			</div>
		</div>
	);
});
export default Product;
