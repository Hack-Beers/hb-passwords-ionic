import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { AccountPage } from '../pages/account/account';

export const Router = [
        { title: 'Home', component: HomePage },
        { title: 'My credentials', component: ListPage },
        { title: 'My account', component: AccountPage}
    ];