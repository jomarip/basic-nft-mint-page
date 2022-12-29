import React, { useState } from 'react';

import { ethers } from "ethers";
import erc721abi from "../../contractABI/NFTABI.json";

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Button from 'react-bootstrap/Button';

//import Image from '../../img/dustyCity.png';

const CONTRACT_ADDRESS = "0x46C7D3AD69d82360047BdC4204891483610365cC";

const WorkshopSection = () => {

  const [supplys, setSupplys] = useState({ supply: "-", totalSupply: "-" });

  const mint = async () => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const erc721 = new ethers.Contract(CONTRACT_ADDRESS, erc721abi, signer);
    await erc721.mint(signerAddress,1,{ value: ethers.utils.parseUnits("2", "ether") });
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
          <Card.Title>Workshop of Abominable Sasquatch</Card.Title>
          <Card.Text>
            Workshop Mints are Open (2 AVAX)
          </Card.Text>
          <Card.Img style={{ maxWidth: "300px" }} variant="top" src="https://rithm-workshop.s3.filebase.com/gallery/100001.png" />
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

export default WorkshopSection;