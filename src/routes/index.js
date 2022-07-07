//Layout
import { HeaderOnly } from '~/component/Layout';

import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import UploadVideo from '~/pages/UploadVideo';

//public
const publicRoutes = [
  { path: '/', component: Home },
  { path: '/following', component: Following },
  { path: '/profile', component: Profile },
  { path: '/upload', component: UploadVideo, layout: HeaderOnly },
];

//private
const privateRoute = [];

export { publicRoutes, privateRoute };
