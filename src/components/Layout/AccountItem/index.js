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
                src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/311290426_663927828422947_387417337261370735_n.jpg?stp=cp6_dst-jpg&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7w-HUv1SXHQAX-wzwUL&_nc_ht=scontent.fhan15-1.fna&oh=00_AT_SrZZavmJdrYzbdHxlj1i35wRkleKxigC8cKOBqxUeaQ&oe=634C85E6"
                alt="Sang"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>realllllsangmino</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}></FontAwesomeIcon>
                </h4>
                <span className={cx('username')}>mino_van_sang</span>
            </div>
        </div>
    );
}

export default AccountItem;
