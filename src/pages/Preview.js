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
import { useState } from "react";
import $ from "jquery";
import Button from "@restart/ui/esm/Button";
window.jQuery = $;
require("print-this");

const Preview = () => {
  const { id } = useParams();
  const { data, loading, error } = useQuery(GET_CV_BY_ID, { variables: { id } });
  const [themeColor, setThemeColor] = useState(["bg-theme","text-theme"]);

  // useEffect(() => {
  //   console.log($("#printArea"));
  //   //   $('#printArea').printThis({
  //   //     importCSS:true,
  //   //     importStyle:true
  //   // });
  // }, []);

  function changeTheme(theme) {
    setThemeColor(theme);
  }

  function print() {
    $("#printArea").printThis({
      importCSS: true,
      importStyle: true,
    });
  }

  return (
    <>
      {loading && <h4 className="text-center text-light">Loading...</h4>}
      {error && <h4 className="text-center text-light">Error...</h4>}
      {data && (
        <>
          <Container>
            <Row className="justify-content-center">
           
              <Col xs={3} className="text-center my-1 d-grid">
                <h6 className="text-light">Print CV</h6>
                <button className="btn btn-secondary" onClick={print}>
                  Print
                </button>
              </Col>
              <Col xs={3} className="text-center my-1">
                <h6 className="text-light">Change Theme</h6>
                <Button className="btn bg-theme border border-light text-light p-3" onClick={() => changeTheme(["bg-theme","text-theme"])}></Button>
                <Button className="btn btn-danger border border-light p-3" onClick={() => changeTheme(["bg-red","text-red"])}></Button>
                <Button className="btn bg-darkblue border border-light text-light p-3" onClick={() => changeTheme(["bg-darkblue","text-darkblue"])}></Button>
                <Button className="btn bg-orange border border-light text-light p-3" onClick={() => changeTheme(["bg-orange","text-orange"])}></Button>
                <Button className="btn bg-primary border border-light text-light p-3" onClick={() => changeTheme(["bg-primary","text-primary"])}></Button>
                <Button className="btn bg-dark border border-light text-light p-3" onClick={() => changeTheme(["bg-dark","text-dark"])}></Button>
              </Col>
            </Row>
          </Container>
          <Container className="p-5" id="printArea">
            <CvHeader theme={themeColor} header={data.resume_by_pk.Header} cvid={id} />
            <Row className="row justify-content-end">
              <Col xs={11}>
                <Summary theme={themeColor} summary={data.resume_by_pk.Summary} />
                <Skills theme={themeColor} skills={data.resume_by_pk.Skills} />
                <Experience theme={themeColor} experiences={data.resume_by_pk.Experiences} />
                <Education theme={themeColor} educations={data.resume_by_pk.Education} />
                <Certificates theme={themeColor} certificates={data.resume_by_pk.Certificates} />
                <Languages theme={themeColor} languages={data.resume_by_pk.Languages} />
              </Col>
            </Row>
          </Container>
        </>
      )}
    </>
  );
};

export default Preview;
