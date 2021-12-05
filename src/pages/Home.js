import { Col, Container, Row, InputGroup, FormControl, Button, Form } from "react-bootstrap";
import CvCard from "../components/ui/CvCard";
import { useMutation, useQuery } from "@apollo/client";
import { ADD_HEADER, GET_CV } from "../client/queries";
import { useRef } from "react";

const Home = () => {
  const [createResume, { loading }] = useMutation(ADD_HEADER);
  const { data, loading: load, error: err } = useQuery(GET_CV);
  ;

  const cvTitleRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    createResume({
      variables: { Name: cvTitleRef.current.value},
      update: (cache, { data: { insert_resume_one } }) => {
        let data = cache.readQuery({ query: GET_CV });
        if (data) {
          console.log(data);
          data = [...data.resume, insert_resume_one];
          console.log(data);
          cache.writeQuery({ query: GET_CV, data: { resume: data } });
        }
      },
    });
  };



  return (
    <Container className="container p-5">
      <Row className="justify-content-center my-3">
        <Col xs={12} lg={8}>
          <Form onSubmit={submitHandler}>
            <InputGroup className="mb-3">
              <FormControl placeholder="Cv Title" aria-label="Cv Title" ref={cvTitleRef} aria-describedby="basic-addon2" />
              {!loading && (
                <Button type="submit" variant="outline-secondary text-light" id="button-addon2">
                  Create New
                </Button>
              )}
              {loading && (
                <Button type="submit" variant="outline-secondary text-light" className="btn-secondary " disabled id="button-addon2">
                  Loading...
                </Button>
              )}
            </InputGroup>
          </Form>
        </Col>
      </Row>
      <Row className="justify-content-center my-3">
        {err && <h4 className="text-center text-light">{err}</h4>}
        {load && <h4 className="text-center text-light">Loading...</h4>}
        {data && data.resume.map((item) => <CvCard key={item.id} data={item} />)}
      </Row>
    </Container>
  );
};

export default Home;
