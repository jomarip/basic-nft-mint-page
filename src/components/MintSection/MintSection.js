import React, { useState } from 'react';

import { ethers } from "ethers";
import erc721abi from "../../contractABI/NFTABI.json";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

import Image from '../../img/nft.png';

const CONTRACT_ADDRESS = "0xe0290c183e9F63A6f28938051443D9Ed47710073";

const MintSection = () => {

  const [supplys, setSupplys] = useState({ supply: "-", totalSupply: "-" });

  const mint = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const erc721 = new ethers.Contract(CONTRACT_ADDRESS, erc721abi, signer);
    await erc721.mint(signerAddress,1,{ value: ethers.utils.parseUnits("20", "ether") });
  };

  const getSupplys = async () => {

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const erc721 = new ethers.Contract(CONTRACT_ADDRESS, erc721abi, signer);
    const checkSupply = await erc721.getCollectionInfo(1);
    const checkTotalSupply = await erc721.getCollectionInfo(1);
    setSupplys({
      supply: parseInt(checkSupply[0]._hex, 16),
      totalSupply: parseInt(checkTotalSupply[1]._hex, 16)
    })

  }
  if (supplys.supply === "-") {
    getSupplys();
  }

  return (
    <Container>
      <Card className="text-center">
        <Card.Header><strong>Mint</strong></Card.Header>
        <Card.Body>
          <Card.Title>Rithm Art Curatorship</Card.Title>
          <Card.Text>
            Membership Mints are Open (20 AVAX)
          </Card.Text>
          <Card.Img style={{ maxWidth: "300px" }} variant="top" src={Image} />
          <Card.Text className="mt-3">
            <strong>{supplys.supply} / {supplys.totalSupply}</strong>
          </Card.Text>
          <ProgressBar animated now={(supplys.supply * 100) / supplys.totalSupply} />
        </Card.Body>
        <Card.Footer className="d-grid"><Button variant="primary" onClick={() => mint()}>Mint</Button></Card.Footer>
      </Card>
    </Container>
  )
}

export default MintSection;