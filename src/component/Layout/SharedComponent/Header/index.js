import { useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleXmark,
  faCircleNotch,
  faMagnifyingGlass,
  faPlus,
  faEllipsisVertical,
  faEarthOceania,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/component/Popper';
import AccountItem from '~/component/AccountItem';
import Button from '~/component/Button';
import Menu from '~/component/Popper/Menu';
import { faCircleQuestion, faKeyboard } from '@fortawesome/free-regular-svg-icons';

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
  const [searchResult, setSearchResult] = useState([]);
  // setTimeout(() => {
  //   setSearchResult([]);
  // }, 3000);

  const handleChangeMenu = (MenuItem) => {
    console.log(MenuItem);
  };

  const currentUser = true;

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        {/* Logo */}
        <div className={cx('logo')}>
          <img src={images.logo} alt="Tiktok logo" />
        </div>
        {/*  Search */}
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx('search-title')}>Accounts</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx('search')}>
            <input placeholder="Search accounts and videos" spellCheck={false} />
            <button className={cx('clear-icon')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading-icon')} icon={faCircleNotch} />

            <button className={cx('search-btn')}>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        <div className={cx('action')}>
          {currentUser ? (
            <>
              {/* <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faCloudArrowUp} />
              </button>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </button>
              <button className={cx('action-btn')}>
                <FontAwesomeIcon icon={faMessage} />
              </button> */}
            </>
          ) : (
            <>
              <Button text icon={faPlus}>
                Upload
              </Button>
              <Button primary>Log in</Button>
            </>
          )}
          <Menu items={MENU_ITEMS} onChange={handleChangeMenu}>
            {currentUser ? (
              <img
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/aa1f830afcbe8f07db1653638f9b3dcd.jpeg?x-expires=1661684400&x-signature=OAAhizWro00gUNuKLBzSwYDuc6M%3D"
                className={cx('user-avatar')}
                alt="Quoc Anh"
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
