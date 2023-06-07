import { memo, useEffect, useRef } from 'react';
import './index.less';
import Rain from './rain';

const DROP_RIBBONS_TIME = 5000;
const DROP_RIBBONS_NUMBER = 5;

const Ribbons = memo(() => {
	const ref = useRef();

	useEffect(() => {
		const createRibbon = () => {
			new Rain({ container: ref.current, count: DROP_RIBBONS_NUMBER });
		};
		createRibbon();
		setInterval(createRibbon, DROP_RIBBONS_TIME);
	}, []);

	return <div ref={ref} className='Ribbons' />;
});
export default Ribbons;
