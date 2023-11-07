import rasm from "../img/diy-woman-2021-09-24-03-38-11-utc (2).png"
import rasm1 from "../img/Rectangle 203.png"
function News() {
    return (
        <div className="news">

            <div className="pageNews">
                <b>News</b>
                <p>Consigli, tutorial e curiosità sull'universo del Cucito e Filato fai da te</p>
            </div>
            <h1>In evidenza</h1>
            <hr />

            <div className="twoSection">
                <div className="section">
                    <img src={rasm} alt="" />
                    <div className="wordSection">
                        <p>Lorem, ipsum.</p>
                        <h3>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit.</h3>
                        <p>Di Angela Rossi</p>
                        <button>Scopri di più</button>
                    </div>
                </div>

                <div className="smallSection">
                    <img src={rasm1} alt="" />
                    <div className="wordSection1">
                        <h3>Lorem, ipsum.</h3>
                        <p>Lorem ipsum dolor sit amet.</p>
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <h3>di Lorem ipsum</h3>
                        <button>Scopri di più</button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default News;