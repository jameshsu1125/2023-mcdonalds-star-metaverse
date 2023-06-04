import { memo, useEffect } from 'react';
import './index.less';
import Frame from './frame';

const Question = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Question'>
			<Frame>Questions</Frame>
		</div>
	);
});
export default Question;
