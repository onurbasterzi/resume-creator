import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_EXPERIENCES } from "../../client/queries";

const FormExperiences = ({ experiencesData, cvid, setTab }) => {
  const exData = experiencesData === null ? "" : experiencesData;
  const [updateExperiences, { loading }] = useMutation(UPDATE_EXPERIENCES, { variables: { id: cvid } });
  const [experiences, setExperiences] = useState([]);

  useEffect(() => {
    setExperiences(experiencesData ? experiencesData.experiences : []);
    console.log("aaa");
  }, [exData.experiences, experiencesData]);

  const titleRef = useRef();
  const companyRef = useRef();
  const jobTitleRef = useRef();
  const jobDecriptionRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  const cityRef = useRef();
  const countryRef = useRef();

  const addExperience = () => {
    let newExperience = {
      id: Date.now(),
      company: companyRef.current.value,
      jobTitle: jobTitleRef.current.value,
      jobDescription: jobDecriptionRef.current.value,
      startDate: startDateRef.current.value,
      endDate: endDateRef.current.value,
      city: cityRef.current.value,
      country: countryRef.current.value,
    };
    if (companyRef.current.value !== "") {
      setExperiences([...experiences, newExperience]);
    }
  };

  const deleteExperience = (item) => {
    setExperiences(experiences.filter((child) => child.id !== item.id));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let experienceData = {
      title: titleRef.current.value,
      experiences: experiences,
    };

    updateExperiences({
      variables: { Experiences: experienceData },
      update: () => {
          console.log('updated experiences');
        setTab("education");
      },
    });
  };

  return (
    <Container className="container p-5 text-light">
      {!loading && (
        <Form onSubmit={submitHandler}>
          <Row className="justify-content-center mb-2">
            <h2 className="text-center">Experiences</h2>
            <Col sm={12} lg={8}>
              <Form.Label>Title of the Section</Form.Label>
              <Form.Control placeholder="Title of the Section" defaultValue={exData.title} ref={titleRef}  aria-label="Title of the Section" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={4}>
              <Form.Label>Company Name</Form.Label>
              <Form.Control placeholder="Company" defaultValue={exData.company} ref={companyRef}  aria-label="Company" />
            </Col>
            <Col sm={12} lg={4}>
              <Form.Label>Job Title</Form.Label>
              <Form.Control placeholder="Ex: Full Stack Developer" defaultValue={exData.jobTitle} ref={jobTitleRef}  aria-label="Job Title" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={4}>
              <Form.Label>Start Date</Form.Label>
              <Form.Control placeholder="Ex: June 2010" defaultValue={exData.startDate} ref={startDateRef}  aria-label="Start Date" />
            </Col>
            <Col sm={12} lg={4}>
              <Form.Label>End Date</Form.Label>
              <Form.Control placeholder="Ex: May 2020" defaultValue={exData.endDate} ref={endDateRef}  aria-label="End Date" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={4}>
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Ex: New York" defaultValue={exData.city} ref={cityRef}  aria-label="City" />
            </Col>
            <Col sm={12} lg={4}>
              <Form.Label>Country</Form.Label>
              <Form.Control placeholder="Ex: USA" defaultValue={exData.jobTitle} ref={countryRef}  aria-label="Country" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={8}>
              <Form.Label>Summary</Form.Label>
              <Form.Control as="textarea" ref={jobDecriptionRef} defaultValue={exData.jobDescription} rows={6} />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col xs={12} lg={8}>
              <Button variant="secondary" onClick={addExperience} size="sm">
                Add Experience
              </Button>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={8}>
              <ListGroup>
                {experiences &&
                  experiences.map((item) => (
                    <ListGroup.Item key={item.id} className="me-2">
                      <Row>
                        <Col>
                          <strong>
                            {" "}
                            {item.jobTitle} | {item.company}{" "}
                          </strong>
                          <br />
                          <i>
                            {item.startDate} - {item.endDate} {item.city}, {item.country}
                          </i>{" "}
                          <br />
                          {item.jobDescription}
                        </Col>
                        <Button onClick={() => deleteExperience(item)} className="btn btn-sm btn-danger text-center">
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

export default FormExperiences;
