import { memo, useContext, useEffect } from 'react';
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

	useEffect(() => {
		if (index === QuestionList.length - 1) {
			window.dataLayer?.push({
				event: 'pageview',
				eventCategory: 'engagement',
				eventLabel: '輸入暱稱頁',
			});
		} else {
			window.dataLayer?.push({
				event: 'pageview',
				eventCategory: 'engagement',
				eventLabel: `情境問題${index + 1}`,
			});
		}
	}, [index]);

	return (
		<div className='Topic'>
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
