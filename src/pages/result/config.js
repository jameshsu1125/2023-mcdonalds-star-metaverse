import { createContext } from 'react';
import { ENT, ENTDescription, ENTSymbol, ENTButtonBack } from './userContent/theme/ENT';
import Friend0 from './userContent/img/0.jpg';
import Friend1 from './userContent/img/1.jpg';
import Friend2 from './userContent/img/2.jpg';
import Friend3 from './userContent/img/3.jpg';
import Friend4 from './userContent/img/4.jpg';
import Friend5 from './userContent/img/5.jpg';
import Friend6 from './userContent/img/6.jpg';
import Friend7 from './userContent/img/7.jpg';
import { IDs } from '../../settings/constant';
import { ENF, ENFBack, ENFFront, ENFDescription, ENFSymbol } from './userContent/theme/ENF';
import { ESF, ESFBack, ESFDescription, ESFFront, ESFSymbol } from './userContent/theme/ESF';
import { INT, INTSymbol, INTDescription, INTFront, INTBack } from './userContent/theme/INT';
import { EST, ESTBack, ESTDescription, ESTFront, ESTSymbol } from './userContent/theme/EST';
import { ISF, ISFBack, ISFDescription, ISFFront, ISFSymbol } from './userContent/theme/ISF';
import { IST, ISTBack, ISTDescription, ISTFront, ISTSymbol } from './userContent/theme/IST';
import { INF, INFBack, INFDescription, INFFront, INFSymbol } from './userContent/theme/INF';

export const ResultSteps = { unset: 0, combineImage: 1, fadeIn: 2 };
export const ResultState = { steps: ResultSteps.unset };
export const ResultContext = createContext(ResultState);

export const ResultNames = {
	職場星天王: {
		name: '職場星天王',
		image: Friend0,
		ID: IDs['1ENT'],
		characteristic: '水土不服只服自己',
		productName: '麥克雙牛堡',
		useWith: ['麥克雙牛堡', '中杯茶飲'],
		describe:
			'人氣美味強勢回歸！兩片100%純牛肉搭配切達吉事片，夾進全新升級的蓬鬆麵包，再配上一口清爽的無糖綠茶，啊嘶～～～這樣的明星級美味只在1+1星級點！',
	},
	C位娛樂星: {
		name: 'C位娛樂星',
		image: Friend1,
		ID: IDs['2ENF'],
		characteristic: '自帶明星級氣場',
		productName: '麥脆鷄腿',
		useWith: ['麥脆鷄腿(原味/辣味) ', '中杯汽水'],
		describe:
			'吃炸雞，一定要吃麥脆鷄！黃金美味3要點👉🏻嚴選優質鷄腿＋三道裹粉五道翻滾＋先烤後炸高溫鎖汁，酥脆juicy口感搭配勁涼雪碧，讓人欲罷不能！快去麥當勞1+1星級點！',
	},
	人氣星團寵: {
		name: '人氣星團寵',
		image: Friend2,
		ID: IDs['3ESF'],
		characteristic: '連路人都被秒圈粉',
		productName: '麥克鷄塊',
		useWith: ['六塊麥克鷄塊', '中杯汽水'],
		describe:
			'這世界上沒有人不愛麥克鷄塊！嚴選健康優質鷄肉， 調配鷄胸和鷄腿黃金比例，創造外酥內嫩的星級美味，再暢飲冰冰涼涼的可樂～～～讓人快樂升天的好滋味只要89元！',
	},
	星際超模: {
		name: '星際超模',
		image: Friend3,
		ID: IDs['4INT'],
		characteristic: '只靠眼神就把你震懾',
		productName: 'OREO冰炫風',
		useWith: ['OREO冰炫風', '中杯茶飲'],
		describe:
			'美味炫風來襲！經典濃郁的奶香冰淇淋，攪入酥脆的巧克力OREO脆片，再接續暢飲清爽的冰紅茶(檸檬風味)，這樣的雙重沁涼滋味，很！可！以！快到麥當勞1+1星級點，揪省錢！',
	},
	金牌星業務: {
		name: '金牌星業務',
		image: Friend4,
		ID: IDs['5EST'],
		characteristic: '能把聊死的天救活',
		productName: '金黃地瓜條',
		useWith: ['金黃地瓜條', '經典美式咖啡'],
		describe:
			'最夯的美味在這裡！嚴選台農57號地瓜，原顆鮮切、急凍直炸，成就外脆內鬆軟的神級口感，再配上100%阿拉比卡豆烘焙、新鮮研磨的經典美式咖啡～這樣的明星級美味只要89元！',
	},
	話題星天才: {
		name: '話題星天才',
		image: Friend5,
		ID: IDs['6ISF'],
		characteristic: '人生有三聊 尬聊瞎聊亂聊',
		productName: '汽水',
		useWith: ['六塊麥克鷄塊', '中杯汽水'],
		describe:
			'這世界上沒有人不愛麥克鷄塊！嚴選健康優質鷄肉， 調配鷄胸和鷄腿黃金比例，創造外酥內嫩的星級美味，再暢飲冰冰涼涼的可樂～～～讓人快樂升天的好滋味只要89元！',
	},
	科技星貴: {
		name: '科技星貴',
		image: Friend6,
		ID: IDs['7IST'],
		characteristic: '一秒鐘幾十萬上下',
		productName: '經典美式咖啡',
		useWith: ['金黃地瓜條', '經典美式咖啡'],
		describe:
			'最夯的美味在這裡！嚴選台農57號地瓜，原顆鮮切、急凍直炸，成就外脆內鬆軟的神級口感，再配上100%阿拉比卡豆烘焙、新鮮研磨的經典美式咖啡～這樣的明星級美味只要89元！',
	},
	星靈嚮導: {
		name: '星靈嚮導',
		image: Friend7,
		ID: IDs['8INF'],
		characteristic: '一不小心就會走心',
		productName: '茶飲',
		useWith: ['麥克雙牛堡', '中杯茶飲'],
		describe:
			'人氣美味強勢回歸！兩片100%純牛肉搭配切達吉事片，夾進全新升級的蓬鬆麵包，再配上一口清爽的無糖綠茶，啊嘶～～～這樣的明星級美味只在1+1星級點！',
	},
};

export const ResultContentsList = [
	{
		...ResultNames.職場星天王,
		hashtag: ['不自由毋寧死', '衝啊哪次不衝'],
		personality: [
			'平常看似慵懶的你，認真起來嚇死人！',
			'做事速度極快，他爬樓梯你搭電梯',
			'根本就是效率猛獸！',
			'無論軟硬實力都像麥克雙牛堡般豐厚',
			'深受工作夥伴喜愛！',
		],
		motto: [
			'買啦哪次不買！吃啦哪次不吃！',
			'你上輩子救了銀河系，這輩子才能當我朋友',
			'我看你是很嗆喔',
			'直接出來輸贏啊',
		],
		buddies: [ResultNames.星際超模, ResultNames.星靈嚮導],
		troll: ['無法忍受無聊的你', '特別喜歡跟講話有趣的人當朋友', '讓生活充滿「笑死」！'],
		Theme: ENT,
		Symbol: ENTSymbol,
		Description: ENTDescription,
		buttonSymbols: {
			front: '',
			back: <ENTButtonBack />,
		},
	},
	{
		...ResultNames.C位娛樂星,
		hashtag: ['人氣炸子雞', '抱歉偶爾kiang'],
		personality: [
			'善於表達自己的你',
			'是兼具熱情與熱心的Hot Bae',
			'有時活力多到滿出來',
			'常讓全場chill嗨嗨，就像麥脆鷄腿般受歡迎',
			'是朋友圈內的人氣炸子雞！',
		],
		motto: [
			'這個好吃到我沒了',
			'真的假的啦！不～敢～相～信～',
			'（心臟爆擊）（說不出話來）',
			'天啊啊啊啊怎麼會這麼讚！',
		],
		buddies: [ResultNames.話題星天才, ResultNames.星靈嚮導],
		troll: ['個性互補的你們', '適合成為彼此的動力和避風港', '絕對是大寫的合拍！'],
		Theme: ENF,
		Symbol: ENFSymbol,
		Description: ENFDescription,
		buttonSymbols: {
			front: <ENFFront />,
			back: <ENFBack />,
		},
	},
	{
		...ResultNames.人氣星團寵,
		hashtag: ['U質好朋朋', '友善公共財'],
		personality: [
			'真假！不可能這麼大方友善吧？',
			'願意分享麥克鷄塊的你，根本就是天菜星級咖！',
			'高IQ穩定在線×高EQ隨時上線',
			'加上超好揪的隨和性格，怎麼可能不愛你～',
		],
		motto: ['下次約吃飯啊', '所以我說那個沾醬呢？', '小孩子才做選擇，我全都要', '廢到笑'],
		buddies: [ResultNames.話題星天才, ResultNames.科技星貴],
		troll: ['討厭被情勒的你', '最喜歡跟這兩款善良朋朋玩在一起', '輕鬆有趣零負擔！'],
		Theme: ESF,
		Symbol: ESFSymbol,
		Description: ESFDescription,
		buttonSymbols: {
			front: <ESFFront />,
			back: <ESFBack />,
		},
	},
	{
		...ResultNames.星際超模,
		hashtag: ['完美主義者', '心機高玩'],
		personality: [
			'注意看，你這個人太狠了！看似冰炫風般高冷',
			'實際相處後才會發現意外好滋味！',
			'你是行走的情報站，隨時接收新知、分享優惠不藏私',
			'絕對是值得深交的寶藏朋朋！',
		],
		motto: [
			'抱歉了錢錢，我真的需要這個酷東西',
			'我說不要就是不要',
			'我真的是會謝',
			'抱歉但我真的好懶喔',
		],
		buddies: [ResultNames.職場星天王, ResultNames.星靈嚮導],
		troll: ['人品好＋三觀合', '才能進入你的朋友圈', '而這兩款朋朋就是天選之人！'],
		Theme: INT,
		Symbol: INTSymbol,
		Description: INTDescription,
		buttonSymbols: {
			front: <INTFront />,
			back: <INTBack />,
		},
	},
	{
		...ResultNames.金牌星業務,
		hashtag: ['高效率王者', '隱藏版吃貨'],
		personality: [
			'「見人說人話，見鬼說鬼話」是你的專長',
			'加上如金黃地瓜條般條理分明的做事風格',
			'常讓你在關鍵時刻成為全村的希望',
			'穩穩Carry全場！',
		],
		motto: ['沒有什麼事情是吃東西沒辦法解決的', '笑死', '好讚好喜歡', '是在跟我開玩笑嗎？'],
		buddies: [ResultNames.話題星天才, ResultNames.科技星貴],
		troll: ['與他們相處時', '你能放心做自己', '而他們也能包容你', '偶爾撿到槍的壞嘴巴！'],
		Theme: EST,
		Symbol: ESTSymbol,
		Description: ESTDescription,
		buttonSymbols: {
			front: <ESTFront />,
			back: <ESTBack />,
		},
	},
	{
		...ResultNames.話題星天才,
		hashtag: ['擅長閱讀空氣', '社會觀察家'],
		personality: [
			'最怕空氣突然安靜的你',
			'常常為了打破僵局、拋出各種話題',
			'從冰點聊到沸點、炒熱全局，外加各種歪樓撿到槍',
			'像汽水般激發各種意想不到的驚喜！',
		],
		motto: [
			'即使你說1+1=89，你也是對的，不客氣',
			'在哪跌倒，就在哪躺好',
			'歡迎養我',
			'毫無技巧，全是感情',
		],
		buddies: [ResultNames.人氣星團寵, ResultNames.金牌星業務],
		troll: ['湊在一起的你們', '人前正常人後失常', '經常一起搞笑一起嗨！'],
		Theme: ISF,
		Symbol: ISFSymbol,
		Description: ISFDescription,
		buttonSymbols: {
			front: <ISFFront />,
			back: <ISFBack />,
		},
	},
	{
		...ResultNames.科技星貴,
		hashtag: ['理性腦代表', '自願邊緣型人格'],
		personality: [
			'救命！常沉浸在自我小世界的你',
			'人生如美式咖啡般真實純粹，有時好傻好天真！',
			'你做事按照SOP，有急事會ASAP',
			'不拖延×不冒險×不隨便×沒有劈腿的本錢',
		],
		motto: ['叔叔阿姨，我不想努力了', '蛤是喔', '我難道是吃貨嗎？不曉得', '為什麼要這樣逼我'],
		buddies: [ResultNames.人氣星團寵, ResultNames.金牌星業務],
		troll: ['欸說真的', '不是每個人都能了解你的獨特', '遇見了他們就要好好珍惜！'],
		Theme: IST,
		Symbol: ISTSymbol,
		Description: ISTDescription,
		buttonSymbols: {
			front: <ISTFront />,
			back: <ISTBack />,
		},
	},
	{
		...ResultNames.星靈嚮導,
		hashtag: ['腦補比賽NO.1', 'emo小劇場NO.1'],
		personality: [
			'樂觀善良的你，時常對朋友伸出救援小手手',
			'堪稱宇宙級好人好事代表',
			'和你相處的感覺就像喝不膩的茶飲般清爽舒服',
			'能跟你當朋友簡直賺爛了！',
		],
		motto: ['好想要財富自由', '我沒事啦，真的沒事，不用管我', '人生好難，好想躺平', '你開心就好☺️'],
		buddies: [ResultNames.職場星天王, ResultNames.C位娛樂星],
		troll: ['深知彼此喜好的你們', '會分享各種迷因', '一起對著梗圖顆顆笑！'],
		Theme: INF,
		Symbol: INFSymbol,
		Description: INFDescription,
		buttonSymbols: {
			front: <INFFront />,
			back: <INFBack />,
		},
	},
];
