import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '@/config';
import Menu, { MenuItem } from './Menu';
import {
    CompassIcon,
    CompassIconActive,
    HomeIcon,
    HomeIconActive,
    LiveIcon,
    LiveIconActive,
    UserGroupIcon,
    UserGroupIconActive,
} from '@/components/Icons';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} iconActive={<HomeIconActive />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    iconActive={<UserGroupIconActive />}
                />
                <MenuItem
                    title="Explore"
                    to={config.routes.explore}
                    icon={<CompassIcon />}
                    iconActive={<CompassIconActive />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.creationlive}
                    icon={<LiveIcon />}
                    iconActive={<LiveIconActive />}
                />
            </Menu>
        </aside>
    );
}

export default Sidebar;
