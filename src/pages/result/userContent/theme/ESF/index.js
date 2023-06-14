import { memo, useEffect, useState } from 'react';
import './index.less';
import { TweenProvider } from 'lesca-use-tween';

export const ESFSymbol = memo(({ productName }) => (
	<div className='ESFSymbols'>
		{[...new Array(2).keys()].map((e) => (
			<div key={`s${e}`} />
		))}
		<div className='productName'>{productName}</div>
	</div>
));

export const ESFDescription = memo(({ personality }) => (
	<div className='ESFDescription'>
		{personality.map((text) => (
			<p key={text}>{text}</p>
		))}
	</div>
));

export const ESFFront = memo(() => (
	<div className='ESF_b_f'>
		<div />
	</div>
));

export const ESFBack = memo(() => (
	<div className='ESF_b_b'>
		<div />
	</div>
));

export const ESF = memo(({ hashtag, characteristic, state }) => {
	const { steps } = state;

	const [tweenStyle, setTweenStyle] = useState();

	useEffect(() => {
		if (steps === 1) {
			setTweenStyle({ y: 0 });
		}
	}, [steps]);

	return (
		<div className='ESF'>
			<TweenProvider defaultStyle={{ y: 1000 }} tweenStyle={tweenStyle} options={{ duration: 700 }}>
				<div className='f0' />
			</TweenProvider>
			<TweenProvider
				defaultStyle={{ y: 1000 }}
				tweenStyle={tweenStyle}
				options={{ duration: 1000, delay: 100 }}
			>
				<div className='f1' />
			</TweenProvider>
			<TweenProvider
				defaultStyle={{ y: 1000 }}
				tweenStyle={tweenStyle}
				options={{ duration: 1200, delay: 200 }}
			>
				<div className='ground'>
					<div>
						{[...new Array(10).keys()].map((e, index) => (
							<TweenProvider
								key={e}
								defaultStyle={{ y: 1000 }}
								tweenStyle={tweenStyle}
								options={{ duration: 500, delay: 30 * index }}
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
