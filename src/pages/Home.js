import lola from "../img/diy-woman-2021-09-24-03-38-11-utc (1).png";
import flowers from "../img/Box slider.png"
function Home() {
    return (
        <div className="card">
            {/* home pages */}
            <img src={lola} alt="" />
            <h2>Lorem ipsum dolor sit amet,<br /> consectetur adipisci elit, sed <br /> do eiusmod </h2>
            <h3>Lorem ipsum dolor sit amet, consectetur adipisci elit, sed do eiusmod </h3>
            <div className="box">
                    <img src={flowers} alt="" />
                    <img src={flowers} alt="" />
                    {/* <img src={flowers} alt="" /> */}
            </div>
        </div>
    );
}

export default Home;