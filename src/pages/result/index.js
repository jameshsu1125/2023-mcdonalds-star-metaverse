import Click from 'lesca-click';
import OnloadProvider from 'lesca-react-onload';
import { memo, useEffect, useState } from 'react';
import Canvas from '../../components/canvas';
import Container from '../../components/container';
import { ResultContext, ResultState, ResultSteps } from './config';
import Footer from './footer';
import './index.less';
import Product from './product';
import UserContent from './userContent';

const Question = memo(() => {
	const value = useState(ResultState);
	const [state, setState] = value;
	const { steps } = state;

	useEffect(() => {
		Click.setEnabled(false);
	}, []);

	return (
		<ResultContext.Provider value={value}>
			<OnloadProvider onload={() => setState((S) => ({ ...S, steps: ResultSteps.combineImage }))}>
				<div className='Result'>
					<Container>
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
