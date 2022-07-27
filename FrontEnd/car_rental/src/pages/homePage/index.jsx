import React, {useState} from "react";
import Slider from "../../components/slider";
import DefaultNavbarComp from "../../components/defaultNavbarComp";
import Cars from "../cars";
import {MDBFooter} from "mdbreact";
import Footer from "../../components/footer";



function HomePage(){

    return(
        <div>
            <DefaultNavbarComp/>
            <Slider/>
            <Cars/>
        </div>
    );
}

export default HomePage;