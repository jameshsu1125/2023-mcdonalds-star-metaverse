import { memo, useEffect } from 'react';
import './index.less';

const Description = () => (
	<div className='w-6/12'>
		<div className='w-11/12'>
			<div className='title plus'>麥克雙牛堡</div>
			<div className='subTitle'>中杯茶飲</div>
			<div className='description'>
				人氣美味強勢回歸！兩片100%純牛肉搭配切達吉事片，夾進全新升級的蓬鬆麵包，再配上一口清爽的無糖綠茶，啊嘶～～～這樣的明星級美味只在1+1星級點！
			</div>
		</div>
	</div>
);

const Photo = () => (
	<div className='flex flex-1 flex-col items-center'>
		<div className='flex w-full justify-end py-5'>
			<div className='headline' />
		</div>
		<div className='-mt-5 w-[110%]'>
			<div className='product' />
		</div>
	</div>
);

const Information = memo(() => {
	useEffect(() => {}, []);
	return (
		<div className='Information'>
			<Description />
			<Photo />
		</div>
	);
});
export default Information;
