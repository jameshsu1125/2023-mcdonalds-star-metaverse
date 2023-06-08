export const ACTION = {
	page: '頁面',
	LoadingProcess: '讀取產生中',
	result: '紀錄結果',
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

export const RESULT_STATE = {
	userName: 'James',
	answers: ['E', 'F', 'N', 'F', 'N', 'F', 'E', 'S', 'I'],
};

export const TRANSITION = {
	unset: 0,
	fadeIn: 1,
	fadeOut: 2,
	fadeInEnd: 3,
	fadeOutEnd: 4,
	loop: 5,
};
