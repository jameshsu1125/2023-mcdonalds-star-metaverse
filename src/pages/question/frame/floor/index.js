import useTween from 'lesca-use-tween';
import { memo, useEffect } from 'react';
import { QuestionSteps } from '../../config';
import './index.less';

const Floor = memo(({ steps }) => {
	const [style, setStyle] = useTween({ opacity: 0, scale: 1.5, y: window.innerHeight * 0.4 });
	useEffect(() => {
		if (steps === QuestionSteps.fadeIn) {
			setStyle({ opacity: 1, y: 0, scale: 1 }, 500);
		}
	}, [steps]);
	return <div style={style} className='Floor' />;
});
export default Floor;
