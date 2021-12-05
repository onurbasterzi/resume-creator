import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { useRef } from "react";
import { useMutation } from "@apollo/client";
import { UPDATE_SUMMARY } from "../../client/queries";

const FormSummary = ({ summaryData, cvid, setTab }) => {
  console.log("summary", summaryData);

  const [updateSummary, { loading }] = useMutation(UPDATE_SUMMARY, { variables: { id: cvid } });

  const summaryRef = useRef();
  const titleRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const summary = {
      title: titleRef.current.value,
      summary: summaryRef.current.value,
    };

    updateSummary({
      variables: { Summary: summary },
      update: () => {
        setTab("skills");
      },
    });
  };
  return (
    <Container className="container p-5 text-light">
      {!loading && (
        <Form onSubmit={submitHandler}>
          <Row className="justify-content-center mb-2">
            <h2 className="text-center">Professional Summary</h2>
            <Col sm={12} lg={8}>
              <Form.Label>Title of the Section</Form.Label>
              <Form.Control placeholder="Title of the Section" defaultValue={summaryData?summaryData.title:''} ref={titleRef} required aria-label="Title of the Section" />
            </Col>
          </Row>
          <Row className="justify-content-center mb-2">
            <Col sm={12} lg={8}>
              <Form.Label>Summary</Form.Label>
              <Form.Control as="textarea" ref={summaryRef} defaultValue={summaryData?summaryData.summary:''} rows={6} />
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

export default FormSummary;
