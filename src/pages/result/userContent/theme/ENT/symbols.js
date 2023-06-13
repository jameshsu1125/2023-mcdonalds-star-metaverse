import { memo, useEffect } from 'react';
import './symbols.less';

const ENTSymbols = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='ENTSymbols'>
			{[...new Array(3).keys()].map((e) => (
				<div key={`s${e}`} />
			))}
			<div className='productName'>麥克雙牛堡</div>
		</div>
	);
});
export default ENTSymbols;
