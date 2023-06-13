import { memo, useEffect } from 'react';
import './index.less';

const UserName = memo(({ userName }) => {
	useEffect(() => {}, []);
	return (
		<div className='UserName'>
			在另一個宇宙的
			<span className='m-2 text-3xl'>{userName}</span>
		</div>
	);
});
export default UserName;
