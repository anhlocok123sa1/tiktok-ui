import Search from '../Search';
import 'tippy.js/dist/tippy.css';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import routesConfig from '@/config/routes';
import Tippy from '@tippyjs/react';
import Image from '@/components/Image';
import Button from '@/components/Button';
import Menu from '@/components/Popper/Menu';
import { faPlus, faEllipsisVertical } from '@fortawesome/free-solid-svg-icons';
import {
    CoinIcon,
    CreationIcon,
    DownloadIcon,
    FavoritesIcon,
    FeedbackIcon,
    InboxIcon,
    KeyboardIcon,
    LanguagesIcon,
    LogoIcon,
    LogoutIcon,
    MessageIcon,
    SettingIcon,
    UserIcon,
    ViewmodeIcon,
} from '@/components/Icons';

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <CreationIcon />,
        title: 'LIVE Creator Hub',
        to: '/live',
    },
    {
        icon: <LanguagesIcon />,
        title: 'English',
        children: {
            title: 'Language',
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
        icon: <FeedbackIcon />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <KeyboardIcon />,
        title: 'Keyboard shortcuts',
    },
    {
        icon: <ViewmodeIcon />,
        title: 'Dark mode',
    },
];

function Header() {
    const currentUser = true;

    // Handle logic
    const handleMenuChange = (menuItem) => {
        switch (menuItem.type) {
            case 'language':
                break;
            default:
        }
    };

    const USER_MENU = [
        {
            icon: <UserIcon />,
            title: 'View profile',
            to: '/@loc.shyn102',
        },
        {
            icon: <FavoritesIcon />,
            title: 'Favorites',
            to: '/favorites',
        },
        {
            icon: <CoinIcon />,
            title: 'Get Coins',
            to: '/coin',
        },
        {
            icon: <SettingIcon />,
            title: 'Settings',
            to: '/setting',
        },
        ...MENU_ITEMS,
        {
            icon: <LogoutIcon />,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ];

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={routesConfig.home} className={cx('logo')}>
                    <LogoIcon />
                </Link>

                {/* Search */}
                <Search />

                <div className={cx('actions')}>
                    <Button text leftIcon={<FontAwesomeIcon icon={faPlus} />}>
                        Upload
                    </Button>
                    <button className={cx('download-btn')}>
                        <DownloadIcon />
                    </button>
                    {currentUser ? (
                        <>
                            <Tippy content="Messages" placement="bottom" delay={100}>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button>
                            </Tippy>
                            <Tippy content="Inbox" placement="bottom">
                                <button className={cx('action-btn')}>
                                    <InboxIcon />
                                    <span className={cx('badge')}>19</span>
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            <Button primary>Log in</Button>
                        </>
                    )}
                    <Menu items={currentUser ? USER_MENU : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image
                                className={cx('user-avatar')}
                                alt="Loc Le"
                                src="https://p16-sign-sg.tiktokcdn.com/aweme/720x720/tiktok-obj/6972005358390738946.jpeg?x-expires=1697454000&x-signature=%2BdB9FHIS1j6riwvACLi0051b6C8%3D"
                                fallback="https://yt3.ggpht.com/UsflU74uvka_3sejOu3LUGwzOhHJV0eIYoWcvOfkOre_c12uIN4ys-QqRlAkbusEmbZjTA-b=s48-c-k-c0x00ffffff-no-rj"
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
