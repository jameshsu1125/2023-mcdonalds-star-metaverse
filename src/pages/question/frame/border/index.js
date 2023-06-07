import useTween from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import { QuestionSteps } from '../../config';
import './index.less';

const Border = memo(({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0, scale: 1.4 });
	useEffect(() => {
		if (steps === QuestionSteps.fadeIn) {
			setStyle({ opacity: 1, scale: 1 }, 1000);
		}
	}, [steps]);
	return <div style={style} className='Border' />;
});
export default Border;
