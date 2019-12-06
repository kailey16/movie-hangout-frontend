import React from "react"
import '../sergio-styles/about-page.css'
import Picture from '../style/yoda.png'
import { Link } from 'react-router-dom'

class About extends React.Component {
    render(){
        return (
            <div className="about-page-container">
                <div className="about-page-card">
                    <div className="api-container">
                        <div className="api-image">
                             <img className="logo-pic" alt="the movie db logo" src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"></img>
                        </div>
                       
                        <div className="api-text">
                        The Movie DB API was used for the movie data.
                        <br></br>
                        <br></br>
                        "This product uses the TMDb API but is not endorsed or certified by TMDb."
                        </div>
                    </div>

                    <div className="built-container">
                        <div className ="build-img-container">
                            <img alt="ruby logo" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Ruby_on_Rails-logo.png"></img>

                            <img alt="react logo" src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"></img>
                        </div>

                        <div className="buld-text-container">
                           website was built using rails backend and react front end 
                        </div>
                    </div>

         
                    <div className="creators-container">
       
                        <h2> Project built by
                            
                            <a // eslint-disable-next-line
                            href="https://github.com/kailey16">
                            Kailey Lee
                            </a>  
                            and 
                            <a // eslint-disable-next-line
                            href="https://github.com/Nihaprezz">
                            Sergio Perez 
                            </a>
                        </h2>
                    </div>
 

                    <div className="meme-img-container"> 
                        <img alt="yoda meme" src={Picture}>
                        </img>

                     </div>

                    <Link className="ui green button aboutHomeBtn" to="/">Go Home</Link>

                </div>
            </div>
        )
    }
}

export default About