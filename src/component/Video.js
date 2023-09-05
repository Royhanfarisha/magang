import { Container } from "react-bootstrap";
import foto1 from '../asset/image/work2.png';
import foto2 from '../asset/image/iPhone.png';

const Video = () => {
    return (
        <div className="video">

            <Container>
                <div className="text-center">
                    <h1>A Video Wedding Greetings</h1>
                    <p className="p">Physicians shouldn't have to choose between meaning and money — you deserve both. Attend gives you the power to easily manage your finances anytime, anywhere no sacrifice necessary.</p>
                    <img src={foto1} className="png" />
                </div>

                <div className="row">
                    <div className="col-6">
                        <h1 className="h1">Viev your invitation card anywhere</h1>
                        <p className="p">Physicians shouldn't have to choose between meaning and money you deserve both. Attend gives you the power to easily manage your finances anytime, anywhere no sacrifice necessary.</p>
                        <button className="button">Learn More</button>
                    </div>

                    <div className="col-6">
                        <img src={foto2} className="fot" />
                    </div>
                </div>
            </Container>

        </div>
    )
}

export default Video;