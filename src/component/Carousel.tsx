import {useState} from "react";

const IMAGE_1_URL ="https://images.unsplash.com/photo-1682687982183-c2937a74257c?auto=format&fit=crop&q=80&w=2071&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const IMAGE_2_URL ="https://plus.unsplash.com/premium_photo-1695925077080-dbfc7441a64b?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
const IMAGE_3_URL ="https://images.unsplash.com/photo-1696986681606-b156ccd761c5?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"


export default function Carousel() {
    const [activeImage,setActiveImage] = useState(1);

    return (
        <div>
            <div className="carousel">
                <ul className="carousel__slides">
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-1"
                        checked={activeImage === 1}
                        readOnly
                    />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img src={IMAGE_1_URL} alt="scenery 1"/>
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={()=>setActiveImage(3)}
                                className="carousel__slide-prev">
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={()=>setActiveImage(2)}
                                className="carousel__slide-next">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-1"
                        checked={activeImage === 2}
                        readOnly
                    />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img src={IMAGE_2_URL} alt="scenery 2"/>
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={()=>setActiveImage(2)}
                                className="carousel__slide-prev">
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={()=>setActiveImage(1)}
                                className="carousel__slide-next">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <input
                        type="radio"
                        name="radio-buttons"
                        id="img-1"
                        checked={activeImage === 3}
                        readOnly
                    />
                    <li className="carousel__slide-container">
                        <div className="carousel__slide-img">
                            <img src={IMAGE_3_URL} alt="scenery 3"/>
                        </div>
                        <div className="carousel__controls">
                            <label
                                onClick={()=>setActiveImage(1)}
                                className="carousel__slide-prev">
                                <span>&lsaquo;</span>
                            </label>
                            <label
                                onClick={()=>setActiveImage(2)}
                                className="carousel__slide-next">
                                <span>&rsaquo;</span>
                            </label>
                        </div>
                    </li>
                    <div className="carousel__dots">
                        <label
                            onClick={()=>setActiveImage(1)}
                            className="carousel__dot"
                            id="img-dot-1"
                        ></label>
                        <label
                            onClick={()=>setActiveImage(2)}
                            className="carousel__dot"
                            id="img-dot-2"
                        ></label>
                        <label
                            onClick={()=>setActiveImage(3)}
                            className="carousel__dot"
                            id="img-dot-3"
                        ></label>
                    </div>
                </ul>
            </div>
        </div>
    )
}