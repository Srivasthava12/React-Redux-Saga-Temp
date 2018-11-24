import { all } from 'redux-saga/effects';
import ExampleSaga from '../src/components/example/saga'

export default function* IndexSaga() {
	yield all([ExampleSaga()]);
}
