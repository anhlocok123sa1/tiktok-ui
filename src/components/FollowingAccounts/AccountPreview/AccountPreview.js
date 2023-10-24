import styles from './AccountPreview.module.scss';
import classNames from 'classnames/bind';
import Image from '@/components/Image';
import Button from '@/components/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountPreview() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('header')}>
                <Image
                    className={cx('avatar')}
                    src={
                        'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/0127e909021ae75fa135ba90ff034519.jpeg?x-expires=1698321600&x-signature=A4RTVG599f%2F%2BeSdM%2B0H3dUo8gWg%3D'
                    }
                    // alt={data.full_name}
                />
                <Button primary>Follow</Button>
            </div>
            <div className={cx('body')}>
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
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>8.2M</strong>
                    <span className={cx('label')}>Followers</span>
                    <strong className={cx('value')}>16.2M</strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

export default AccountPreview;
