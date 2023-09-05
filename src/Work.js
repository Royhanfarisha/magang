import {Container } from 'react-bootstrap';
import {BsFillCreditCardFill, BsFillCaretRightSquareFill, BsFillFilePersonFill} from 'react-icons/bs';
import image1 from '../src/asset/image/work1.png';


const Work = () => {
    return (
        
            <div className="work">
                <Container>

                <div>
                        <h1>How it Work</h1>
                        <p className='p'>Doctors make so many sacrifices for the greater good, including their own financial wellbeing. Attend is a comprehensive digital finance platform designed to change that. Now you can take care of yourself as well as you take care of your patients.</p>
                </div>

                    <div className="row">

                    <div className="col-4">
                            <div>
                                <BsFillFilePersonFill size='5rem' color='#F1EABA' />
                                <p className='text-icon'>Create Account</p>
                            </div>
                        </div>
                        
                        <div className="col-4">
                            <div>
                                <BsFillCaretRightSquareFill size='5rem' color='#F1EABA' />
                                <p className='text-icon'>Find A Demo Video</p>
                            </div>
                        </div>

                        <div className="col-4">
                            <div>
                                <BsFillCreditCardFill size='5.2rem' color='#F1EABA' />
                                <p className='text-icon'>Completed With Payment</p>
                            </div>
                        </div>

                    </div>

                    <div>
                        <div className='image1'>
                            <img src={image1} className='gambar' />
                        </div>
                    </div>
                    
                </Container>

                    
            </div>
      
        
    )
}

export default Work;