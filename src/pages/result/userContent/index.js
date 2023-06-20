import { memo, useContext, useEffect, useMemo } from 'react';
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
	const { id, userName, mottoIndex } = context[ACTION.result];

	const [state] = useContext(ResultContext);

	const data = useMemo(() => {
		const [content] = ResultContentsList.filter((e) => e.ID === id);
		return content;
	}, [id]);

	useEffect(() => {
		const { name, productName } = data;
		window.dataLayer?.push({
			event: 'pageview',
			eventCategory: 'engagement',
			eventLabel: `${name}x${productName}`,
		});
	}, [data]);

	return (
		<div className='UserContent'>
			<div className='gradients'>
				{[...new Array(3).keys()].map((key) => (
					<div key={key} />
				))}
			</div>
			<div className='onePlusOne'>
				<div />
			</div>
			<UserName userName={userName} />
			<Themes data={data} state={state} />
			<Motto data={data} index={mottoIndex} />
			<Buddy data={data} />
			<Buttons data={data} />
		</div>
	);
});
export default UserContent;
