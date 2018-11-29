import App from '../App';
import Page2 from '../containers/Page2';
import Page3 from '../containers/Page3';

export default [
    {
        path: '/',
        exact: true,
        component: App
    },

    {
        path: '/page2',
        exact: false,
        component: Page2
    },

    {
        path: '/page3',
        exact: false,
        component: Page3
    }
]