import { memo, useEffect, useState } from 'react';
import './index.less';
import { TweenProvider } from 'lesca-use-tween';

export const INFSymbol = memo(({ productName }) => (
	<div className='INFSymbols'>
		{[...new Array(5).keys()].map((e) => (
			<div key={`s${e}`} />
		))}
		<div className='productName'>{productName}</div>
	</div>
));

export const INFDescription = memo(({ personality }) => (
	<div className='INFDescription'>
		{personality.map((text) => (
			<p key={text}>{text}</p>
		))}
	</div>
));

export const INFFront = memo(() => (
	<div className='INF_b_f'>
		<div />
	</div>
));

export const INFBack = memo(() => (
	<div className='INF_b_b'>
		<div />
	</div>
));

export const INF = memo(({ hashtag, characteristic, state }) => {
	const { steps } = state;

	const [tweenStyle, setTweenStyle] = useState();

	useEffect(() => {
		if (steps === 1) {
			setTweenStyle({ y: 0 });
		}
	}, [steps]);

	return (
		<div className='INF'>
			{[...new Array(16).keys()].map((key, index) => (
				<TweenProvider
					key={key}
					defaultStyle={{ y: 865 }}
					tweenStyle={tweenStyle}
					options={{
						delay: 30 * index,
						duration: 2000,
					}}
				>
					<div className={`f${index}`} />
				</TweenProvider>
			))}
			<div className='profile'>
				<div className='characteristic'>{characteristic}</div>
				<div className='name' />
				<div className='hashtag'>
					{hashtag.map((hash) => (
						<span key={hash}>{`#${hash}`}</span>
					))}
				</div>
				<div className='percentage' />
			</div>
		</div>
	);
});
