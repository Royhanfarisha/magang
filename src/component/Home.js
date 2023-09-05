import { Container } from 'react-bootstrap';
import images from '../asset/image/home1.png';
import images1 from '../asset/image/home2.png';
const Home = () => {
    return (
        <Container>
            <div className="row">

                <div className="col-6 ">
                    <div className='home'>
                        <h1 className='title-h1'>Create a video wedding for loved</h1>
                        <p className='title-p'>Meet the modern finance platform created for physicians, by physicians. Your path to financial independence is here.</p>
                        <button className='btn'>Get started</button>
                    </div>
                    
                </div>
                <div className="col-6">
                <img alt="" src={images} className="img"/>
                </div>
                
            </div>
        
            <div className='gam'>
                <img alt="" src={images1} className='ga'/>
            
            </div>
            
            
        </Container>
    )
}

export default Home;