import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef } from 'react';
import { QuestionContext } from '../config';
import './index.less';

const PrevButton = memo(() => {
	const ref = useRef();
	const [context] = useContext(QuestionContext);
	const { index } = context;
	const [style, setStyle] = useTween({ opacity: 0 });

	useEffect(() => {
		if (index === 0) {
			if (ref.current?.style.opacity !== '0') setStyle({ opacity: 0 });
		} else if (ref.current?.style.opacity !== '1') setStyle({ opacity: 1 });
	}, [index]);
	return (
		<button ref={ref} style={style} type='button' className='QuestionPrevButton'>
			回上一題
		</button>
	);
});
export default PrevButton;
