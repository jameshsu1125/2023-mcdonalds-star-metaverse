import { memo } from 'react';
import './index.less';

export const INFSymbol = memo(({ productName }) => (
	<div className='INFSymbols'>
		{[...new Array(5).keys()].map((e) => (
			<div key={`s${e}`} />
		))}
		<div className='productName'>{productName}</div>
	</div>
));

export const INFDescription = memo(({ personality }) => (
	<div className='INFDescription'>
		{personality.map((text) => (
			<p key={text}>{text}</p>
		))}
	</div>
));

export const INFFront = memo(() => (
	<div className='INF_b_f'>
		<div />
	</div>
));

export const INFBack = memo(() => (
	<div className='INF_b_b'>
		<div />
	</div>
));

export const INF = memo(({ hashtag, characteristic }) => (
	<div className='INF'>
		{/* <div className='temp' /> */}
		{[...new Array(16).keys()].map((key, index) => (
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
