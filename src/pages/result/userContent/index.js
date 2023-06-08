import { memo, useEffect } from 'react';
import './index.less';
import UserName from './userName';
import Theme from './theme';
import Motto from './motto';
import Buddy from './buddy';

const UserContent = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='UserContent'>
			<div className='temp' />
			<div className='onePlusOne'>
				<div />
			</div>
			<UserName />
			<Theme />
			<Motto />
			<Buddy />
		</div>
	);
});
export default UserContent;
