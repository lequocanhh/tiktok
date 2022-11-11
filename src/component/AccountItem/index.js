import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://kenh14cdn.com/203336854389633024/2021/10/25/anh-chup-man-hinh-2021-10-25-luc-10230-ch-1635142447098276842096.png"
        alt="QA"
      />
      <div className={cx('info')}>
        <h4 className={cx('name')}>
          <span>Quocc.anh</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </h4>

        <span className={cx('username')}>Le Quoc Anh</span>
      </div>
    </div>
  );
}

export default AccountItem;
