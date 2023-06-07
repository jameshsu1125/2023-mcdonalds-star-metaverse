import { memo, useContext, useMemo } from 'react';
import { QuestionContext, QuestionList } from '../../config';
import './index.less';

const Emoji = memo(() => {
	const [context] = useContext(QuestionContext);
	const { index } = context;
	const { emoji } = useMemo(() => QuestionList[index], [index]);

	return (
		<div className='Emoji'>
			<div className={emoji} />
		</div>
	);
});
export default Emoji;
