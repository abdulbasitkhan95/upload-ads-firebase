import {Col, Container, Row} from "react-bootstrap";


function Login() {
    return(
        <>
            <Container>
                <Row>
                    <Col md="12">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Your Email Address</label>
                            <input className="form-control" name="email" placeholder="Enter Email Address" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Your Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Enter Password" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Login