import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_EDUCATION } from "../../client/queries";

const FormEducation = ({ educationData, cvid, setTab }) => {
  const eduData = educationData === null ? "" : educationData;
  const [updateExperiences, { loading }] = useMutation(UPDATE_EDUCATION, { variables: { id: cvid } });
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    setEducations(educationData ? educationData.educations : []);
    console.log("aaa");
  }, [eduData.educations, educationData]);

  const titleRef = useRef();
  const schoolRef = useRef();
  const departmentRef = useRef();
  const degreeRef = useRef();
  const  graduationRef= useRef();

  const addEducation = () => {
    let newEducation = {
      id: Date.now(),
      school: schoolRef.current.value,
      department: departmentRef.current.value,
      degree: degreeRef.current.value,
      graduation: graduationRef.current.value
    };
    if (schoolRef.current.value !== "") {
      setEducations([...educations, newEducation]);
      newEducation = {};
    }
  };

  const deleteEducation = (item) => {
    setEducations(educations.filter((child) => child.id !== item.id));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let educationData = {
      title: titleRef.current.value,
      educations: educations,
    };

    updateExperiences({
      variables: { Education: educationData },
      update: () => {
        setTab("certificates");
      },
    });
  };

  return (
    <Container className="container p-5 text-light">
      {!loading && (
        <Form onSubmit={submitHandler}>
          <Row className="justify-content-center mb-2">
            <h2 className="text-center">Educations</h2>
            <Col sm={12} lg={8}>
              <Form.Label>Title of the Section</Form.Label>
              <Form.Control placeholder="Title of the Section" defaultValue={eduData.title} ref={titleRef}  aria-label="Title of the Section" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={4}>
              <Form.Label>School Name</Form.Label>
              <Form.Control placeholder="School Name" defaultValue={eduData.school} ref={schoolRef}  aria-label="School" />
            </Col>
            <Col sm={12} lg={4}>
              <Form.Label>Department</Form.Label>
              <Form.Control placeholder="Ex: Department of Computer Sciences" defaultValue={eduData.department} ref={departmentRef}  aria-label="Department" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            
            <Col sm={12} lg={4}>
              <Form.Label>Graduation Date / City / Country</Form.Label>
              <Form.Control placeholder="Ex: May 2020 Rome,ITALY " defaultValue={eduData.graduation} ref={graduationRef}  aria-label="Graduation Date" />
            </Col>
            <Col sm={12} lg={4}>
              <Form.Label>Degree</Form.Label>
              <Form.Control placeholder="Ex: Bachelor degree" defaultValue={eduData.degree} ref={degreeRef}  aria-label="Graduation Date" />
            </Col>
          </Row>

          <Row className="justify-content-center mb-2">
            <Col xs={12} lg={8}>
              <Button variant="secondary" onClick={addEducation} size="sm">
                Add Education
              </Button>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={8}>
              <ListGroup>
                {educations &&
                  educations.map((item) => (
                    <ListGroup.Item key={item.id} className="me-2">
                      <Row>
                        <Col>
                          <strong>
                            {" "}
                            {item.school}, {item.department} | {item.degree}{" "}
                          </strong>
                          <br />
                          <i>
                            {item.graduation}
                          </i>{" "}
                        </Col>
                        <Button onClick={() => deleteEducation(item)} className="btn btn-sm btn-danger text-center">
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

export default FormEducation;
