import { memo } from 'react';
import './index.less';

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

export const INT = memo(({ hashtag, characteristic }) => (
	<div className='INT'>
		{/* <div className='temp' /> */}
		<div className='ground'>
			{[...new Array(17).keys()].map((key) => (
				<div key={key} />
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
