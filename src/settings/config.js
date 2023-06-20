import QueryString from 'lesca-url-parameters';
import { createContext } from 'react';
import { ACTION, LOADING_PROCESS_STATE, MODAL_STATE, PAGE, RESULT_STATE } from './constant';

export const Context = createContext();

export const initialState = {
	[ACTION.page]: QueryString.get('id') ? PAGE.result : PAGE.landing,
	[ACTION.LoadingProcess]: LOADING_PROCESS_STATE,
	[ACTION.result]: RESULT_STATE,
	[ACTION.modal]: MODAL_STATE,
};

export const reducer = (state, action) => {
	if (action.state instanceof Object) {
		let stateStorage = {};
		Object.entries(action.state)
			.map((actionState) => {
				const value = Object.values(ACTION).filter((actionValue) => actionValue === actionState[0]);
				if (value.length > 0) return actionState;
				if (action.type) return [action.type, Object.fromEntries([actionState])];
				return undefined;
			})
			.filter((actionState) => actionState !== undefined)
			.forEach((actionState) => {
				const [key, value] = actionState;
				const prevValue = stateStorage[key];
				if (prevValue) stateStorage = { [key]: { ...prevValue, ...value } };
				else stateStorage = { [key]: { ...state[key], ...value } };
			});
		return { ...state, ...stateStorage };
	}
	if (action.type) return { ...state, [action.type]: action.state };
	return state;
};

export const 網站使用條款URL = 'https://www.mcdonalds.com/tw/zh-tw/terms-and-conditions.html';
export const 隱私權保護聲明URL = 'https://www.mcdonalds.com/tw/zh-tw/privacy-policy.html';
export const 麥當勞官網URL = 'https://www.mcdonalds.com/tw/zh-tw/whats-hot/2023BADeluxe.html';
export const 麥當勞IG = 'https://www.instagram.com/';
