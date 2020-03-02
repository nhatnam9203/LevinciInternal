export const test = () => {
	return {
		type: 'TEST'
	};
};

export const toggleBottom = () => {
	return {
		type: 'TOGGLE_BOTTOM'
	};
};

export const setActiveIndex = (index) => {
	return {
		type: 'SET_ACTIVE_INDEX',
		index
	};
};

export const setActiveItem = (item) => {
	return {
		type: 'SET_ACTIVE_ITEM',
		item
	};
};

export const setCurrentItems = (item) => {
	return {
		type: 'SET_CURRENT_ICONS',
		item
	};
};

export const resetTabBottom=()=>{
	return{
		type : 'RESET_TAB_BOTTOM'
	}
}
