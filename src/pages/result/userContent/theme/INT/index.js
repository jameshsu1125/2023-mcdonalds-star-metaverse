import { memo, useEffect, useState } from 'react';
import './index.less';
import { TweenProvider } from 'lesca-use-tween';

export const INTSymbol = memo(({ productName }) => (
	<div className='INTSymbols'>
		{[...new Array(5).keys()].map((e) => (
			<div key={`s${e}`} />
		))}
		<div className='productName'>{productName}</div>
	</div>
));

export const INTDescription = memo(({ personality }) => (
	<div className='INTDescription'>
		{personality.map((text) => (
			<p key={text}>{text}</p>
		))}
	</div>
));

export const INTFront = memo(() => (
	<div className='INT_b_f'>
		<div />
		<div />
	</div>
));

export const INTBack = memo(() => (
	<div className='INT_b_b'>
		<div />
		<div />
	</div>
));

export const INT = memo(({ hashtag, characteristic, state }) => {
	const { steps } = state;

	const [tweenStyle, setTweenStyle] = useState();

	useEffect(() => {
		if (steps === 1) {
			setTweenStyle({ y: 0 });
		}
	}, [steps]);

	return (
		<div className='INT'>
			<TweenProvider defaultStyle={{ y: 1000 }} tweenStyle={tweenStyle} options={{ duration: 700 }}>
				<div className='ground'>
					{[...new Array(17).keys()].map((key, index) => (
						<TweenProvider
							key={key}
							defaultStyle={{ y: 1000 }}
							tweenStyle={tweenStyle}
							options={{ duration: 1000, delay: 30 * index }}
						>
							<div />
						</TweenProvider>
					))}
				</div>
			</TweenProvider>
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
