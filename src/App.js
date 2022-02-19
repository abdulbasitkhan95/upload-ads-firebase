import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col} from "react-bootstrap";
import Product from "./components/Product";
import AdRegister from "./views/AdRegister";
import {useEffect, useState} from "react";
import {getAllAds} from "./config/firebase";
import SingleProduct from "./views/SingleProduct";

function App() {

  const [registerBoolean, setRegisterBoolean] = useState(false)
  const [singleAdShow, setSingleAdShow] = useState(false)
  const [getSpecificID, setGetSpecificID] = useState('')
  const [totalLength, setTotalLength] = useState('')
  const [singleAds, setSingleAds] = useState([])
  const [imageRow, setImageRow] = useState(1)
  const ChangeToRegister = () => {
      setRegisterBoolean(true)
  }

  const backBtn = () => {
    setRegisterBoolean(false)
  }

  useEffect(async () => {
      const getAllAdsData = await getAllAds()
      const tempList = []
      getAllAdsData.forEach(single => {
          const obj = {...single.data(), id: single.id}
          tempList.push(obj)
      })
      setTotalLength(singleAds.length)
      setSingleAds(tempList)
  }, [singleAds])

  const getSingleKey = e => {
      setSingleAdShow(true)
      setGetSpecificID(e)
  }

  const goBack = () => {
      setSingleAdShow(false)
  }

  const addImageRow = () => {

  }

  return (
    <div className="App">
        {
            singleAdShow ?
                <SingleProduct goBack={goBack} specificID={getSpecificID}/>
                :
                <>
                    <div className="py-5">
                        {
                            registerBoolean ?
                                <AdRegister/>
                                :
                                <Container>
                                    <Row>
                                        {
                                            totalLength == '0' ?
                                                <Col md="12"><p>No Product</p></Col>
                                                :
                                                singleAds.map((singleAd, index) => {
                                                    return <Product key={index} singleAd={singleAd} getSingleKey={getSingleKey}/>
                                                })
                                        }
                                    </Row>
                                </Container>
                        }
                    </div>
                    <div>
                        <Container>
                            <Row>
                                <Col md="12">
                                    {
                                        registerBoolean ?
                                            <p>Want to go back <a onClick={() => backBtn()} href="#">Click Here</a></p>
                                            :
                                            <p>If you want to Post Ad. <a onClick={() => ChangeToRegister()} href="#">Click Here</a></p>
                                    }
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </>
        }
    </div>
  );
}

export default App;
