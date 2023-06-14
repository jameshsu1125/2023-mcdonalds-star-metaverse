import { memo } from 'react';
import './index.less';

const Themes = memo(({ data, state }) => {
	const { Theme, Symbol, Description, characteristic, hashtag, productName, personality } = data;

	return (
		<div className='Theme'>
			<div className='content'>
				{Theme !== '' && <Theme hashtag={hashtag} characteristic={characteristic} state={state} />}
				<div className='description'>
					{Description && <Description personality={personality} />}
				</div>
			</div>
			<div className='symbols'>
				{Symbol !== '' && <Symbol productName={productName} state={state} />}
			</div>
		</div>
	);
});
export default Themes;
