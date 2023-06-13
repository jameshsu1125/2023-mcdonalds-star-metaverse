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
	body: '',
};

export const IDs = {
	'1ENT': 'ENT',
	'2ENF': 'ENF',
	'3ESF': 'ESF',
	'4INT': 'INT',
	'5EST': 'EST',
	'6ISF': 'ISF',
	'7IST': 'IST',
	'8INF': 'INF ',
};

export const RESULT_STATE = {
	userName: '誰誰誰誰誰誰誰誰誰',
	id: IDs['2ENF'],
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
