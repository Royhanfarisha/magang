import { Container } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';

const Ask = () => {
    return (
        <div className='ask'>
            <Container>
                <div className='ask-title'>
                    <h1 className='h1'>Frequently Ask Questions</h1>
                    <p>Feel late to the game of financial education? You're not alone. Attend breaks it down, makes it easy and gives you confidence that your financial future is in good hands — yours.</p>
                </div>

                <div>
                    <Accordion defaultActiveKey="0">

                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Questions Text Raight here</Accordion.Header>
                            <Accordion.Body>
                            Feel late to the game of financial education? You're not alone. Attend breaks it down, makes it easy and gives you confidence that your financial future is in good hands — yours.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Questions Text Raight here</Accordion.Header>
                            <Accordion.Body>
                            Feel late to the game of financial education? You're not alone. Attend breaks it down, makes it easy and gives you confidence that your financial future is in good hands — yours.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>Questions Text Raight here</Accordion.Header>
                            <Accordion.Body>
                            Feel late to the game of financial education? You're not alone. Attend breaks it down, makes it easy and gives you confidence that your financial future is in good hands — yours.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Questions Text Raight here</Accordion.Header>
                            <Accordion.Body>
                            Feel late to the game of financial education? You're not alone. Attend breaks it down, makes it easy and gives you confidence that your financial future is in good hands — yours.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="4">
                            <Accordion.Header>Questions Text Raight here</Accordion.Header>
                            <Accordion.Body>
                            Feel late to the game of financial education? You're not alone. Attend breaks it down, makes it easy and gives you confidence that your financial future is in good hands — yours.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </Container>
            
        </div>
    )
}

export default Ask;