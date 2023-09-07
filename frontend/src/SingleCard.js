import React, { useState } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, ListGroupItem } from 'reactstrap';
import Counter from './Counter';

function SingleCard({ card, updateDeckCards }) {

    console.log(card);

    const [side, setSide] = useState(0);
    const [count, setCount] = useState(card.count);

    function flip() {
        card.side = side;
        card.side === 0 ? setSide(1) : setSide(0);
    }

    function updateCount(updatedCount) {
        setCount(updatedCount);
        card.count = updatedCount;
        updateDeckCards(card);
    }
    
    return (
        <ListGroupItem>
            {card.image_uris ?
                <div >
                    <img src={card.image_uris.normal} alt={card.name} />
                    <div className='Counter'>
                        <Counter count={count} updateCount={updateCount} />
                    </div>
                    <span className='Card'>
                        <Card body
                                color="dark"
                                inverse
                                style={{
                                    width: '30rem'
                                }}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    {card.name}
                                </CardTitle>
                                <CardSubtitle 
                                    // className="mb-2 text-muted"
                                    tag="h6"
                                >
                                    {card.type_line}
                                </CardSubtitle>
                                <CardText>
                                    {card.oracle_text}
                                </CardText>
                            </CardBody>
                        </Card>
                    </span>
                </div> :
                <div>
                    <img src={card.card_faces[side].image_uris.normal} alt={card.name} />
                    <button className="Flip" onClick={flip}>Flip</button>
                    <div className='Counter'>
                        <Counter count={count} updateCount={updateCount} />
                    </div>
                    <span className='Card'>
                        <Card body
                                color="dark"
                                inverse
                                style={{
                                    width: '20rem'
                                }}
                        >
                            <CardBody>
                                <CardTitle tag="h5">
                                    {card.name}
                                </CardTitle>
                                <CardSubtitle
                                    tag="h6"
                                >
                                    {card.type_line}
                                </CardSubtitle>
                            </CardBody>
                        </Card>
                    </span>
                </div>
            }
        </ListGroupItem>
    );
}

export default SingleCard;