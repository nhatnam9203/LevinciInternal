import { put, takeLatest, all } from "redux-saga/effects";
import { requestAPI } from '../../utils'

function* getMovie(action) {
    yield put({
        type: 'LOADING_ROOT',
    })
    try {
        const responses = yield requestAPI(action);
        yield put({
            type: 'SET_MOVIE',
            movie: responses.movies
        })
    } catch (error) {
    } finally {
        yield put({
            type: 'STOP_LOADING_ROOT',
        })
    }
}
export default function* dataLocal() {
    yield all([
        takeLatest('GET_MOVIE', getMovie),
    ])
}