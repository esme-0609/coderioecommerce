import React, {Component} from "react";
import banner from '../assets/images/banner-ecommerce.jpg';

class BannerHome extends Component{
    
    render(){
        return(
            <img
            src={banner}
            alt=""
            className="w-screen"
          />
        );
    }
}

export default BannerHome;
