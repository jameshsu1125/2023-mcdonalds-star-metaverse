import { memo } from 'react';
import './index.less';

const UserName = memo(({ userName }) => (
	<div className='UserName'>
		在另一個宇宙的
		<span className='m-2 text-3xl'>{userName === '' ? '你' : userName}</span>
	</div>
));
export default UserName;
