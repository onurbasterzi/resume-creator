import { Container, Row, Col, Form, Button, ListGroup } from "react-bootstrap";
import { useRef, useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_LANGUAGES } from "../../client/queries";
import { useHistory } from "react-router";
const FormLanguages = ({ languagesData, cvid, setTab }) => {
  const langData = languagesData === null ? "" : languagesData;
  const history=useHistory()
  const [updateLanguages, { loading }] = useMutation(UPDATE_LANGUAGES, { variables: { id: cvid } });
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    setLanguages(languagesData ? languagesData.languages : []);
    console.log("lang", languagesData);
  }, [langData.languages, languagesData]);

  const titleRef = useRef();
  const languageRef = useRef();
  const writingRef = useRef();
  const listeningRef = useRef();
  const speakingRef = useRef();

  const addLanguage = () => {
    let newLanguage = {
      id: Date.now(),
      language: languageRef.current.value,
      writing: writingRef.current.value,
      listening: listeningRef.current.value,
      speaking: speakingRef.current.value,
    };

    if (languageRef.current.value !== "") {
      setLanguages([...languages, newLanguage]);
    }
  };

  const deleteLanguage = (item) => {
    setLanguages(languages.filter((child) => child.id !== item.id));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    let languageData = {
      title: titleRef.current.value,
      languages: languages,
    };

    updateLanguages({
      variables: { Languages: languageData },
      update: () => {
        history.push(`/preview/${cvid}`)
      },
    });
  };

  return (
    <Container className="container p-5 text-light">
      {!loading && (
        <Form onSubmit={submitHandler}>
          <Row className="justify-content-center mb-2">
            <h2 className="text-center">Languages</h2>
            <Col sm={12} lg={9}>
              <Form.Label>Title of the Section</Form.Label>
              <Form.Control placeholder="Title of the Section" defaultValue={langData.title} ref={titleRef} aria-label="Title of the Section" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={9}>
              <Form.Label>Language</Form.Label>
              <Form.Control placeholder="Language" defaultValue={langData.language} ref={languageRef} aria-label="Language" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={3} className="mb-2">
              <Form.Label>Writing</Form.Label>
              <Form.Control placeholder="Ex: Moderate " defaultValue={langData.writing} ref={writingRef} aria-label="Writing" />
            </Col>
            <Col sm={12} lg={3} className="mb-2">
              <Form.Label>Listening</Form.Label>
              <Form.Control placeholder="Ex: Moderate" defaultValue={langData.listening} ref={listeningRef} aria-label="Listening" />
            </Col>
            <Col sm={12} lg={3} className="mb-2">
              <Form.Label>Speaking</Form.Label>
              <Form.Control placeholder="Ex: Moderate" defaultValue={langData.speaking} ref={speakingRef} aria-label="Speaking" />
            </Col>
          </Row>

          <Row className="justify-content-center mb-2">
            <Col xs={12} lg={9}>
              <Button variant="secondary" onClick={addLanguage} size="sm">
                Add Language
              </Button>
            </Col>
          </Row>
          <hr />
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={9}>
              <ListGroup>
                {languages &&
                  languages.map((item) => (
                    <ListGroup.Item key={item.id} className="me-2">
                      <Row>
                        <Col>
                          <p>
                            <strong> {item.language}</strong> : Writing: {item.writing} | Listening:{item.listening} | Speaking: {item.speaking}
                          </p>
                        </Col>
                        <Button onClick={() => deleteLanguage(item)} className="btn btn-sm btn-danger text-center">
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
            <Col xs={12} lg={9}>
              <Button type="submit" variant="secondary" size="md">
                SAVE & PREVIEW CV
              </Button>
            </Col>
          </Row>
        </Form>
      )}
      {loading && <h2 className="text-center">Saving...</h2>}
    </Container>
  );
};

export default FormLanguages;
