import {Col} from "react-bootstrap";

function Product(props) {
    const {singleAd, getSingleKey} = props
    return(
        <Col md="4">
            <div className="card mb-4">
                <img src={singleAd.images} className="card-img-top" alt="" />
                {/*<img src={singleAd.images} className="card-img-top" alt="" />*/}
                <div className="card-body">
                    <h5 className="card-title">{singleAd.title}</h5>
                    <p className="card-text">{singleAd.description}</p>
                    <p><b>Price:</b> {singleAd.price}</p>
                    <p><b>Phone Number:</b> {singleAd.phoneNumber}</p>
                    <a onClick={() => getSingleKey(singleAd.email)} href="#" className="btn btn-primary">Read More</a>
                </div>
            </div>
        </Col>
    )
}

export default Product