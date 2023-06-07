import { memo, useContext } from 'react';
import { QuestionContext } from '../config';
import Border from './border';
import Floor from './floor';
import './index.less';
import Masters from './masters';
import Ribbons from './ribbons';

const Frame = memo(({ children, prev }) => {
	const [context] = useContext(QuestionContext);
	const { steps } = context;
	return (
		<div className='Frame'>
			<Floor steps={steps} />
			<div className='pointer-events-auto relative flex h-full w-full items-center justify-center'>
				{children}
			</div>
			<Border steps={steps} />
			<Masters prev={prev} steps={steps} />
			<Ribbons steps={steps} />
		</div>
	);
});
export default Frame;
