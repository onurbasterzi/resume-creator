import { ListGroup,Col } from "react-bootstrap";

const Experience = () => {
  return (
    <Col xs={12} className="p-2 mb-2 shadow">
      <h5 className="text-light p-2">
        <i className="bi bi-briefcase"></i> EXPERIENCE
      </h5>
      <ListGroup>
        <ListGroup.Item>
          <strong> Full Stack .NET Web Developer | Onur Yazılım ve Tasarım Hizmetleri </strong>
          <br />
          <i>July 2011 - June 2014 IZMIR, TURKEY</i> <br />
          Designed and implemented multi-tier software using ASP.NET MVC, ASP.NET WEB API, SQL Server and SqLite
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Full Stack .NET Web Developer | Ayda Ajans </strong> <br />
          <i>June 2014 - June 2020 IZMIR, TURKEY</i> <br />
          Designed and implemented multi-tier software using ASP.NET MVC,ASP.NET WEB API, Vue.Js (Quasar Framework), SQL Server and SqLite
        </ListGroup.Item>
      </ListGroup>
    </Col>
  );
};

export default Experience;
