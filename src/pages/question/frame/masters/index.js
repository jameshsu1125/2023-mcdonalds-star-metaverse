import { memo, useEffect } from 'react';
import './index.less';

const Masters = memo(({ prev }) => {
	useEffect(() => {}, []);
	return (
		<div className='Masters'>
			{[...new Array(12).keys()].map((e) => (
				<div key={e} />
			))}
			<div className='buttonContainer pointer-events-auto'>{prev}</div>
		</div>
	);
});
export default Masters;
