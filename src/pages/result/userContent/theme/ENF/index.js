import { TweenProvider } from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';
import './index.less';

export const ENFSymbol = memo(({ productName, state }) => {
	const { steps } = state;

	const [tweenStyle, setTween] = useState();

	useEffect(() => {
		if (steps === 1) {
			setTween({ opacity: 1 });
		}
	}, [steps]);
	return (
		<div className='ENFSymbols'>
			<TweenProvider
				defaultStyle={{ opacity: 0 }}
				tweenStyle={tweenStyle}
				options={{ delay: 1000, duration: 200 }}
			>
				{[...new Array(5).keys()].map((e) => (
					<div key={`s${e}`} />
				))}
			</TweenProvider>
			<div className='productName'>{productName}</div>
		</div>
	);
});

export const ENFDescription = memo(({ personality }) => (
	<div className='ENFDescription'>
		{personality.map((text) => (
			<p key={text}>{text}</p>
		))}
	</div>
));

export const ENFFront = memo(() => (
	<div className='ENF_b_f'>
		<div />
		<div />
	</div>
));

export const ENFBack = memo(() => (
	<div className='ENF_b_b'>
		<div />
		<div />
	</div>
));

export const ENF = memo(({ hashtag, characteristic, state }) => {
	const { steps } = state;

	const [tween, setTween] = useState();

	useEffect(() => {
		if (steps === 1) {
			setTween({ y: 0 });
		}
	}, [steps]);

	return (
		<div className='ENF'>
			<div className='bg' />
			<TweenProvider defaultStyle={{ y: 1000 }} tweenStyle={tween} options={{ duration: 700 }}>
				<div className='s0' />
			</TweenProvider>
			<TweenProvider
				defaultStyle={{ y: 1000 }}
				tweenStyle={tween}
				options={{ duration: 700, delay: 100 }}
			>
				<div className='s1' />
			</TweenProvider>
			<TweenProvider defaultStyle={{ y: 1000 }} tweenStyle={tween} options={{ duration: 700 }}>
				<div className='ground'>
					<div>
						<div className='girl'>
							<div />
							<div />
						</div>
					</div>
				</div>
			</TweenProvider>
			<TweenProvider
				defaultStyle={{ y: 1000 }}
				tweenStyle={tween}
				options={{ duration: 700, delay: 50 }}
			>
				<div className='s2' />
			</TweenProvider>
			<div className='profile'>
				<div className='bg' />
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
