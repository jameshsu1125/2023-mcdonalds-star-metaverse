import { memo, useContext, useState } from 'react';
import Container from '../../components/container';
import { Context } from '../../settings/config';
import { LandingContext, LandingSteps } from './config';

const Landing = memo(({ children }) => {
	const value = useState(LandingSteps);
	const [content, setContext] = useContext(Context);

	return (
		<LandingContext.Provider value={value}>
			<Container>
				<div className='Landing'>{children}</div>
			</Container>
		</LandingContext.Provider>
	);
});
export default Landing;
