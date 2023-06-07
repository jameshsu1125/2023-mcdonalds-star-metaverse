import { memo, useContext, useEffect } from 'react';
import './index.less';
import { QuestionContext, QuestionList } from '../../config';

const Steps = memo(() => {
	const [context] = useContext(QuestionContext);
	const { index } = context;

	useEffect(() => {}, []);
	return (
		<div className='Steps'>
			<div
				className='ten'
				style={{ backgroundPositionY: `${index === QuestionList.length ? 100 : 0}%` }}
			/>
			<div className='single' style={{ backgroundPositionY: `${index * (100 / 9)}%` }} />
		</div>
	);
});
export default Steps;
