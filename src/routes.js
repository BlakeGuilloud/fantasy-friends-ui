import App from './App';
import { Articles, Contact, Home, Rankings } from './components';

const routes = {
  path: '/',
  component: App,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '/articles', component: Articles },
    { path: '/rankings', component: Rankings },
    { path: '/contact', component: Contact },
  ],
}

export default routes;
