import { memo, useContext, useMemo } from 'react';
import { Context } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import { ResultContentsList, ResultContext } from '../config';
import Buddy from './buddy';
import Buttons from './buttons';
import './index.less';
import Motto from './motto';
import Themes from './theme';
import UserName from './userName';

const UserContent = memo(() => {
	const [context] = useContext(Context);
	const { id, userName } = context[ACTION.result];

	const [state] = useContext(ResultContext);

	const data = useMemo(() => {
		const [content] = ResultContentsList.filter((e) => e.ID === id);
		return content;
	}, [id]);

	return (
		<div className='UserContent'>
			{/* <div className='temp' /> */}
			<div className='onePlusOne'>
				<div />
			</div>
			<UserName userName={userName} />
			<Themes data={data} state={state} />
			<Motto data={data} />
			<Buddy data={data} />
			<Buttons data={data} />
		</div>
	);
});
export default UserContent;
