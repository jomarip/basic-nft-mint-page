import React from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const DescriptionSection = () => {
  return (
    <Container className="mt-3">
      <Alert variant="warning">
      The Workshop is a collection of algorithmic pieces based on historically significant generative art pieces. The workshop is an on-chain generative art collection. The foundational skills represented provide insight into what is possible with algorithmic art. The workshop is supported by the RITHM for off chain rendering. Substrate by Jared Tarbell is one of the quintenssential examples of complexity emerging from simple rules. This is the focus of the initial workshop study by Abominable Sasquatch.<strong>There are 100 mints in the 1st workshop batch. </strong>
      </Alert>
    </Container>
  )
}

export default DescriptionSection;