import { memo, useContext } from 'react';
import ReactLoading from 'react-loading';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import './index.less';

const Background = () => <div className='loadingBG absolute top-0 h-full w-full' />;
const Text = ({ children }) => <span className='text-textColor relative'>{children}</span>;
const LoadingProcess = memo(() => {
	const [context] = useContext(Context);
	const data = context[ACTION.LoadingProcess];
	return (
		<div className='absolute top-0 z-50 flex h-full w-full flex-col items-center justify-center space-y-0'>
			<Background />
			<ReactLoading className='relative' type={data.type} />
			{data.body && <Text>{data.body}</Text>}
		</div>
	);
});
export default LoadingProcess;
