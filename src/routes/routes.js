//config
import config from '~/config';

//Layout
import { HeaderOnly } from '~/layouts';

//pages
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import UploadVideo from '~/pages/UploadVideo';

//public
const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.profile, component: Profile },
  { path: config.routes.upload, component: UploadVideo, layout: HeaderOnly },
];

//private
const privateRoute = [];

export { publicRoutes, privateRoute };
