import profilePic from "./assets/profile.jpg"

function Card(){
    return(
        <div className="card">
            <img className="cardImage" alt="profile picture" src={profilePic}></img>
            <h2 className="cardTitle">Adam Two</h2>
            <p className="cardText">I am studying CS and networking. </p>
        </div>
    );
}

export default Card