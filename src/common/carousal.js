import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay showThumbs = {false}>
                <div style={{ height: "800px" }}>
                    <img src="../lung1.jpg" />
                </div>
                <div style={{ height: "800px" }}>
                    <img src="../lung2.jpg" />
                </div>
                <div style={{ height: "800px"}}>
                    <img src="../lung3.jpg" />
                </div>
            </Carousel>
        </div>
    );
}
