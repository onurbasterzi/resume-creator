import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_CV_BY_ID } from "../client/queries";
import CvHeader from "../components/previewDetails/CvHeader";
import Summary from "../components/previewDetails/summary";
import Skills from "../components/previewDetails/skills";
import Experience from "../components/previewDetails/experience";
import Education from "../components/previewDetails/education";
import Certificates from "../components/previewDetails/certificates";
import Languages from "../components/previewDetails/languages";
import { useParams } from "react-router";

const Preview = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_CV_BY_ID, { variables: { id } });
  return (
    <>
      <h1 className="text-center text-light">CV Preview</h1>
      {loading && <h4 className="text-center text-light">Loading...</h4>}
      {error && <h4 className="text-center text-light">Error...</h4>}
      {data && (
        <>
          <Container className="container p-5" id="printArea">
            <CvHeader header={data.resume_by_pk.Header} cvid={id} />
            <Row className="row justify-content-end">
              <Col xs={11}>
                <Summary summary={data.resume_by_pk.Summary} />
                <Skills skills={data.resume_by_pk.Skills} />
                <Experience />
                <Education />
                <Certificates />
                <Languages />
              </Col>
            </Row>
          </Container>
          <button onClick={()=>window.print()}>Print</button>
        </>
      )}
    </>
  );
};

export default Preview;
