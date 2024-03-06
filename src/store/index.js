import { createWrapper } from 'next-redux-wrapper';
/*
  { Provider } from 'react-redux';는 서버사이드에서 전역state를 꺼낼 수 없다 
    -> import { createWrapper } from 'next-redux-wrapper';를 사용한다.
*/
//
import { configureStore } from '@reduxjs/toolkit';
// import logger from "redux-logger";
import { createLogger } from 'redux-logger';
// redux-logger: log 에 색을 입혀주거나, 리덕스 동작에 대한 것을 자세하고 편하게 log 에서 확인할 수 있도록 만들어진 리덕스 미들웨어
import reducer from '@/store/modules';

const logger = createLogger();
let middleware = [];
if (process.env.NODE_ENV != 'production') {
  middleware = [...middleware, logger];
} else {
  middleware = [...middleware];
}

// 1. 스토어를 생성하는 makeStore 함수를 정의
const makeStore = () =>
  configureStore({
    // configureStore: store 를 생성
    reducer,// 리듀서 모듈들이 합쳐진 루트 리듀서 
    middleware,
      // redux-toolkit 은 devTools 등의 미들웨어들을 기본적으로 제공 (사용하고 싶은 미들웨어가 있다면 추가로 정의 ex.logger)
      // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger), //미들웨어 추가정의 방법
    devTools: process.env.NODE_ENV != 'production',
  });

// 2. next-redux-wrapper에서 제공하는 createWrapper정의
  // createWrapper: wrapper 생성 & wrapper에 store 바인딩
const wrapper = createWrapper(makeStore, {
  debug: process.env.NODE_ENV != 'production',
});


export default wrapper;
