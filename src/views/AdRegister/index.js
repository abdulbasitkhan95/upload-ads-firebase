import {registerAd, storeImage} from "../../config/firebase";
import {Col, Container, Row} from "react-bootstrap";
import {useEffect, useState} from "react";

function AdRegister() {
    const [formRegister, setFormRegister] = useState([])

    const onChange = e => {
        setFormRegister({
            ...formRegister,
            [e.target.name]: e.target.value,
        })
    }

    const onClickSubmit = async () => {
        await registerAd(
            formRegister.fullName,
            formRegister.email,
            formRegister.phoneNumber,
            formRegister.title,
            formRegister.price,
            formRegister.images,
            formRegister.description
        )
        alert('Ad Successfully')
    }

    return(
        <div>
            <Container>
                <Row>
                    <Col md="12">
                        <h1 className="text-center">Register Your Ad</h1>
                            <div className="mb-3">
                                <label htmlFor="fullName" className="form-label">Your Name</label>
                                <input type="text" className="form-control" name="fullName" placeholder="Enter Name" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Your Email Address</label>
                                <input className="form-control" name="email" placeholder="Enter Email Address" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="phoneNumber" className="form-label">Your Phone Number</label>
                                <input type="number" className="form-control" name="phoneNumber" placeholder="Enter Phone Number" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">Your Title</label>
                                <input type="text" className="form-control" name="title" placeholder="Enter Title" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="price" className="form-label">Your Price</label>
                                <input type="number" className="form-control" name="price" placeholder="Enter Price" onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="images" className="form-label">Your Images</label>
                                <input type="text" className="form-control" placeholder="URL" name="images" multiple onChange={onChange} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="images" className="form-label">Your Images</label>
                                <input type="file" className="form-control" placeholder="Add Images" name="imagesFile" multiple onChange={e => storeImage(e.target.files)} />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">Your Description</label>
                                <textarea placeholder="Enter Description" className="form-control" name="description" rows="3" onChange={onChange} />
                            </div>
                            <button onClick={() => onClickSubmit()} className="btn btn-primary">Submit</button>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AdRegister