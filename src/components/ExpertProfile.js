import { useParams } from 'react-router-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import expertsData from './ExpertData.json';
import './expertProfileStyles.css';

export default function ExpertProfile() {
  let { id } = useParams();
  
  const expert = expertsData[id-1];
  const ListLang = expert.Languages.map(lang=>{
    return (<span>{lang}</span>);
  }); 
  
  return (   
    <div className="my-5">
      <Container>
        <Row className="my-5">
          <Col sm={12} md={4}>
            <Card className="h-100">
              <Card.Img className='img-fluid my-5' variant="top" src={expert.imageUrl} alt='img not found'/>
            </Card>
          </Col>
          <Col sm={12} md={8}>
            <Card className="h-100">
              <Card.Body>
                <Card.Title>{expert.Name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{expert.Email}</Card.Subtitle>
                <Card.Text>{expert.Description}</Card.Text>
                <hr />
                <div className='my-4'>
                  <h5>Additional Information</h5>
                  <table>
                    <tbody>
                      <tr>
                        <td>Age:</td>
                        <td>{expert.Age}</td>
                      </tr>
                      <tr>
                        <td>Education:</td>
                        <td>{expert.Education}</td>
                      </tr>
                      <tr>
                        <td>Work:</td>
                        <td>{expert.Work}</td>
                      </tr>
                      <tr>
                        <td>Certificates:</td>
                        <td>{expert.Certificates}</td>
                      </tr>
                      <tr>
                        <td>Languages:</td>
                        <td>{ListLang}</td>
                      </tr>
                      <tr>
                        <td>Availability:</td>
                        <td>{expert.Availability}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Button variant="outline" href="/" >
        🡰 Back to Expert List
        </Button>
      </Container>
    </div>
  );
}