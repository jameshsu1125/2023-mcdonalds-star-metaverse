import { TweenProvider } from 'lesca-use-tween';
import { memo, useContext, useEffect, useMemo, useState } from 'react';
import { QuestionContext, QuestionList, QuestionSteps } from '../../config';
import './index.less';

const DELAY = 1200;

const Heading = memo(({ steps }) => {
	const [context] = useContext(QuestionContext);
	const { index } = context;
	const { question } = useMemo(() => QuestionList[index], [index]);
	const [tweenStyle, setStyle] = useState();

	useEffect(() => {
		if (steps === QuestionSteps.fadeIn) {
			setTimeout(() => {
				setStyle({ opacity: 1, x: 0 });
			}, DELAY);
		} else if (steps === QuestionSteps.questionOut) {
			setStyle({ opacity: 0, x: 0 - window.innerWidth * 0.5 });
		} else if (steps === QuestionSteps.questionIn) {
			setStyle({ opacity: 0, x: window.innerWidth * 0.5 });
			setStyle({ opacity: 1, x: 0 });
		}
	}, [steps]);

	return (
		<div className='Heading'>
			{question.map((item, i) => (
				<TweenProvider
					key={item}
					defaultStyle={{ opacity: 0, x: window.innerWidth * 0.5 }}
					tweenStyle={tweenStyle}
					options={{ delay: i * 50, duration: 600 }}
				>
					<p>{item}</p>
				</TweenProvider>
			))}
		</div>
	);
});
export default Heading;
