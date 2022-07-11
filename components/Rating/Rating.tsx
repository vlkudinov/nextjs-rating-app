import React, { useEffect, useState } from 'react';
import cn from 'classnames';
import StarIcon from './star.svg';
import styles from './Rating.module.scss';
import { RatingProps } from './Rating.props';

const Rating: React.FC<RatingProps> = ({
  isEditable = false,
  rating,
  setRating,
  ...props
}): JSX.Element => {
  const [ratingArray, setRatingArray] = useState(new Array(5).fill(<></>));

  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  const handleHover = (i: number) => {
    if (isEditable) {
      constructRating(i);
    }
  };

  const handleClick = (i: number) => {
    if (!isEditable || !setRating) {
      return;
    }
    setRating(i);
  };

  const handleKeyDown = (e: React.KeyboardEvent<SVGAElement>, i: number) => {
    if (!isEditable || !setRating || e.code !== 'Space') {
      return;
    }
    setRating(i);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((el: JSX.Element, i: number) => {
      return (
        <span
          onClick={() => handleClick(i + 1)}
          onMouseEnter={() => handleHover(i + 1)}
          onMouseLeave={() => handleHover(rating)}
          className={cn(styles.star, {
            [styles.filled]: i < currentRating,
            [styles.editable]: isEditable,
          })}
          key={i}
        >
          <StarIcon
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={(e) => handleKeyDown(e, i + 1)}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  return (
    <div {...props}>
      {ratingArray.map((el, i) => (
        <span key={i}>{el}</span>
      ))}
    </div>
  );
};

export { Rating };
