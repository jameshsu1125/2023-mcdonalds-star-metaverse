import { memo } from 'react';
import './index.less';

const Themes = memo(({ data }) => {
	const { Theme, Symbol, Description, characteristic, hashtag, productName, personality } = data;

	return (
		<div className='Theme'>
			<div className='content'>
				{Theme !== '' && <Theme hashtag={hashtag} characteristic={characteristic} />}
				<div className='description'>
					{Description && <Description personality={personality} />}
				</div>
			</div>
			<div className='symbols'>{Symbol !== '' && <Symbol productName={productName} />}</div>
		</div>
	);
});
export default Themes;
