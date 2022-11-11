import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless';
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/component/Popper';
import MenuItem from './MenuItem';
import HeaderLanguage from './HeaderLanguage';
import styles from './Menu.module.scss';
import { useState } from 'react';

const cx = classNames.bind(styles);

const defaultFn = () => {};

function Menu({ children, items = [], onChange = defaultFn }) {
  const [languageHistory, setLanguageHistory] = useState([{ data: items }]);
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

  const handleBack = () => {
    setLanguageHistory((prev) => prev.slice(0, prev.length - 1));
  };

  const renderResult = (attrs) => (
    <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
      <PopperWrapper className={cx('menu-popper')}>
        {languageHistory.length > 1 && <HeaderLanguage title={current.title} onBack={handleBack} />}
        <div className={cx('menu-scroll')}>{renderItems()}</div>
      </PopperWrapper>
    </div>
  );

  const handleResetToFirstPage = () => {
    setLanguageHistory((prev) => prev.slice(0, 1));
  };

  return (
    <Tippy
      delay={[0, 700]}
      offset={[12, 8]}
      hideOnClick="false"
      interactive
      placement="bottom-end"
      render={renderResult}
      onHide={handleResetToFirstPage}
    >
      {children}
    </Tippy>
  );
}

Menu.propTypes = {
  children: PropTypes.node.isRequired,
  items: PropTypes.array,
  onChange: PropTypes.func,
};

export default Menu;
