/* eslint-disable react/no-array-index-key */
import { Fragment, memo, useMemo } from 'react';
import './index.less';
import { IDs } from '../../../../settings/constant';

const Description = ({ data }) => {
	const { ID } = data;
	const title = useMemo(() => {
		const name = data.useWith[0];
		const ext = name.substring(name.indexOf('('), name.lastIndexOf(')') + 1);
		return [name.split('(')[0], <span>{ext}</span>];
	}, [data]);

	return (
		<div className='w-6/12'>
			<div className='w-11/12'>
				<div className='title'>
					{title.map((item, index) => (
						<Fragment key={`title${index}`}>{item}</Fragment>
					))}
					{ID !== IDs['2ENF'] && <div className='plus' />}
				</div>
				<div className='subTitle'>
					{ID === IDs['2ENF'] && <div className='plus' />}
					{data.useWith[1]}
				</div>
				<div className='description'>{data.describe}</div>
			</div>
		</div>
	);
};

const Photo = ({ data }) => (
	<div className='flex flex-1 flex-col items-center'>
		<div className='flex w-full justify-end py-5'>
			<div className='headline' />
		</div>
		<div className='-mt-5 w-[110%]'>
			<div className={`product p${data.ID}`} />
		</div>
	</div>
);

const Information = memo(({ data }) => (
	<div className='Information'>
		<Description data={data} />
		<Photo data={data} />
	</div>
));
export default Information;
