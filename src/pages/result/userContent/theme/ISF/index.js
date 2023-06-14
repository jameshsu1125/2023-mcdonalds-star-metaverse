import { memo, useEffect, useState } from 'react';
import './index.less';
import { TweenProvider } from 'lesca-use-tween';

export const ISFSymbol = memo(({ productName }) => (
	<div className='ISFSymbols'>
		{[...new Array(4).keys()].map((e) => (
			<div key={`s${e}`} />
		))}
		<div className='productName'>{productName}</div>
	</div>
));

export const ISFDescription = memo(({ personality }) => (
	<div className='ISFDescription'>
		{personality.map((text) => (
			<p key={text}>{text}</p>
		))}
	</div>
));

export const ISFFront = memo(() => (
	<div className='ISF_b_f'>
		<div />
		<div />
	</div>
));

export const ISFBack = memo(() => (
	<div className='ISF_b_b'>
		<div />
		<div />
	</div>
));

export const ISF = memo(({ hashtag, characteristic, state }) => {
	const { steps } = state;

	const [tweenStyle, setTweenStyle] = useState();

	useEffect(() => {
		if (steps === 1) {
			setTweenStyle({ y: 0 });
		}
	}, [steps]);

	return (
		<div className='ISF'>
			<TweenProvider defaultStyle={{ y: 1000 }} tweenStyle={tweenStyle}>
				<div className='f0' />
			</TweenProvider>
			<TweenProvider defaultStyle={{ y: 1000 }} tweenStyle={tweenStyle} options={{ delay: 50 }}>
				<div className='f1' />
			</TweenProvider>
			<TweenProvider defaultStyle={{ y: 1000 }} tweenStyle={tweenStyle} options={{ delay: 100 }}>
				<div className='ground'>
					<div>
						{[...new Array(15).keys()].map((key, index) => (
							<TweenProvider
								key={key}
								defaultStyle={{ y: 1000 }}
								tweenStyle={tweenStyle}
								options={{ delay: 50 * index, duration: 2000 }}
							>
								<div />
							</TweenProvider>
						))}
					</div>
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
