import { memo } from 'react';
import Border from './border';
import Floor from './floor';
import './index.less';
import Masters from './masters';
import Ribbons from './ribbons';

const Frame = memo(({ children, prev }) => (
	<div className='Frame'>
		<Floor />
		<div className='pointer-events-auto relative flex h-full w-full items-center justify-center'>
			{children}
		</div>
		<Border />
		<Masters prev={prev} />
		<Ribbons />
	</div>
));
export default Frame;
