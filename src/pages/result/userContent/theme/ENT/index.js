import { TweenProvider } from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';
import './index.less';

export const ENTSymbol = memo(({ productName }) => (
	<div className='ENTSymbols'>
		{[...new Array(3).keys()].map((e) => (
			<div key={`s${e}`} />
		))}
		<div className='productName'>{productName}</div>
	</div>
));

export const ENTDescription = memo(({ personality }) => (
	<div className='ENTDescription'>
		{personality.map((text) => (
			<p key={text}>{text}</p>
		))}
	</div>
));

export const ENTButtonBack = memo(() => (
	<div className='ENT_b_b'>
		<div />
		<div />
	</div>
));

export const ENT = memo(({ hashtag, characteristic, state }) => {
	const { steps } = state;
	const [sunTween, setSunTween] = useState();
	const [workerTween, setWorkerTween] = useState();
	useEffect(() => {
		if (steps === 2) {
			setSunTween({ opacity: 1, y: 0 });
			setWorkerTween({ y: 0 });
		}
	}, [steps]);
	return (
		<div className='ENT'>
			<TweenProvider
				tweenStyle={sunTween}
				defaultStyle={{ opacity: 0, y: 300 }}
				options={{ duration: 800 }}
			>
				<div className='sun' />
			</TweenProvider>
			<TweenProvider
				defaultStyle={{ y: 700 }}
				tweenStyle={workerTween}
				options={{ delay: 100, duration: 800 }}
			>
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
			</TweenProvider>
			<div className='profile'>
				<div className='characteristic'>{characteristic}</div>
				<div className='name' />
				<div className='hashtag'>
					{hashtag.map((hash) => (
						<span key={hash}>{hash}</span>
					))}
				</div>
				<div className='percentage' />
			</div>
		</div>
	);
});
