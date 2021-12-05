import { Container, Row, Col, Form, FormControl, Button } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_HEADER } from "../../client/queries";

const FormHeader = ({ headerData, cvid,setTab }) => {
  console.log("içerdeyim", headerData);

  const header=headerData===null?"":headerData

  const [updateHeader,{loading}] = useMutation(UPDATE_HEADER, { variables: { id: cvid } });
  const [image, setImage] = useState({ file: [] });
  const fileRef = useRef();
  const onChange = () => {
    console.log(fileRef.current.files[0]);
    let file = fileRef.current.files[0];
    if (file) {
      const size = parseFloat(file.size / 1024).toFixed(2);
      if (size < 512) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = function (e) {
          setImage({ imgSrc: [reader.result] });
        };
      } else {
        setImage([]);
        alert("Max file size is 500Kb");
        file = [];
      }
    }
  };

  const nameRef = useRef();
  const jobTitleRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const bithdayRef = useRef();
  const addressRef = useRef();

  useEffect(() => {
    if (header.photo) {
      setImage({ imgSrc: header.photo });
    }
    console.log('aaa');
  }, [header.photo]);

  const submitHandler = (event) => {
    event.preventDefault();

    const header = {
      name: nameRef.current.value,
      jobTitle: jobTitleRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
      dateOfBirth: bithdayRef.current.value,
      address: addressRef.current.value,
      photo: image.imgSrc,
    };

    updateHeader({
      variables: { Header: header },
      update: () => {
        setTab("summary")
      },
    });
    
  };

  return (
    <Container className="container p-5 text-light">
      {!loading && <Form onSubmit={submitHandler}>
        <Row className="justify-content-center ">
          <Col lg={8} className="mb-2">
            <h2 className="text-center">Personal Info</h2>
            <Row className="justify-content-center">
              <Col xs={8} lg={10}>
                <Form.Label>Photo</Form.Label>
                <Form.Control type="file" ref={fileRef} name="user[image]" multiple={false} onChange={onChange} accept="image/png, image/gif, image/jpeg" />
                <span className="text-muted">Max file size 512 KB</span>
              </Col>
              <Col xs={4} lg={2}>
                <img src={image.imgSrc} style={{ width: "100%" }} className={image.imgSrc ? "" : "d-none"} alt="img" />
              </Col>
            </Row>
            <Row className="justify-content-center ">
              <Col xs={12} lg={6} className="mb-2">
                <Form.Label>Full Name</Form.Label>
                <FormControl placeholder="Name" defaultValue={header.name} ref={nameRef} required aria-label="Name" />
              </Col>
              <Col xs={12} lg={6} className="mb-2">
                <Form.Label>Job Title</Form.Label>
                <FormControl placeholder="Job Title" defaultValue={header.jobTitle} ref={jobTitleRef} required aria-label="Job Title" />
              </Col>
            </Row>
            <Row className="justify-content-center ">
            <Col xs={12} lg={6} className="mb-2">
                <Form.Label>Email</Form.Label>
                <FormControl type="email" required ref={emailRef} defaultValue={header.email} placeholder="Email" aria-label="Email" />
              </Col>
              <Col xs={12} lg={6} className="mb-2">
                <Form.Label>Phone</Form.Label>
                <FormControl placeholder="Phone" ref={phoneRef} defaultValue={header.phone} required aria-label="Phone" />
              </Col>
            </Row>
            <Row className="justify-content-center  ">
            <Col xs={12} className="mb-2">
                <Form.Label>Date of Birth</Form.Label>
                <FormControl required placeholder="Date of Birth" ref={bithdayRef} defaultValue={header.dateOfBirth} aria-label="Email" />
              </Col>
            </Row>
            <Row className="justify-content-center  ">
            <Col xs={12} className="mb-2">
                <Form.Label>Adress</Form.Label>
                <Form.Control as="textarea" ref={addressRef} defaultValue={header.address} rows={3} />
              </Col>
            </Row>

            <Row className="justify-content-center ">
            <Col xs={12} className="mb-2">
                <Button type="submit" variant="secondary" size="md">
                  SAVE & CONTINUE
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Form>}
      {loading && <h2 className="text-center">Saving...</h2>}
     
    </Container>
  );
};

export default FormHeader;
