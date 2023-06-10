import Click from 'lesca-click';
import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useState } from 'react';
import Container from '../../components/container';
import { Context } from '../../settings/config';
import { ResultContext, ResultSteps } from './config';
import Footer from './footer';
import './index.less';
import Product from './product';
import UserContent from './userContent';
import { ACTION } from '../../settings/constant';

const Question = memo(() => {
	const [context] = useContext(Context);
	const { answers } = context[ACTION.result];

	const value = useState(ResultContext);
	const [, setState] = value;

	useEffect(() => {
		Click.setEnabled(false);
	}, []);

	useEffect(() => {
		console.log(answers);
	}, [answers]);

	return (
		<ResultContext.Provider value={value}>
			<OnloadProvider onload={() => setState((S) => ({ ...S, steps: ResultSteps.fadeIn }))}>
				<div className='Result'>
					<Container>
						<UserContent />
						<Product />
						<Footer />
					</Container>
				</div>
			</OnloadProvider>
		</ResultContext.Provider>
	);
});
export default Question;
