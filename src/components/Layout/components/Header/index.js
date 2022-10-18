import HeadlesTippy from '@tippyjs/react/headless'; // different import path!
import Tippy from '@tippyjs/react'; // different import path!
import 'tippy.js/dist/tippy.css';

import { useEffect, useState } from 'react';
import {
    faCircleQuestion,
    faCircleXmark,
    faCoins,
    faEllipsisVertical,
    faGear,
    faGlobe,
    faKeyboard,
    faMagnifyingGlass,
    faPlus,
    faSpinner,
    faCircleUser,
    faSignOut,
} from '@fortawesome/free-solid-svg-icons';

import { faPaperPlane } from '@fortawesome/free-regular-svg-icons';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Layout/AccountItem';
import Menu from '~/components/Popper/Menu';
import MenuItem from '~/components/Popper/Menu/MenuItem';

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
    const [searchResults, setSearchResults] = useState([]);
    const currentUser = true;

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([]);
        }, 0);
    });

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
                    <img src={images.logo} alt="Tiktok-logo" />
                </div>
                <HeadlesTippy
                    visible={searchResults.length > 0}
                    interactive
                    render={(attrs) => (
                        <div className={cx('search-results')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accouts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search accounts and videos" spellCheck={false} />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlesTippy>

                <div className={cx('actions')}>
                    <Tippy content="Upload video">
                        <Button normal>
                            <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                            Upload
                        </Button>
                    </Tippy>

                    {currentUser ? (
                        <Tippy delay={[0, 200]} content="Message">
                            <button>
                                <FontAwesomeIcon className={cx('action-btn')} icon={faPaperPlane} />
                            </button>
                        </Tippy>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? userMenu : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <img
                                className={cx('user-avatar')}
                                src="https://scontent.fhan15-1.fna.fbcdn.net/v/t39.30808-6/311290426_663927828422947_387417337261370735_n.jpg?stp=cp6_dst-jpg&_nc_cat=1&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=7w-HUv1SXHQAX-wzwUL&_nc_ht=scontent.fhan15-1.fna&oh=00_AT_SrZZavmJdrYzbdHxlj1i35wRkleKxigC8cKOBqxUeaQ&oe=634C85E6"
                                alt="Sang"
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
