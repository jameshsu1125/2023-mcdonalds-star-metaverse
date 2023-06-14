import { memo, useEffect, useState } from 'react';
import './index.less';
import { Bezier, TweenProvider } from 'lesca-use-tween';

export const ISTSymbol = memo(({ productName }) => (
	<div className='ISTSymbols'>
		{[...new Array(3).keys()].map((e) => (
			<div key={`s${e}`} />
		))}
		<div className='productName'>{productName}</div>
	</div>
));

export const ISTDescription = memo(({ personality }) => (
	<div className='ISTDescription'>
		{personality.map((text) => (
			<p key={text}>{text}</p>
		))}
	</div>
));

export const ISTFront = memo(() => (
	<div className='IST_b_f'>
		<div />
		<div />
	</div>
));

export const ISTBack = memo(() => (
	<div className='IST_b_b'>
		<div />
		<div />
	</div>
));

export const IST = memo(({ hashtag, characteristic, state }) => {
	const { steps } = state;

	const [tweenStyle, setTweenStyle] = useState();

	useEffect(() => {
		if (steps === 1) {
			setTweenStyle({ y: 0, opacity: 1 });
		}
	}, [steps]);

	return (
		<div className='IST'>
			{[...new Array(5).keys()].map((key, index) => (
				<TweenProvider
					key={key}
					defaultStyle={{
						y: index === 1 || index === 4 ? -800 : -100,
						opacity: index === 1 || index === 4 ? 1 : 0,
					}}
					tweenStyle={tweenStyle}
					options={{
						duration: 1200,
						delay: 200 * index,
						easing: index === 4 ? Bezier.easeOutBack : Bezier.easeOutQuart,
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
