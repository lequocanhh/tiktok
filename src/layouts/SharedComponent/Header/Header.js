import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPlus,
  faEllipsisVertical,
  faEarthOceania,
  faCoins,
  faGear,
  faUser,
  faCircleQuestion,
  faKeyboard,
  faSignOut,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import config from '~/config/';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import Image from '~/component/Image';
import { InboxIcon, MessageIcon } from '~/component/Icons';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: faEarthOceania,
    title: 'English',
    children: {
      title: 'Language',
      data: [
        {
          code: 'en',
          title: 'English',
        },
        {
          code: 'vi',
          title: 'Tiếng Việt',
        },
      ],
    },
  },
  {
    icon: faCircleQuestion,
    title: 'Feeadback and help',
    to: '/feedback',
  },
  {
    icon: faKeyboard,
    title: 'Keyboard shortcuts',
  },
];

function Header() {
  const handleChangeMenu = (MenuItem) => {
    console.log(MenuItem);
  };

  const currentUser = false;

  const userMenu = [
    {
      icon: faUser,
      title: 'View profile',
      to: '/qa',
    },
    {
      icon: faCoins,
      title: 'Get coins',
      to: '/coin',
    },
    {
      icon: faGear,
      title: 'Settings',
      to: '/setting',
    },
    ...MENU_ITEMS,
    {
      icon: faSignOut,
      title: 'Log out',
      to: '/logout',
      separate: true,
    },
  ];

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <Link to={config.routes.home} className={cx('logo')}>
          <img src={images.logo} alt="Tiktok logo" />
        </Link>
        <Search />

        <div className={cx('action')}>
          <Button text icon={faPlus}>
            Upload
          </Button>
          {currentUser ? (
            <>
              <Tippy content="Messages" placement="bottom">
                <button className={cx('action-btn')}>
                  <MessageIcon width="2.6rem" height="2.6rem" />
                </button>
              </Tippy>
              <Tippy content="Inbox" placement="bottom">
                <button className={cx('action-btn')}>
                  <div className={cx('badge')}>13</div>
                  <InboxIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleChangeMenu}>
            {currentUser ? (
              <Image
                src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/3a88c702f5c75f4dbb8a568002f7e1a~c5_100x100.jpeg?x-expires=1666504800&x-signature=vnXz3wqM6K29w9E%2BSuFoYUbqkyo%3D"
                className={cx('user-avatar')}
                alt="Quoc Anh"
                bkfallback="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/0696e306a238d94a3595a7bb92d03d6d~c5_100x100.jpeg?x-expires=1666548000&x-signature=UX0LP%2F1Wc6tb0W0Z0jSbbihUqMY%3D"
              />
            ) : (
              <button className={cx('more-btn')}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}

export default Header;
