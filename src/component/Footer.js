import foto from '../asset/image/logoh.png'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='foot'>
                <img src={foto} className='logo' />
                <h1>Creative A Video Wedding Greeting For Loved Ones</h1>
            </div>

            <br></br>

            <div className='title'>
                <div className="row">

                    <div className='col-6'>
                        <div> 
                            <h6 className='h6'>Contact</h6>
                            <p>contact@helloattend.com</p>
                            <p>New York, NY</p>
                        </div>
                    </div>

                    <div className='col-6'>
                         <div className="row">
                             <div className='col-3' >
                                <h6 className='h6'>Company</h6>
                                <p>Solutions</p>
                                <p>Learn</p>
                                <p>Our Mission</p>
                            </div>

                            <div className='col-3'>
                                <h6 className='h6'>Social</h6>
                                <p>Facebook</p>
                                <p>Instagram</p>
                                <p>Twitter</p>
                                <p>Tiktok</p>
                                <p>LinkedIn</p>
                                <p>Reddit</p>
                            </div>

            </div>
                
                     </div>

                </div>
            </div>
            

            <br></br>

            <div className="row">
                <div className="col-4">Copyright 2022 Attend</div>
                <div className="col-4">Privacy Policy</div>
                <div className="col-4">Terms of Service</div>
            </div>
        </div>
    )
}

export default Footer;