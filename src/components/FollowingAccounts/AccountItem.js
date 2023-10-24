import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './FollowingAccounts.module.scss';
import Image from '../Image';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <Link
            // to={`/@${data.nickname}`}
            className={cx('account-item')}
        >
            <Image
                className={cx('avatar')}
                src={
                    'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0127e909021ae75fa135ba90ff034519.jpeg?x-expires=1698321600&x-signature=A4RTVG599f%2F%2BeSdM%2B0H3dUo8gWg%3D'
                }
                // alt={data.full_name}
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>
                        thixuan16165
                        {/* {data.full_name} */}
                    </span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>
                    Remind TV
                    {/* {data.nickname} */}
                </span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {};

export default AccountItem;
