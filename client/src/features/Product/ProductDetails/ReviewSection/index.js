import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';

import styles from './ReviewSection.module.scss';

import Button from 'components/Button';
import images from 'assets/images';

const cx = classNames.bind(styles);

ReviewSection.propTypes = {
    reviews: PropTypes.array.isRequired,
    reviewsCount: PropTypes.number.isRequired,
    onReviewPageChange: PropTypes.func.isRequired,
};

function ReviewSection(props) {
    const { reviews, reviewsCount, onReviewPageChange } = props;

    const [tab, setTab] = useState('description');

    const handleReviewPageChange = (e, value) => {
        onReviewPageChange(value);
    };

    return (
        <div className={cx('wrapper')}>
            <span className={cx('section-title')}>CAKE INFORMATION</span>
            <Button
                classNames={cx('choice-btn', { active: tab === 'description' })}
                callback={() => setTab('description')}
            >
                More information
            </Button>
            <Button classNames={cx('choice-btn', { active: tab === 'reviews' })} callback={() => setTab('reviews')}>
                Reviews
            </Button>

            {tab === 'description' && (
                <div className={cx('description-block')}>
                    <p className={cx('description-content')}>
                        Step into the world of Pinky Cake, where the enchanting essence of fresh strawberries meets the
                        artistry of fine baking. This exquisite dessert captivates with its soft, velvety layers of
                        chocolate cake and luscious strawberry cream. Each bite unfolds a symphony of flavors, from the
                        creamy strawberry mousse that melts on the palate to the rich chocolatey undertones.
                        <br />
                        Crafted to perfection, Pinky Cake is more than just a treat; it's a symbol of sophistication and
                        joyous celebration. Its round, vibrant appearance and meticulous detailing reflect a commitment
                        to both visual elegance and indulgent taste. Whether enjoyed during a special occasion or a
                        moment of personal indulgence, Pinky Cake promises to elevate any experience with its
                        irresistible blend of sweetness and finesse.
                    </p>
                    <div className={`grid ${cx('images-content')}`}>
                        <div className="row">
                            <img className="col c-4" src={images.homePanels[0]} />
                            <img className="col c-4" src={images.homePanels[0]} />
                            <img className="col c-4" src={images.homePanels[0]} />
                        </div>
                    </div>
                </div>
            )}

            {tab === 'reviews' && (
                <div className={cx('review-block')}>
                    {reviews.map((review, index) => (
                        <div key={index} className={cx('review')}>
                            <div className={cx('review-info')}>
                                <span className={cx('review-avatar')}>{review.name || 'A'}</span>
                                <span className={cx('review-mail')}>{review.email || 'somemaiil@gmail.com'}</span>
                                <span className={cx('review-date')}>Posted on {review.date || '05/05/2024'}</span>
                            </div>
                            <span className={cx('review-content')}>
                                Not only a delicious dessert, Pinky Cake also brings immense satisfaction with every
                                bite.
                            </span>
                        </div>
                    ))}

                    <Pagination
                        sx={{
                            '& .MuiButtonBase-root.MuiPaginationItem-root': {
                                fontSize: '1.3rem',
                            },
                        }}
                        className={cx('pagination-bar')}
                        count={reviewsCount}
                        size="large"
                        onChange={handleReviewPageChange}
                    />
                </div>
            )}
        </div>
    );
}

export default ReviewSection;
