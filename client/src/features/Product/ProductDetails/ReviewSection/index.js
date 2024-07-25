import classNames from 'classnames/bind';

import styles from './ReviewSection.module.scss';
import { useState } from 'react';
import Button from 'components/Button';

const cx = classNames.bind(styles);

function ReviewSection() {
    const [tab, setTab] = useState('description');

    return (
        <div className={cx('wrapper')}>
            <span>CAKE INFORMATION</span>
            <Button>More information</Button>
            <Button>Reviews</Button>

            {tab === 'description' && (
                <p>
                    Step into the world of Pinky Cake, where the enchanting essence of fresh strawberries meets the
                    artistry of fine baking. This exquisite dessert captivates with its soft, velvety layers of
                    chocolate cake and luscious strawberry cream. Each bite unfolds a symphony of flavors, from the
                    creamy strawberry mousse that melts on the palate to the rich chocolatey undertones.
                    <br />
                    Crafted to perfection, Pinky Cake is more than just a treat; it's a symbol of sophistication and
                    joyous celebration. Its round, vibrant appearance and meticulous detailing reflect a commitment to
                    both visual elegance and indulgent taste. Whether enjoyed during a special occasion or a moment of
                    personal indulgence, Pinky Cake promises to elevate any experience with its irresistible blend of
                    sweetness and finesse.
                </p>
            )}

            {tab === 'reviews' && <></>}
        </div>
    );
}

export default ReviewSection;
