import Tippy from '@tippyjs/react/headless'; // different import path!
import { useEffect, useState } from 'react';
import { faCircleXmark, faMagnifyingGlass, faPlus, faSignIn, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Button from '~/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import AccountItem from '~/components/Layout/AccountItem';
const cx = classNames.bind(styles);
function Header() {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResults([{ Accout: '@sangmino' }, { Accout: '@sangminho' }]);
        }, 0);
    });
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok-logo" />
                </div>
                <Tippy
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
                </Tippy>
                <div className={cx('actions')}>
                    <Button normal>
                        <FontAwesomeIcon className={cx('plus')} icon={faPlus} />
                        Upload
                    </Button>
                    <Button primary rightIcon={<FontAwesomeIcon className={cx('icon')} icon={faSignIn} />}>
                        Log in
                    </Button>
                </div>
            </div>
        </header>
    );
}

export default Header;
