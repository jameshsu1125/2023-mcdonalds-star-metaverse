import { memo, useContext, useMemo } from 'react';
import './index.less';
import { QuestionContext, QuestionList } from '../../config';

const Button = ({ label, type }) => {
	console.log(type);
	return (
		<button className='button' type='button'>
			{label}
		</button>
	);
};

const ButtonGroup = memo(() => {
	const [context] = useContext(QuestionContext);
	const { index } = context;
	const { answers } = useMemo(() => QuestionList[index], [index]);

	return (
		<div className='ButtonGroup'>
			{answers.map((item) => (
				<Button key={JSON.stringify(item)} label={item.text} type={item.type} />
			))}
		</div>
	);
});
export default ButtonGroup;
