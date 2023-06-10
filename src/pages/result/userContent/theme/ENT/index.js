import { memo, useEffect } from 'react';
import './index.less';

const 職場星天王 = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='ENT'>
			<div className='sun' />
			<div className='earth'>
				<div>
					<div className='workers'>
						<div className='back'>
							{[...new Array(3).keys()].map((e) => (
								<div key={`b${e}`} />
							))}
						</div>
						<div className='man' />
						<div className='front'>
							{[...new Array(3).keys()].map((e) => (
								<div key={`f${e}`} />
							))}
						</div>
					</div>
				</div>
			</div>
			<div className='profile'>
				<div className='characteristic'>水土不服只服自己</div>
				<div className='name' />
				<div className='hashtag'>
					<span>#不自由毋寧死</span>
					<span>#不自由毋寧死</span>
				</div>
				<div className='percentage' />
			</div>
		</div>
	);
});
export default 職場星天王;
