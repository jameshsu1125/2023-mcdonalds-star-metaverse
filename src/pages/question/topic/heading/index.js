import { memo, useContext, useMemo } from 'react';
import { QuestionContext, QuestionList } from '../../config';
import './index.less';

const Heading = memo(() => {
	const [context] = useContext(QuestionContext);
	const { index } = context;

	const { question } = useMemo(() => QuestionList[index], [index]);

	return (
		<div className='Heading'>
			{question.map((item) => (
				<p key={item}>{item}</p>
			))}
		</div>
	);
});
export default Heading;
