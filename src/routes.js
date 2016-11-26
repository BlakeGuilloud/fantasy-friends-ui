import App from './App';
import { Home } from './components';
console.log('home', Home);

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  // childRoutes: [
  //   { path: '/test', component: Test },
  // ],
}

export default routes;
