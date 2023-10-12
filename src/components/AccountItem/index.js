import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './AccoutItem.module.scss';
import Image from '@/components/Image';

const cx = classNames.bind(styles);

function AccoutItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/d7d2aa84b494e467d96d0ba783e47f0d~c5_300x300.webp?x-expires=1696957200&x-signature=%2FZ9A7t2FmpPunyIFR0yCK4GVx6Y%3D"
                alt="Hoaa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>hoa.hanassii</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>Đào Lê Phương Hoa</span>
            </div>
        </div>
    );
}

export default AccoutItem;
