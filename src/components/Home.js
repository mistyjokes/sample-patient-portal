import React, {Component} from "react";
import "../Home.css"
import Header from "./Header";
import VerticalNav from "./VertcialNav";
import star from "../star.png";

class Home extends Component {
    


    render(){
        return(
            <div>
                <Header />
                <VerticalNav />
                <div className="home-container">
                    <h1 style={{fontFamily:"cursive"}}>Welcome to your portal!</h1>

                     <br/> <br/>

                    <p style={{fontFamily:"'Courier New', Courier, monospace",color:"gray"}}>
                       <b> For now, you are only able to view and set up appointments. </b>
                    </p>
                    <p style={{fontFamily:"'Courier New', Courier, monospace",color:"gray"}}>
                        <b> New featutes coming soon. Stay tuned! </b>
                    </p>

                    <br/> <br/>
                    <br/> <br/>

                    <div>
                        <img className="App-logo" src={star} alt="App-logo" />

                    </div>

                    
                </div>

            </div>

        );
        
    }
}
export default Home;