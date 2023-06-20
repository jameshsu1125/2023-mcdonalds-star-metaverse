import QueryString from 'lesca-url-parameters';

export const ACTION = {
	page: '頁面',
	LoadingProcess: '讀取產生中',
	result: '紀錄結果',
	modal: '下載圖',
};

export const PAGE = {
	landing: '/landing',
	question: '/question',
	result: '/result',
};

export const LOADING_PROCESS_TYPE = {
	balls: 'balls',
	bars: 'bars',
	bubbles: 'bubbles',
	cubes: 'cubes',
	cylon: 'cylon',
	spin: 'spin',
	spinningBubbles: 'spinningBubbles',
	spokes: 'spokes',
};

export const LOADING_PROCESS_STATE = {
	enabled: false,
	type: LOADING_PROCESS_TYPE.bubbles,
	body: '讀取中',
};

export const IDs = {
	'1ENT': 'ENT',
	'2ENF': 'ENF',
	'3ESF': 'ESF',
	'4INT': 'INT',
	'5EST': 'EST',
	'6ISF': 'ISF',
	'7IST': 'IST',
	'8INF': 'INF',
};

const QueryID = Object.entries(IDs).filter((item) => item[1] === QueryString.get('id'));
const currentID = QueryID.length > 0 ? QueryID[0][1] : IDs['1ENT'];

const QueryName = QueryString.get('name');
const currentName = QueryName === false ? '' : QueryName;

export const RESULT_STATE = {
	userName: currentName,
	id: currentID,
	mottoIndex: Math.floor(Math.random() * 4),
};

export const MODAL_STATE = {
	enabled: false,
	body: '',
};

export const TRANSITION = {
	unset: 0,
	fadeIn: 1,
	fadeOut: 2,
	fadeInEnd: 3,
	fadeOutEnd: 4,
	loop: 5,
};
