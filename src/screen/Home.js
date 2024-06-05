import Navbar from "../components/Navbar";
import React from "react";
import Card from "../components/Card"
import Footer from "../components/Footer";
import Carousal from "../components/carousal";
function Home() {
    return (
        <div>
            <div>
                <Navbar />
            </div>
            <div><Carousal/></div>
            <div className="m3">
                <Card />
                <Card/>
                <Card/>
                <Card/>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}

export default Home;



