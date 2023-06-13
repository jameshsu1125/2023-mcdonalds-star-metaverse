import { memo } from 'react';
import './index.less';

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

export const EST = memo(({ hashtag, characteristic }) => (
	<div className='EST'>
		{/* <div className='temp' /> */}
		<div className='lines'>
			{[...new Array(18).keys()].map((e) => (
				<div key={e}>
					<div className={`f${e}`} />
				</div>
			))}
		</div>
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
));
