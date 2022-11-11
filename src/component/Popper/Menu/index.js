import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem';
import HeaderLanguage from './languages/HeaderLanguage';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [languageHistory, setLanguageHistory] = useState([{ data: items }]);
  console.log(languageHistory);
  const current = languageHistory[languageHistory.length - 1];

  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setLanguageHistory((prev) => [...prev, item.children]);
            } else {
              onChange(item);
            }
          }}
        />
      );
    });
  };

  return (
    <Tippy
      delay={[0, 700]}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx('menu-popper')}>
            {languageHistory.length > 1 && (
              <HeaderLanguage
                title="Language"
                onBack={() => {
                  setLanguageHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            {renderItems()}
          </PopperWrapper>
        </div>
      )}
      onHide={() => {
        setLanguageHistory((prev) => prev.slice(0, 1));
      }}
    >
      {children}
    </Tippy>
  );
}

export default Menu;
