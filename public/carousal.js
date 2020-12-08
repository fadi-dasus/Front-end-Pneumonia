import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

export default function CarouselComponent() {
    return (
        <div class="carousel-wrapper">
            <Carousel infiniteLoop useKeyboardArrows autoPlay>
                <div style={{ height: "300px" }}>
                    <img src="../assets/lung1.jpg" />
                </div>
                <div style={{ height: "300px" }}>
                    <img src="../assets/lung2.jpg" />
                </div>
                <div style={{ height: "300px"}}>
                    <img src="../assets/lung3.jpg" />
                </div>
            </Carousel>
        </div>
    );
}
