/* eslint-disable react/no-array-index-key */
import { Fragment, memo, useMemo } from 'react';
import './index.less';

const Box = ({ data }) => {
	const { name, productName, image } = data;
	const currentName = useMemo(() => {
		const op = name.split('').map((W) => {
			if (W === '星') return <div className='capitalize' />;
			return W;
		});
		return op;
	}, [name]);

	return (
		<div className='box'>
			<div className='image' style={{ backgroundImage: `url(${image})` }} />
			<div className='name'>
				{currentName.map((e, i) => (
					<Fragment key={`d${i}`}>{e}</Fragment>
				))}
			</div>
			<div className='productName'>
				<div>{productName}</div>
			</div>
		</div>
	);
};

const Message = ({ data }) => {
	const { troll } = data;
	return (
		<div className='message'>
			<div className='title' />
			<div className='body'>
				{troll.map((e) => (
					<p key={e}>{e}</p>
				))}
			</div>
		</div>
	);
};

const Buddy = memo(({ data }) => {
	const { buddies } = data;
	return (
		<div className='Buddy'>
			{buddies.map((e) => (
				<Box key={JSON.stringify(e)} data={e} />
			))}
			<Message data={data} />
		</div>
	);
});
export default Buddy;
