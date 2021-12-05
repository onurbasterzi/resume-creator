import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_CERTIFICATES } from "../../client/queries";

const FormCertificate = ({ certificatesData, cvid, setTab }) => {
  const certData = certificatesData === null ? "" : certificatesData;
  const [updateCertificates, { loading }] = useMutation(UPDATE_CERTIFICATES, { variables: { id: cvid } });
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    setCertificates(certificatesData ? certificatesData.certificates : []);
    console.log('cert',certificatesData);
  }, [certData.certificates, certificatesData]);

  const titleRef = useRef();
  const organizationRef = useRef();
  const courseNameRef = useRef();
  const certificationRef = useRef();
  const certifcationDateRef = useRef();

  const addCertificate = () => {
    let newCertificate = {
      id: Date.now(),
      organization: organizationRef.current.value,
      courseName: courseNameRef.current.value,
      certification: certificationRef.current.value,
      certificationDate: certifcationDateRef.current.value,
    }

    if (organizationRef.current.value !== "") {
        setCertificates([...certificates, newCertificate]);
    }
  };



  const deleteCertificate = (item) => {
    setCertificates(certificates.filter((child) => child.id !== item.id));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let certificateData = {
      title: titleRef.current.value,
      certificates: certificates,
    };

    updateCertificates({
      variables: { Certificates: certificateData },
      update: () => {
        setTab("languages");
      },
    });
  };

  return (
    <Container className="container p-5 text-light">
      {!loading && (
        <Form onSubmit={submitHandler}>
          <Row className="justify-content-center mb-2">
            <h2 className="text-center">Certificates</h2>
            <Col sm={12} lg={8}>
              <Form.Label>Title of the Section</Form.Label>
              <Form.Control placeholder="Title of the Section" defaultValue={certData.title} ref={titleRef}  aria-label="Title of the Section" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={4}>
              <Form.Label>Organization Name</Form.Label>
              <Form.Control placeholder="Organization Name" defaultValue={certData.organization} ref={organizationRef}  aria-label="Organization" />
            </Col>
            <Col sm={12} lg={4}>
              <Form.Label>Course Name</Form.Label>
              <Form.Control placeholder="Ex: Software and Database Specialization" defaultValue={certData.course} ref={courseNameRef}  aria-label="Department" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={4}>
              <Form.Label>Certificate</Form.Label>
              <Form.Control placeholder="Ex: May 2020 Rome,ITALY " defaultValue={certData.certification} ref={certificationRef}  aria-label="Graduation Date" />
            </Col>
            <Col sm={12} lg={4}>
              <Form.Label>Certification Date</Form.Label>
              <Form.Control placeholder="Ex: Bachelor degree" defaultValue={certData.certificationDate} ref={certifcationDateRef}  aria-label="Graduation Date" />
            </Col>
          </Row>

          <Row className="justify-content-center mb-2">
            <Col xs={12} lg={8}>
              <Button variant="secondary" onClick={addCertificate} size="sm">
                Add Certificate
              </Button>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={8}>
              <ListGroup>
                {certificates &&
                  certificates.map((item) => (
                    <ListGroup.Item key={item.id} className="me-2">
                      <Row>
                        <Col>
                          <strong>
                            {item.organization} | {item.courseName} <br />{" "}
                          </strong>
                          <i>
                            {item.certification} - <u>{item.certificationDate}</u>{" "}
                          </i>
                        </Col>
                        <Button onClick={() => deleteCertificate(item)} className="btn btn-sm btn-danger text-center">
                          Delete
                        </Button>
                        <Col></Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
              </ListGroup>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-center mb-2">
            <Col xs={12} lg={8}>
              <Button type="submit" variant="secondary" size="md">
                SAVE & CONTINUE
              </Button>
            </Col>
          </Row>
        </Form>
      )}
      {loading && <h2 className="text-center">Saving...</h2>}
    </Container>
  );
};

export default FormCertificate;
