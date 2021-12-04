
import { Container, Row, Col } from "react-bootstrap";
import { useQuery } from "@apollo/client";
import { GET_CV } from "../client/queries";
import CvHeader from "../components/details/CvHeader";
import Summary from "../components/details/summary";
import Skills from "../components/details/skills";
import Experience from "../components/details/experience";
import Education from "../components/details/education";
import Certificates from "../components/details/certificates";
import Languages from "../components/details/languages";

const Preview = () => {
    const { data, loading, error } = useQuery(GET_CV);
    return (
      <>
        <h1  className="text-center text-light">CV Preview</h1>
        {loading && <h4 className="text-center text-light">Loading...</h4>}
        {error && <h4 className="text-center text-light">Error...</h4>}
        {data && <Container className="container p-5" id="printArea">
          <CvHeader data={data} />
          <Row className="row justify-content-end">
            <Col xs={11}>
              <Summary/>
              <Skills/>
              <Experience/>
              <Education/>
              <Certificates/>
              <Languages/>
            </Col>
          </Row>
        </Container>}
      </>)
};
 
export default Preview;