import FormHeader from "../components/formDetails/formHeader";
import {  useQuery } from "@apollo/client";
import { useParams } from "react-router";
import { GET_CV_BY_ID } from "../client/queries";
import { useState } from "react";
import { Tabs, Tab } from "react-bootstrap";
import FormSummary from "../components/formDetails/formSummary";
import FormSkills from "../components/formDetails/formSkills";
import FormExperiences from "../components/formDetails/formExperiences";
import FormEducation from "../components/formDetails/formEducation";
import FormCertificate from "../components/formDetails/formCertificates";

const EditResume = () => {
  // const [addHeader, { loading, error }] = useMutation(ADD_HEADER);
  const { id } = useParams();
  const [key, setKey] = useState("personal");
  const { data, loading, error } = useQuery(GET_CV_BY_ID, { variables: { id } });


  return (
    <>
      {data && (
        <Tabs activeKey={key} onSelect={(k) => setKey(k)} className="justify-content-center">
          <Tab eventKey="personal" tabClassName="bg-dark text-light" title="Personal Info">
            <FormHeader headerData={data.resume_by_pk.Header} setTab={setKey} cvid={id}  />;
          </Tab>
          <Tab eventKey="summary" tabClassName="bg-dark text-light" title="Professinal Summary">
            <FormSummary summaryData={data.resume_by_pk.Summary} setTab={setKey} cvid={id} />
          </Tab>
          <Tab eventKey="skills" tabClassName="bg-dark text-light" title="Skills">
            <FormSkills skillsData={data.resume_by_pk.Skills} setTab={setKey} cvid={id}/>
          </Tab>
          <Tab eventKey="experience" tabClassName="bg-dark text-light" title="Experiences">
            <FormExperiences experiencesData={data.resume_by_pk.Experiences} setTab={setKey} cvid={id}/>
          </Tab>
          <Tab eventKey="education" tabClassName="bg-dark text-light" title="Education">
            <FormEducation educationData={data.resume_by_pk.Education} setTab={setKey} cvid={id} />
          </Tab>
          <Tab eventKey="certificates" tabClassName="bg-dark text-light" title="Certificates">
            <FormCertificate certificatesData={data.resume_by_pk.Certificates} setTab={setKey} cvid={id}/>
          </Tab>
          <Tab eventKey="languages" tabClassName="bg-dark text-light" title="Languages">
            asdsddasd
          </Tab>
        </Tabs>
      )}
      {loading && <h4 className="text-center text-light">Loading...</h4>}
      {error && <h4 className="text-center text-light">Error...</h4>}
    </>
  );
};

export default EditResume;
