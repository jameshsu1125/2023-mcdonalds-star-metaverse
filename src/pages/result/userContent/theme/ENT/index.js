import { memo } from 'react';
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

export const ENT = memo(({ hashtag, characteristic }) => (
	<div className='ENT'>
		{/* <div className='temp' /> */}
		<div className='sun' />
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
));
