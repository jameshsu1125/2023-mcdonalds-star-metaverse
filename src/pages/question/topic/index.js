import { memo, useEffect } from 'react';
import Slider from '../slider';
import ButtonGroup from './buttonGroup';
import Emoji from './emoji';
import Heading from './heading';
import './index.less';
import Steps from './steps';

const Topic = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Topic'>
			<div className='temp' />
			<Steps />
			<Slider />
			<Heading />
			<Emoji />
			<ButtonGroup />
		</div>
	);
});
export default Topic;
