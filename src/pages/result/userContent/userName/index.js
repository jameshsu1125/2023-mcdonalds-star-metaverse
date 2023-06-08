import { memo, useContext, useEffect } from 'react';
import './index.less';
import { Context } from '../../../../settings/config';
import { ACTION } from '../../../../settings/constant';

const UserName = memo(() => {
	const [context] = useContext(Context);
	const { userName } = context[ACTION.result];

	useEffect(() => {}, []);
	return (
		<div className='UserName'>
			在另一個宇宙的
			<span className='m-2 text-3xl'>{userName}</span>
		</div>
	);
});
export default UserName;
