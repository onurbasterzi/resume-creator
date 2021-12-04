import { Col,ListGroup } from "react-bootstrap";
const Certificates = () => {
    return ( 
        <Col xs={12} className="p-2 mb-2 shadow">
        <h5 className="text-light p-2">
          <i className="bi bi-patch-check"></i> CERTIFICATES
        </h5>
        <ListGroup>
          <ListGroup.Item>
            <strong>
              Bilge Adam | .NET C# & MSSQL SERVER Software and Database Specialization <br />{" "}
            </strong>
            <i>
              Certificate of Excellence in Software and Database Specialization - <u>September 2010</u>{" "}
            </i>
          </ListGroup.Item>
        </ListGroup>
      </Col>
     );
}
 
export default Certificates;