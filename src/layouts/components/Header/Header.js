import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';

import {
    faCircleQuestion,
    faCoins,
    faEllipsisVertical,
    faGear,
    faGlobe,
    faKeyboard,
    faPlus,
    faCircleUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import config from '~/config';
import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faGlobe} />,
        title: 'English',

        children: {
            title: 'Languages',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

function Header() {
    const currentUser = true;

    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;

            default:
        }
    };

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faCircleUser} />,
            title: 'View Profile',
            to: '/@mino_van_sang',
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coin',
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings',
        },

        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={config.routes.home} className={cx('logo-link')}>
                        <img src={images.logo} alt="Tiktok-logo" />
                    </Link>
                </div>

                <Search />

                <div className={cx('actions')}>
                    <Tippy content="Upload video">
                        <Button normal>
                            <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                            Upload
                        </Button>
                    </Tippy>

                    {currentUser ? (
                        <>
                            <Tippy delay={[0, 0]} content="Message" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>

                            <Tippy delay={[0, 20]} content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>12</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/311290426_663927828422947_387417337261370735_n.jpg?stp=cp6_dst-jpg&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7w-HUv1SXHQAX-wzwUL&_nc_ht=scontent.fhan15-1.fna&oh=00_AT_SrZZavmJdrYzbdHxlj1i35wRkleKxigC8cKOBqxUeaQ&oe=634C85E6"
                                alt="Sang"
                                fallback="https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.6435-9/60903452_388892058385421_266950539776884736_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=174925&_nc_ohc=NAe7c4_OF6wAX8MjCJR&_nc_ht=scontent.fsgn5-2.fna&oh=00_AT9X_41HxmfEpM8GeieAQaElgh8KIdYSbDCTI_vkeAr3Sw&oe=6376DB73"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}></FontAwesomeIcon>
                            </button>
                        )}
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
