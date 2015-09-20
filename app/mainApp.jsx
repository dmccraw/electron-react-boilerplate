import 'babel-core/polyfill';

import React from 'react';
import Root from './containers/Root';

React.render(
  <Root />,
  document.getElementById('react-root')
);


// import thunkMiddleware from 'redux-thunk';
// import loggerMiddleware from 'redux-logger';
// // import AppContainer from './containers/AppContainer';
// // import router from './routes/router';
// import debug from './utils/debug';
// import 'bootstrap/dist/css/bootstrap.css';
// import './app.css';
// import { compose, createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import App from './containers/App';
// import todoApp from './reducers';
// import { devTools, persistState } from 'redux-devtools';
// // React components for Redux DevTools
// import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';
// import { fetchPostsIfNeeded } from './actions';
// import rootReducer from './reducers';

// // window.location.hash = '/';

// // router.run(Handler => {
// //   dd('router.run', Handler);
// //   React.render(<Handler />, document.getElementById('react-root'));
// // });


// // var dd = debug('mainApp');

// const createStoreWithMiddleware = applyMiddleware(
//   thunkMiddleware, // lets us dispatch() functions
//   loggerMiddleware // neat middleware that logs actions
// )(createStore);

// const redditStore = createStoreWithMiddleware(rootReducer);

// redditStore.dispatch(fetchPostsIfNeeded('reactjs')).then(
//   () => console.log(store.getState())
// );
// // redditStore.dispatch(selectReddit('reactjs'));
// // redditStore.dispatch(fetchPosts('reactjs')).then(
// //   () => console.log(redditStore.getState())
// // );

// const finalCreateStore = compose(
//   // Enables your middleware
//   applyMiddleware(),
//   devTools(),
//   persistState(window.location.href.match(/[?&]debug_session=([^&]+)\b/))
// )(createStore);

// const store = finalCreateStore(todoApp);
// // const store = createStore(todoApp);

// // console.log(store);

// const rootElement = document.getElementById('react-root');
// React.render(
//   <div> 123
//     <Provider store={store}>
//       {() => <App />}
//     </Provider>
//     <Root />
//     <DebugPanel top right bottom>
//       <DevTools store={store} monitor={LogMonitor} />
//     </DebugPanel>
//   </div>,
//   rootElement
// );
