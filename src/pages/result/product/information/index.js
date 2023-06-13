import { memo } from 'react';
import './index.less';

const Description = ({ data }) => (
	<div className='w-6/12'>
		<div className='w-11/12'>
			<div className='title plus'>{data.useWith[0]}</div>
			<div className='subTitle'>{data.useWith[1]}</div>
			<div className='description'>{data.describe}</div>
		</div>
	</div>
);

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
