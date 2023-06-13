import { memo, useMemo } from 'react';
import './index.less';

const Motto = memo(({ data }) => {
	const text = useMemo(() => {
		const { motto } = data;
		return motto[Math.floor(Math.random() * motto.length)];
	}, [data]);

	return (
		<div className='Motto'>
			<div className='context'>
				<div className='header'>你的星級金句</div>
				<div className='body'>{text}</div>
			</div>
		</div>
	);
});
export default Motto;
