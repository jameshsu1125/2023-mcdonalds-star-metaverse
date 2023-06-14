import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useState } from 'react';
import Frame from './frame';
import './index.less';
import PrevButton from './prevButton';
import { QuestionContext, QuestionState, QuestionSteps } from './config';
import Topic from './topic';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';

const Question = memo(() => {
	const [, setContext] = useContext(Context);
	const value = useState(QuestionState);
	const [, setState] = value;

	useEffect(() => {
		setContext({ type: ACTION.LoadingProcess, state: { enabled: true } });
	}, []);

	return (
		<QuestionContext.Provider value={value}>
			<OnloadProvider
				onload={() => {
					setState((S) => ({ ...S, steps: QuestionSteps.fadeIn }));
					setContext({ type: ACTION.LoadingProcess, state: { enabled: false } });
				}}
			>
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
