import { memo } from 'react';
import './index.less';

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

export const IST = memo(({ hashtag, characteristic }) => (
	<div className='IST'>
		{/* <div className='temp' /> */}
		{[...new Array(5).keys()].map((key, index) => (
			<div key={key} className={`f${index}`} />
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
));
