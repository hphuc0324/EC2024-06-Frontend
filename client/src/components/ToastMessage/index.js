import classNames from 'classnames/bind';
import styles from './ToastMessage.module.scss';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import images from 'assets/images';

const cx = classNames.bind(styles);

const CustomToast = ({ title, message, image }) => (
    <div className={cx('wrapper')}>
        {image && <img src={images.homePanels[0]} className={cx('toast-image')} />}
        <div className={cx('toast-content')}>
            <span className={cx('toast-title')}>{title}</span>
            <span className={cx('toast-message')}>{message}</span>
        </div>
    </div>
);

export const showToast = (title, message, image = undefined) => {
    toast(<CustomToast title={title} message={message} image={image} />, {
        autoClose: 1000,
        hideProgressBar: true,
    });
};
