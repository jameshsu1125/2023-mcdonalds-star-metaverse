import { memo, useEffect } from 'react';
import './index.less';

const 食物們 = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Foods'>
			<div className='temp' />
			<div className='coke-0' />
			<div className='hamburger' />
			<div className='friedChicken' />
			<div className='chickenNuggets' />
			<div className='McFlurry' />
			<div className='fried' />
			<div className='coffee' />
			<div className='coke-1' />
		</div>
	);
});
export default 食物們;
