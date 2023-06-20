import Click from 'lesca-click';
import Landscape from 'lesca-react-landscape';
import QueryString from 'lesca-url-parameters';
import { lazy, memo, Suspense, useContext, useMemo, useReducer } from 'react';
import { createRoot } from 'react-dom/client';
import LoadingProcess from '../components/loadingProcess';
import Modal from '../components/modal';
import { Context, initialState, reducer } from '../settings/config';
import { ACTION, PAGE } from '../settings/constant';
import '../settings/global.less';

Click.install();

let dataLayerIndex = 0;

if (QueryString.get('debug') === 'true') {
	setInterval(() => {
		const { dataLayer } = window;
		if (dataLayerIndex === dataLayer.length) return;
		dataLayerIndex = dataLayer.length;

		const lastPush = dataLayer[dataLayer.length - 1];
		delete lastPush['gtm.uniqueEventId'];
		console.table(lastPush);
	}, 30);
}

const Pages = memo(() => {
	const [context] = useContext(Context);
	const page = context[ACTION.page];

	const Page = useMemo(() => {
		const [target] = Object.values(PAGE).filter((data) => data === page);
		const Element = lazy(() => import(`.${target}/`));
		if (target) {
			return (
				<Suspense fallback=''>
					<Element>static pages</Element>
				</Suspense>
			);
		}
		return '';
	}, [page]);

	return Page;
});

const App = () => {
	const [state, setState] = useReducer(reducer, initialState);
	const value = useMemo(() => [state, setState], [state]);
	return (
		<div className='App'>
			<Context.Provider {...{ value }}>
				<Pages />
				{state[ACTION.LoadingProcess].enabled && <LoadingProcess />}
				{state[ACTION.modal].enabled && <Modal />}
			</Context.Provider>
			<Landscape style={{ backgroundColor: '#d9447e' }} />
		</div>
	);
};

createRoot(document.getElementById('app')).render(<App />);
