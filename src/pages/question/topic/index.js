import { memo, useContext } from 'react';
import { QuestionContext, QuestionList } from '../config';
import ButtonGroup from './buttonGroup';
import Emoji from './emoji';
import Heading from './heading';
import './index.less';
import Slider from './slider';
import Steps from './steps';
import UGC from './ugc';

const Topic = memo(() => {
	const [context] = useContext(QuestionContext);
	const { steps, index } = context;

	return (
		<div className='Topic'>
			<div className='temp' />
			<Steps />
			<Slider steps={steps} />
			<Heading steps={steps} />
			{(index < QuestionList.length - 1 && (
				<>
					<Emoji />
					<ButtonGroup />
				</>
			)) || <UGC />}
		</div>
	);
});
export default Topic;
