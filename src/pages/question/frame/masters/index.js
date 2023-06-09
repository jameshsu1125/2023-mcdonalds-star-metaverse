import { Bezier, TweenProvider } from 'lesca-use-tween';
import { memo } from 'react';
import './index.less';

const Masters = memo(({ prev }) => (
	<div className='Masters'>
		{[...new Array(12).keys()].map((e, i) => (
			<TweenProvider
				key={e}
				defaultStyle={{ y: 200 }}
				tweenStyle={{ y: 0 }}
				options={{ delay: 200 + i * 10, duration: 500, easing: Bezier.easeOutBack }}
			>
				<div />
			</TweenProvider>
		))}
		<div className='buttonContainer pointer-events-auto'>{prev}</div>
	</div>
));
export default Masters;
