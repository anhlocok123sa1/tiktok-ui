import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import Tippy from '@tippyjs/react/headless';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleXmark,
    faSpinner,
    faMagnifyingGlass,
    faPlus,
    faEllipsisVertical,
} from '@fortawesome/free-solid-svg-icons';

import Button from '@/components/Button';
import images from '@/assets/images';
import styles from './Header.module.scss';
import { Wrapper as PopperWrapper } from '@/components/Popper';
import AccoutItem from '@/components/AccountItem';
import Menu from '@/components/Popper/Menu';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <img src={images.creation} alt="creation" />,
        title: 'LIVE Creator Hub',
        to: '/live',
    },
    {
        icon: <img src={images.languages} alt="languages" />,
        title: 'English',
    },
    {
        icon: <img src={images.feedback} alt="feedback" />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <img src={images.keyboard} alt="keyboard" />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <img src={images.viewmode} alt="viewmode" />,
        title: 'Dark mode',
    },
];

function Header() {
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        });
    }, []);

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok logo" />
                </div>
                <Tippy
                    interactive
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Tài khoản</h4>
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                                <AccoutItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input placeholder="Search" spellCheck={false} />

                        <div className={cx('action-search')}>
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                        </div>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </Tippy>
                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <Button primary>Log in</Button>
                    <Menu items={MENU_ITEMS}>
                        <button className={cx('more-btn')}>
                            <FontAwesomeIcon icon={faEllipsisVertical} />
                        </button>
                    </Menu>
                </div>
            </div>
        </header>
    );
}

export default Header;
