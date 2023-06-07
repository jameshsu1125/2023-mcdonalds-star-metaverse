import OnloadProvider from 'lesca-react-onload';
import { memo, useEffect, useState } from 'react';
import Frame from './frame';
import './index.less';
import PrevButton from './prevButton';
import { QuestionContext, QuestionState } from './config';
import Topic from './topic';

const Question = memo(() => {
	const value = useState(QuestionState);
	useEffect(() => {}, []);
	return (
		<QuestionContext.Provider value={value}>
			<OnloadProvider onload={() => {}}>
				<div className='Question'>
					<Frame prev={<PrevButton />}>
						<Topic />
					</Frame>
				</div>
			</OnloadProvider>
		</QuestionContext.Provider>
	);
});
export default Question;
