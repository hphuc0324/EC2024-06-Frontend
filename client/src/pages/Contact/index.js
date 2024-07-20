import classNames from 'classnames/bind';
import styles from './Contact.module.scss';
import images from 'assets/images';
import ContactForm from './ContactForm';

const cx = classNames.bind(styles);

function Contact() {
    const handleSubmit = (values) => {
        console.log(values);
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('page-header')}>Contact us</span>
            <span className={cx('contact-header')}>Please contact us at:</span>
            <p>
                Address:
                <br />
                Phone (+84) 889 722 866
                <br />
                Open hour: 08:00 to 21:00
            </p>
            <img className={cx('contact-panel')} src={images.contactPanel} alt="contact-panel" />

            <ContactForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Contact;
