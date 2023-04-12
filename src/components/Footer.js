import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {
    return (
        <Container>
            <Row>
                <Col xs>about us:
                    Somos una Empresa enfocada en dar las mejores hamburgesas</Col>
                <Col xs={{ order: 12 }}>Social Media:</Col>
                <Col xs={{ order: 1 }}>Contactenos</Col>
            </Row>
        </Container>
    );
}

export default Footer;