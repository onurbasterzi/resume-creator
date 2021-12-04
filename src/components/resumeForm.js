import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import { useRef } from "react";

const CreateResume = (props) => {
  const nameRef = useRef();
  const jobTitleRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const bithdayRef = useRef();
  const addressRef = useRef();

//   function submitHandler(e) {
//       alert()
//       e.preventDefault()
//   }

  const submitHandler=(event)=>{
    event.preventDefault()

    const header={
        name:nameRef.current.value,
        jobTitle:jobTitleRef.current.value,
        email:emailRef.current.value,
        phone:phoneRef.current.value,
        dateOfBirth:bithdayRef.current.value,
        address:addressRef.current.value,
    }

    props.onAddHeader(header)
  }

  return (
    <Container className="container p-5 text-light">
      <form onSubmit={submitHandler}>
        
        <Row className="justify-content-center ">
          <Col lg={6}>
            <h4>Personal Info</h4>
            <Row className="justify-content-center mb-2">
              <Col xs={6}>
                <Form.Label>Full Name</Form.Label>
                <FormControl placeholder="Name" ref={nameRef} required aria-label="Name" />
              </Col>
              <Col xs={6}>
                <Form.Label>Job Title</Form.Label>
                <FormControl placeholder="Job Title" ref={jobTitleRef} required aria-label="Job Title" />
              </Col>
            </Row>
            <Row className="justify-content-center mb-2">
              <Col xs={6}>
                <Form.Label>Email</Form.Label>
                <FormControl type="email" required ref={emailRef} placeholder="Email" aria-label="Email" />
              </Col>
              <Col xs={6}>
                <Form.Label>Phone</Form.Label>
                <FormControl placeholder="Phone" ref={phoneRef} required aria-label="Phone" />
              </Col>
            </Row>
            <Row className="justify-content-center ">
              <Col xs={12}>
                <Form.Label>Date of Birth</Form.Label>
                <FormControl required placeholder="Date of Birth" ref={bithdayRef} aria-label="Email" />
              </Col>
            </Row>
            <Row className="justify-content-center ">
              <Col xs={12}>
                <Form.Label>Adress</Form.Label>
                <Form.Control as="textarea" ref={addressRef} rows={3} />
              </Col>
            </Row>
            <Row className="justify-content-center ">
              <Col xs={12}>
                <Button type="submit" variant="secondary" size="lg">
                  SUBMIT
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </form>
    </Container>
  );
};

export default CreateResume;
