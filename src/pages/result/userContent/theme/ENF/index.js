import { memo } from 'react';
import './index.less';

export const ENFSymbol = memo(({ productName }) => (
	<div className='ENFSymbols'>
		{[...new Array(5).keys()].map((e) => (
			<div key={`s${e}`} />
		))}
		<div className='productName'>{productName}</div>
	</div>
));

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

export const ENF = memo(({ hashtag, characteristic }) => (
	<div className='ENF'>
		{/* <div className='temp' /> */}
		<div className='bg' />
		<div className='s0' />
		<div className='s1' />
		<div className='ground'>
			<div>
				<div className='girl'>
					<div />
					<div />
				</div>
			</div>
		</div>
		<div className='s2' />
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
));
