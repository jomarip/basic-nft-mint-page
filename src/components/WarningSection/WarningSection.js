import React from 'react';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';

const WarningSection = () => {
  return (
    <Container className="mt-3">
      <Alert variant="warning">
      Curators Membership is a collection of uniquely generated art pieces that serve as membership to the RITHM Community. These pieces will provide priority minting options to the holder in perpetuity, governance for the launchpad, governance for treasury acquisition and contribution to affiliated subnets. The art associated with the first <strong>314 NFTs are the debut collection of Abominable Sasquatch: First Strokes</strong>
      </Alert>
    </Container>
  )
}

export default WarningSection;