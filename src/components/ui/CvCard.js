import { Col,Card, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const CvCard = ({data}) => {
    console.log(data);
  return (
    <Col sm={12} lg={8}>
      <Card className="my-2">
        {/* <Card.Img variant="top"  style={{height:"100px"}} src={data.Header.photo?data.Header.photo:'img/no-image.png'} /> */}
        <Card.Body>
          <Row>
             <Col xs={4} lg={2}>
             <Card.Img variant="top" className="img-fluid" style={{width:"100px"}} src={data.Header===null?'img/no-image.png':data.Header.photo} />
          </Col>
          <Col xs={8} lg={10}>
          <Card.Title>{data.Name}</Card.Title>
         <Link to={`/edit/${data.id}`} className="btn bg-theme text-light me-2">Edit</Link>
         <Link to={`/preview/${data.id}`} className="btn bg-theme text-light">Preview</Link>
         </Col>
          </Row>
         
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CvCard;
