import React from 'react';
import { Card, CardImg, CardBody } from 'reactstrap';

const CardComponent = props => {
  return (
    <div>
      <Card>
        <CardImg
          top
          width="100%"
          src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
          alt="Card image cap"
        />
        <CardBody>
          <p>Name: XXXX</p>
          <p>Quantity: XXXX</p>
          <p>Details: XXXX</p>
        </CardBody>
      </Card>
    </div>
  );
};

export default CardComponent;
