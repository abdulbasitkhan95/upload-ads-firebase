import {Col, Container, Row} from "react-bootstrap";
import {getSpecificAd} from "../../config/firebase";
import {useEffect, useState} from "react";

function SingleProduct(props) {
    const {specificID, goBack} = props
    const [specificState, setSpecificState] = useState([])

    useEffect(async () => {
        const specificData = await getSpecificAd(specificID)
        const tempList = []
        specificData.forEach(single => {
            tempList.push(single.data())
        })
        setSpecificState(tempList)
    }, [])


    return(
        <Container>
            <Row>
                <Col md="12">
                    <button className="mb-2" onClick={() => goBack()}>Go Back</button>
                    <div className="card mb-4">
                        {
                            specificState.map((single, index) => {
                                return <>
                                    <img src={single.images} className="card-img-top" alt="" />
                                    <div key={index} className="card-body">
                                        <h5 className="card-title">{single.title}</h5>
                                        <p className="card-text">{single.description}</p>
                                        <p><b>Price:</b> {single.price}</p>
                                        <h3>Contact Details</h3>
                                        <p><b>Name:</b> {single.fullName}</p>
                                        <p><b>Phone Number:</b> {single.phoneNumber}</p>
                                    </div>
                                </>
                            })
                        }
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SingleProduct