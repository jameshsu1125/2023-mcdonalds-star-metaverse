import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useEffect, useState } from 'react';
import { Context } from '../../settings/config';
import { ACTION } from '../../settings/constant';
import 地毯 from './carpet';
import 彩球 from './coloredBalls';
import { LandingContext, LandingState, LandingSteps } from './config';
import 窗簾 from './curtain';
import 食物們 from './foods';
import './index.less';
import 麥當當LOGO from './logo';
import 門簾 from './sideCurtain';
import 標語 from './slogan';
import 聚光燈 from './spotlight';
import 星星們 from './symbols';

const Landing = memo(() => {
	const [, setContext] = useContext(Context);
	const value = useState(LandingState);
	const [, setState] = value;

	useEffect(() => {
		setContext({ type: ACTION.LoadingProcess, state: { enabled: true } });
	}, []);

	return (
		<LandingContext.Provider value={value}>
			<OnloadProvider
				onload={() => {
					setState((S) => ({ ...S, steps: LandingSteps.fadeIn }));
					setContext({ type: ACTION.LoadingProcess, state: { enabled: false } });
				}}
			>
				<div className='Landing'>
					<地毯>
						<食物們 />
					</地毯>
					<窗簾 />
					<彩球 />
					<門簾 />
					<聚光燈>
						<星星們 />
					</聚光燈>
					<麥當當LOGO />
					<標語 />
				</div>
			</OnloadProvider>
		</LandingContext.Provider>
	);
});
export default Landing;
