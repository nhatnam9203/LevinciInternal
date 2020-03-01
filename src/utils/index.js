import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');
const [ shortDimension, longDimension ] = width < height ? [ width, height ] : [ height, width ];

const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

export const scale = (size) => shortDimension / guidelineBaseWidth * size;
export const verticalScale = (size) => longDimension / guidelineBaseHeight * size;
export const moderateScale = (size, factor = 0.25) => size + (scale(size) - size) * factor;

export const scaleWidth = (size) => wp(size);
export const scaleHeight = (size) => hp(size);

export const GlobalStyle = {
	Normal: 'Roboto',
	Weight: 'Roboto-Bold',
	Regular: 'Roboto-Regular',
	Italic: 'Roboto-Italic',
	Medium: 'Roboto_medium'
};

export const slop = {
	top: 20,
	left: 20,
	right: 20,
	bottom: 20
}

const API = {
    BASE_API: "https://facebook.github.io/react-native/",
}

export const _codePushKeyIOS = 'XXQ_Edcd1Latusk-Xc5bTBYB4cqxPi4iyr4Pd';
export const _codePushKeyAndroid = 'm2ainoPjwz4KbMKOvu9yVfxVVXkwd61J164d5';

export const PromiseAction = async (action, data) => {
	return await new Promise((resolve, rejects) => {
		action({ data, resolve, rejects });
	});
};

function fetchWithTimeout(url, options, timeout = 10000) {
	return Promise.race([
		fetch(url, options),
		new Promise((_, reject) => setTimeout(() => reject({ message: 'request timeout' }), timeout))
	]);
}

export const requestAPI = async (action, headers = {}) => {
	let url = API.BASE_API + action.route;
	let method = action.method || 'GET';
	let request = {
		method,
		headers: {
			...headers,
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	};
	if (action.token) {
		request.headers['Authorization'] = 'Bearer ' + action.token;
	}
	if (method !== 'GET' && action.body) {
		request.headers['body'] = JSON.stringify(action.body);
	}
	try {
		let response = await fetchWithTimeout(url, request, 15000);
		const codeNumber = response.status;
		if (codeNumber === 401) {
			return { codeNumber: codeNumber };
		}
		const data = await response.json();
		return { ...data };
	} catch (error) {
		throw error;
	}
};

function timeout(ms, promise) {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			reject(new Error('timeout'));
		}, ms);
		promise.then(resolve, reject);
	});
}

export const codePushKey = `_E8ZDarrky4N-iYizDaICX7gXPd9gWfEHm2tb`;

export function api(path, params, method, token) {
	let options;
	options = {
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
			// Authorization: `Bearer ${token}`,
			...(token && { Authorization: `Bearer ${token}` })
		},
		method: method,
		...(params && { body: JSON.stringify(params) })
	};

	return fetch(path, options)
		.then((resp) => {
			if (resp.status === 200) return resp.json();
		})
		.then((json) => json)
		.catch((error) => {
			alert(error);
			return error;
		});
}


export const isIphoneX = () => {
	const { height, width } = Dimensions.get('window');
	return Platform.OS === 'ios' && (height === 812 || width === 812);
};

export const validYear = (year) => {
	let rex = /^[12][0-9]{3}$/;
	return rex.test(year);
};

export const validateEmail = (email) => {
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(email).toLowerCase().trim());
};

