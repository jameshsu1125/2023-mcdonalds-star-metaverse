import { memo } from 'react';
import './index.less';

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

export const ISF = memo(({ hashtag, characteristic }) => (
	<div className='ISF'>
		{/* <div className='temp' /> */}
		<div className='f0' />
		<div className='f1' />
		<div className='ground'>
			<div>
				{[...new Array(15).keys()].map((key) => (
					<div key={key} />
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
