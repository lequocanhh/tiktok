import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function Button({
  className,
  disabled,
  to,
  href,
  primary = false,
  outline = false,
  text = false,
  rounded = false,
  small = false,
  large = false,
  children,
  onClick,
  icon,
  ...passProps
}) {
  let Comp = 'button';
  const props = {
    onClick,
    ...passProps,
  };

  //remove event listener
  if (disabled) {
    Object.keys(props).forEach((prop) => {
      if (prop.startsWith('on') && typeof props[prop] === 'function') {
        delete props[prop];
      }
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  const classes = cx('wrapper', {
    [className]: className,
    primary,
    outline,
    text,
    rounded,
    small,
    large,
    disabled,
  });
  return (
    <Comp className={classes} {...props}>
      <div className={cx('title')}>
        {icon && <FontAwesomeIcon className={cx('icon')} icon={icon} />}
        <span>{children}</span>
      </div>
    </Comp>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
  primary: PropTypes.bool,
  outline: PropTypes.bool,
  text: PropTypes.bool,
  rounded: PropTypes.bool,
  small: PropTypes.bool,
  large: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  icon: PropTypes.any,
};

export default Button;
