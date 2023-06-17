import Click from 'lesca-click';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useState } from 'react';
import Canvas from '../../components/canvas';
import Container from '../../components/container';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import { ResultContext, ResultState, ResultSteps } from './config';
import Footer from './footer';
import './index.less';
import Product from './product';
import UserContent from './userContent';

const Question = memo(() => {
	const [, setContext] = useContext(Context);
	const value = useState(ResultState);
	const [state, setState] = value;
	const { steps } = state;

	useEffect(() => {
		Click.setEnabled(false);
		setContext({ type: ACTION.LoadingProcess, state: { enabled: true } });
	}, []);

	return (
		<ResultContext.Provider value={value}>
			<OnloadProvider
				onload={() => {
					setState((S) => ({ ...S, steps: ResultSteps.combineImage }));
					setContext({ type: ACTION.LoadingProcess, state: { enabled: false } });
				}}
			>
				<div className='Result'>
					<Container steps={steps}>
						<UserContent />
						<Product />
						<Footer />
					</Container>
				</div>
			</OnloadProvider>
			{steps === ResultSteps.combineImage && <Canvas />}
		</ResultContext.Provider>
	);
});
export default Question;
