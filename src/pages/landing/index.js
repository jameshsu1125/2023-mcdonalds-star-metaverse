import OnloadProvider from 'lesca-react-onload';
import { memo, useContext, useState } from 'react';
import { Context } from '../../settings/config';
import 標語 from './slogan';
import 地毯 from './carpet';
import 彩球 from './coloredBalls';
import { LandingContext, LandingSteps } from './config';
import 窗簾 from './curtain';
import 食物們 from './foods';
import './index.less';
import 麥當當LOGO from './logo';
import 門簾 from './sideCurtain';
import 聚光燈 from './spotlight';
import 星星們 from './symbols';

const Landing = memo(() => {
	const value = useState(LandingSteps);
	const [content, setContext] = useContext(Context);

	console.log(content);

	return (
		<LandingContext.Provider value={value}>
			<OnloadProvider
				onload={() => {
					setContext((S) => ({ ...S, steps: LandingSteps.fadeIn }));
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
