import { memo, useEffect, useState } from 'react';
import './index.less';
import { TweenProvider } from 'lesca-use-tween';

export const ESTSymbol = memo(({ productName }) => (
	<div className='ESTSymbols'>
		{[...new Array(3).keys()].map((e) => (
			<div key={`s${e}`} />
		))}
		<div className='productName'>{productName}</div>
	</div>
));

export const ESTDescription = memo(({ personality }) => (
	<div className='ESTDescription'>
		{personality.map((text) => (
			<p key={text}>{text}</p>
		))}
	</div>
));

export const ESTFront = memo(() => (
	<div className='EST_b_f'>
		<div />
		<div />
	</div>
));

export const ESTBack = memo(() => (
	<div className='EST_b_b'>
		<div />
		<div />
	</div>
));

export const EST = memo(({ hashtag, characteristic, state }) => {
	const { steps } = state;

	const [tweenStyle, setTweenStyle] = useState();

	useEffect(() => {
		if (steps === 1) {
			setTweenStyle({ scale: 1 });
		}
	}, [steps]);

	return (
		<div className='EST'>
			<TweenProvider defaultStyle={{ scale: 0 }} tweenStyle={tweenStyle}>
				<div className='lines'>
					{[...new Array(18).keys()].map((e, index) => (
						<TweenProvider
							key={e}
							defaultStyle={{ scale: 0 }}
							tweenStyle={tweenStyle}
							options={{
								delay: 30 * index,
								duration: 500,
							}}
						>
							<div>
								<div className={`f${e}`} />
							</div>
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
