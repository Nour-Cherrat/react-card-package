import React from 'react';
import Card from './Card';
import "./App.css";

const App = () => {
    const cards = [
        { name: 'Card 1',
            price: '$10',
            description: 'Description for Card 1',
            image: 'https://underground-academy.com/wp-content/uploads/2023/08/pngwing.com-69.png',
            ratingColor: 'red',
            ratingSize: '32px',
            ratingShape: '&#9825;',
            initialRating: 3,
        },
        { name: 'Card 2',
            price: '$20',
            description: 'Description for Card 2',
            image: 'https://underground-academy.com/wp-content/uploads/2023/08/pngwing.com-69.png'
        },
    ];

    return (
        <div>
            <h1>Card Display</h1>
            <div className="card-container">
                {cards.map((card, index) => (
                    <Card
                        key={index}
                        name={card.name}
                        price={card.price}
                        description={card.description}
                        image={card.image}
                        ratingColor={card.ratingColor}
                        ratingSize={card.ratingSize}
                        ratingShape={card.ratingShape}
                        initialRating={card.initialRating}
                    />
                ))}
            </div>
        </div>
    );
};

export default App;
