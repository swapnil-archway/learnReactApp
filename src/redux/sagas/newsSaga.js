import { put, takeLatest } from "redux-saga/effects";

import {
  newsRequest,
  newsSuccess,
  newsNextPageSuccess,
  newsError,
} from "../slices";
import { getCardList } from "../../services/api";

function* getNews(action) {
  let query,
    searchType = "",
    setLoadingMore = null;
  if (action.payload) {
    query = action.payload.query;
    searchType = action.payload.searchType;
    setLoadingMore = action.payload.setLoadingMore;
  }
  try {
    const response = yield getCardList(query);
    if (searchType === "next_page") {
      yield put(newsNextPageSuccess(response));
    } else {
      yield put(newsSuccess(response));
    }
    setLoadingMore(false);
  } catch (err) {
    yield put(newsError(err));
  }
}

export function* newsSaga() {
  yield takeLatest(newsRequest.type, getNews);
}
