import { memo } from 'react';
import './index.less';

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

export const ESF = memo(({ hashtag, characteristic }) => (
	<div className='ESF'>
		<div className='f0' />
		<div className='f1' />
		<div className='ground'>
			<div>
				{[...new Array(10).keys()].map((e) => (
					<div key={e} />
				))}
			</div>
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
