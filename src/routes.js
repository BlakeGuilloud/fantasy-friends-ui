import App from './App';
import { Articles, Contact, Home } from './components';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/articles', component: Articles },
    { path: '/contact', component: Contact },
  ],
}

export default routes;
