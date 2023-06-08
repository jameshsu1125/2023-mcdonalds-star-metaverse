import { createContext } from 'react';

export const QuestionList = [
	{
		question: ['今天事情好多好忙QQ', '決定吃麥當勞來撫慰自己！', '你準備從座位上站起來...'],
		answers: [
			{ type: 'E', text: '問有沒有其他人想吃' },
			{ type: 'I', text: '拿起錢包，打算自己去' },
		],
		emoji: 'q0',
	},
	{
		question: ['這時，突然有人提議要一起訂下午茶', '但滿腦只有麥當勞的你', '會怎麼做呢？'],
		answers: [
			{ type: 'F', text: '委婉拒絕，搖頭說PASS' },
			{ type: 'T', text: '直接表明自己要吃麥當勞' },
		],
		emoji: 'q1',
	},
	{
		question: ['在麥當勞櫃檯排隊的你', '發現有一款剛上市的新餐點', '看起來很不錯...'],
		answers: [
			{ type: 'N', text: '想要嘗試一下新口味' },
			{ type: 'S', text: '還是點自己常吃的吧' },
		],
		emoji: 'q2',
	},
	{
		question: ['輪到你點餐的時候', '聽見身後的小朋友跟媽媽說他真的好餓...'],
		answers: [
			{ type: 'F', text: '沒關係，就讓他們先點吧' },
			{ type: 'T', text: '裝沒聽到，堅持排隊原則' },
		],
		emoji: 'q3',
	},
	{
		question: ['一想到待會有超多事情要處理', '頓時好心累！', '這時，你瞥見麥當勞1+1星級點的組合'],
		answers: [
			{ type: 'N', text: '化悲憤為力量，怒吃一波' },
			{ type: 'S', text: '等下午肚子餓時再來買' },
		],
		emoji: 'q4',
	},
	{
		question: ['你在等待取餐時', '看到一位先生不太會使用自動點餐機', '露出苦惱的樣子...'],
		answers: [
			{ type: 'F', text: '直接走過去幫他一個忙' },
			{ type: 'T', text: '告知店員，請他過去協助' },
		],
		emoji: 'q5',
	},
	{
		question: ['有人突然拍了你的肩膀、熱情地打招呼！', '你轉頭發現是許久不見的國中同學'],
		answers: [
			{ type: 'E', text: '同樣熱情回應「哇好久不見」' },
			{ type: 'I', text: '實在太久沒見，覺得小彆扭' },
		],
		emoji: 'q6',
	},
	{
		question: ['領到餐點後，你在回程時', '發現前方路口發生車禍、導致交通癱瘓'],
		answers: [
			{ type: 'S', text: '打開手機地圖看替代路線' },
			{ type: 'N', text: '依靠方向感、先繞道再說' },
		],
		emoji: 'q7',
	},
	{
		question: [
			'你回到座位後，打開麥當勞紙袋',
			'美味香氣原地爆發！',
			'許多朋友抵抗不住食物香味、紛紛轉頭看你...',
		],
		answers: [
			{ type: 'I', text: '突然被關注，有點不好意思' },
			{ type: 'E', text: '不在乎別人目光，爽吃一波' },
		],
		emoji: 'q8',
	},
	{
		question: ['測驗結束，請輸入你的名字'],
		answers: [{ type: 'input', text: '請輸入1-8個字暱稱' }],
	},
];

export const QuestionAnswers = [0, 0, 0, 0, 0, 0, 0, 0, 0];
export const QuestionDirect = { next: 0, prev: 1, end: 2 };
export const QuestionSteps = { unset: 0, fadeIn: 1, questionOut: 2, questionIn: 3 };
export const QuestionState = {
	index: 0,
	steps: QuestionSteps.unset,
	answers: QuestionAnswers,
	direct: QuestionDirect.next,
	userName: '',
};
export const QuestionContext = createContext(QuestionState);
