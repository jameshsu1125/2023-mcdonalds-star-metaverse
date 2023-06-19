import { memo, useMemo } from 'react';
import { ResultNames } from '../../config';
import './index.less';

const ENF = () => (
	<div className='CI_ENF'>
		<div className='image' />
		<div className='subtitle'>麥脆鷄腿(原味/辣味)</div>
	</div>
);

const ENT = ({ productName }) => (
	<div className='CI_ENT'>
		<div className='image' />
		<div className='subtitle'>{productName}</div>
	</div>
);

const ESF = () => (
	<div className='CI_ESF'>
		<div className='image' />
		<div className='subtitle'>六塊麥克鷄塊</div>
	</div>
);

const INT = ({ productName }) => (
	<div className='CI_INT'>
		<div className='image' />
		<div className='subtitle'>{productName}</div>
	</div>
);

const EST = ({ productName }) => (
	<div className='CI_EST'>
		<div className='image' />
		<div className='subtitle'>{productName}</div>
	</div>
);

const ISF = () => (
	<div className='CI_ISF'>
		<div className='image' />
		<div className='subtitle'>
			<div>可口可樂</div>
			<div>可口可樂Zero</div>
			<div>雪碧</div>
		</div>
	</div>
);

const IST = () => (
	<div className='CI_IST'>
		<div className='image' />
		<div className='subtitle'>
			<div>冰經典美式咖啡</div>
			<div>經典美式咖啡</div>
		</div>
	</div>
);

const INF = () => (
	<div className='CI_INF'>
		<div className='image' />
		<div className='subtitle'>
			<div>冰無糖綠茶</div>
			<div>冰無糖紅茶</div>
			<div>
				冰紅茶
				<br />
				<span>(檸檬風味)</span>
			</div>
		</div>
	</div>
);

const CommercialImage = memo(({ data }) => {
	const Product = useMemo(() => {
		const { ID, productName } = data;

		switch (ID) {
			case ResultNames.職場星天王.ID:
				return <ENT productName={productName} />;
			case ResultNames.C位娛樂星.ID:
				return <ENF productName={productName} />;
			case ResultNames.人氣星團寵.ID:
				return <ESF productName={productName} />;
			case ResultNames.星際超模.ID:
				return <INT productName={productName} />;
			case ResultNames.金牌星業務.ID:
				return <EST productName={productName} />;
			case ResultNames.話題星天才.ID:
				return <ISF productName={productName} />;
			case ResultNames.科技星貴.ID:
				return <IST productName={productName} />;
			case ResultNames.星靈嚮導.ID:
				return <INF productName={productName} />;
			default:
				return '';
		}
	}, [data]);

	const optional = useMemo(() => {
		if (data.ID === ResultNames.星靈嚮導.ID) return <div className='optional' />;
		if (data.ID === ResultNames.科技星貴.ID) return <div className='optional' />;
		if (data.ID === ResultNames.話題星天才.ID) return <div className='optional' />;
		return '';
	}, [data.ID]);

	return (
		<div className='CommercialImage'>
			{Product}
			{optional}
		</div>
	);
});
export default CommercialImage;
