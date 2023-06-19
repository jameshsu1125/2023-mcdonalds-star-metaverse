import { memo, useMemo } from 'react';
import './index.less';

const Motto = memo(({ data, index }) => {
	const text = useMemo(() => {
		const { motto } = data;
		return motto[index];
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
