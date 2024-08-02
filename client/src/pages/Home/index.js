import classNames from 'classnames/bind';

import styles from './Home.module.scss';
import images from 'assets/images';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <img src={images.homeCover} className={cx('image')} />

            <div className={`${cx('content')} grid wide`}>
                <span className={cx('full-width', 'label')}>Buttercream Bakery</span>
                <span className={cx('full-width')}>
                    located in the heart of Saigon, is a paradise for dessert lovers. We specialize in fresh, delicious
                    cakes made from the finest ingredients. At Buttercream Bakey, each cake is not just a dessert but a
                    piece of art, providing an exceptional culinary experience for all your special occasions.
                </span>

                <div className={`row ${cx('panel-row', 'grid-row')}`}>
                    <div className={`col c-4 ${cx('panel-col')}`}>
                        <img className={cx('home-panel')} src={images.homePanels[0]} />
                    </div>
                    <div className={`col c-4 ${cx('panel-col')}`}>
                        <img className={cx('home-panel')} src={images.homePanels[0]} />
                    </div>
                    <div className={`col c-4 ${cx('panel-col')}`}>
                        <img className={cx('home-panel')} src={images.homePanels[0]} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
