import { Col,Card, Row,Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CvCard = ({data,deleteHandler}) => {
    console.log(data);
  return (
    <Col sm={12} lg={4}>
      <Card className="my-2">
        {/* <Card.Img variant="top"  style={{height:"100px"}} src={data.Header.photo?data.Header.photo:'img/no-image.png'} /> */}
        <Card.Body>
          <Row>
             <Col xs={4} lg={2}>
             <Card.Img variant="top" className="img-fluid" style={{width:"100px"}} src={data.Header===null?'img/no-image.png':data.Header.photo} />
          </Col>
          <Col xs={8} lg={10}>
          <Card.Title>{data.Name}</Card.Title>
         <Link to={`/edit/${data.id}`} className="btn btn-sm bg-theme text-light me-1">Edit</Link>
         <Link to={`/preview/${data.id}`} className="btn bg-theme btn-sm text-light me-1">Preview</Link>
         <Button onClick={()=>{deleteHandler(data.id)}} className="btn btn-sm bg-theme b-none text-light">Delete</Button>
         </Col>
          </Row>
         
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CvCard;
