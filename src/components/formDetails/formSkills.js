import { Container, Row, Col, Form, Button, InputGroup, ListGroup } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_SKILLS } from "../../client/queries";

const FormSkills = ({ skillsData, cvid, setTab }) => {
  const skillData = skillsData === null ? "" : skillsData;
  const [updateSkills, { loading }] = useMutation(UPDATE_SKILLS, { variables: { id: cvid } });
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    setSkills(skillsData?skillData.skills:[]);
    console.log('skills');
  }, [skillData.skills,skillsData]);

  const titleRef = useRef();
  const newSkillRef = useRef();

  const addSkill = () => {
    if (newSkillRef.current.value !== "") {
      setSkills([...skills, { id: Date.now(), skill: newSkillRef.current.value }]);
      newSkillRef.current.value = "";
    }
  };

  const deleteSkill = (item) => {
    setSkills(skills.filter((child) => child.id !== item.id));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let skillData = {
      title: titleRef.current.value,
      skills: skills,
    };

    updateSkills({
      variables: { Skills: skillData },
      update: () => {
        setTab("experience");
      },
    });
  };

  return (
    <Container className="container p-5 text-light">
      {!loading && (
        <Form onSubmit={submitHandler}>
          <Row className="justify-content-center mb-2">
            <h2 className="text-center">Skills</h2>
            <Col sm={12} lg={8}>
              <Form.Label>Title of the Section</Form.Label>
              <Form.Control placeholder="Title of the Section" defaultValue={skillData.title} ref={titleRef}  aria-label="Title of the Section" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={8}>
              <Form.Label>Add Skill</Form.Label>
              <InputGroup className="mb-3">
                <Form.Control placeholder="Add New Skill" aria-label="Cv Title" ref={newSkillRef} aria-describedby="basic-addon2" />
                <Button onClick={addSkill} variant="outline-secondary text-light" id="button-addon2">
                  +
                </Button>
              </InputGroup>
            </Col>
            <Col sm={12} lg={8}>
              <ListGroup>
                {skills && skills.map((item) => (
                  <ListGroup.Item key={item.id} className="me-2">
                    {item.skill}
                    <Button onClick={() => deleteSkill(item)} className="btn btn-sm btn-danger text-center">
                      -
                    </Button>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Col>
          </Row>
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

export default FormSkills;
