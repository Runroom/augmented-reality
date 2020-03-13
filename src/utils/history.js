import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
// const isNewLocation = location => {
//   const pathChanged = prevLocation.pathname !== location.pathname;
//   const hashChanged = prevLocation.hash !== location.hash;
//   return pathChanged || hashChanged;
// };
// let prevLocation = {
//   hash: '',
//   pathname: ''
// };

// history.listen(location => {
//   prevLocation = location;
// });

export default history;
