import React, { useState } from "react";

const Card = ({ name, price, description, image, rating, ratingColor, ratingSize, ratingShape }) => {
    return (
        <div className="card">
            {image && <img src={image} alt={name} className="card-image" />}
            <h2 className="title">{name}</h2>
            <Rating
                color={ratingColor || "#FFD700"}
                size={ratingSize || "24px"}
                maxRating={5}
                shape={ratingShape || "&#9733;"}
                initialRating={rating}
                rating={rating}
            />
            <p className="desc">{description}</p>
            <p className="price">{price}</p>

        </div>
    );
};

const Rating = ({ color, size, maxRating = 5, shape = "&#9733;" }) => {
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handleStarInteraction = (index, isMouseEnter) => {
        if (isMouseEnter) {
            setHover(index);
        } else {
            setRating(index);
            setHover(0);
        }
    };

    const resetRating = () => {
        setRating(0);
        setHover(0);
    };

    return (
        <div className="rating-container" onDoubleClick={resetRating}>
            <div className="shape-container">
            {[...Array(maxRating)].map((_, index) => {
                const shapeIndex = index + 1;
                const isActive = shapeIndex <= (hover || rating);
                const shapeClassName = isActive ? "on" : "off";

                const shapeStyles = isActive
                    ? {
                        color: color || "#FFD700",
                        fontSize: size || "24px",
                    }
                    : {
                        fontSize: size || "24px",
                    };

                return (
                    <span
                        key={shapeIndex}
                        className={`shape ${shapeClassName}`}
                        onClick={() => handleStarInteraction(shapeIndex, false)}
                        onMouseEnter={() => handleStarInteraction(shapeIndex, true)}
                        style={shapeStyles}
                        dangerouslySetInnerHTML={{ __html: shape }} // Render the chosen shape
                    ></span>
                );
            })}
            </div>
            <p className="rating-score">
                {rating}/{maxRating}
            </p>
        </div>
    );
};

// export default Rating;

export default Card;
