import Click from 'lesca-click';
import { memo, useContext, useEffect, useId, useMemo } from 'react';
import { Context, 麥當勞官網URL } from '../../../settings/config';
import { ACTION } from '../../../settings/constant';
import { ResultContentsList } from '../config';
import CommercialImage from './commercialImage';
import './index.less';
import Information from './information';

const Button = () => {
	const id = useId();
	useEffect(() => {
		Click.add(`#${id}`, () => {
			window.open(麥當勞官網URL);
		});
		return () => Click.remove(`#${id}`);
	}, []);
	return (
		<div className='button'>
			<button id={id} type='button'>
				看更多明星級美味
			</button>
		</div>
	);
};

const Product = memo(() => {
	const [context] = useContext(Context);
	const { id } = context[ACTION.result];

	const data = useMemo(() => {
		const [content] = ResultContentsList.filter((e) => e.ID === id);
		return content;
	}, [id]);

	return (
		<div className='Product'>
			<div>
				{/* <div className='temp' /> */}
				<div className='context'>
					<div className='onePlusOne' />
					<CommercialImage data={data} />
					<Information data={data} />
				</div>
				<Button />
			</div>
		</div>
	);
});
export default Product;
