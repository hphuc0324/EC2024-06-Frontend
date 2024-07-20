import classNames from 'classnames/bind';
import styles from './About.module.scss';
import images from 'assets/images';

const cx = classNames.bind(styles);

function About() {
    return (
        <div className={cx('wrapper')}>
            <span className={cx('page-header')}>About us</span>
            <div className={cx('content')}>
                <div className={cx('content-left')}>
                    <span className={cx('content-header')}>Welcome to Buttercream Bakery</span>
                    <p className={cx('content-text')}>
                        Established in 2024, Buttercream Bakery has swiftly become Ho Chi Minh City's premier
                        destination for exceptional birthday cakes. We specialize in creating cakes that are not only
                        delectable but also visually stunning, meticulously crafted using the finest ingredients and
                        meticulous attention to detail.
                    </p>
                    <p className={cx('content-text')}>
                        Each cake at Buttercream Bakery is a masterpiece, carefully designed to complement your taste
                        preferences and enhance your special occasion. Whether you prefer timeless flavors like rich
                        chocolate and smooth vanilla or prefer a bespoke creation adorned with fresh fruits and
                        intricate decorations, our cakes are crafted to ensure every birthday celebration is
                        unforgettable.
                    </p>
                </div>
                <img src={images.aboutPanel} className={cx('about-panel')} alt="about panel" />
            </div>
        </div>
    );
}

export default About;
