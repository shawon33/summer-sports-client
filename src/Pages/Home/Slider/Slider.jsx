import React from 'react';
import img1 from '../../../photo/slider/photo1 (2).jpg'
import img2 from '../../../photo/slider/photo2 (2).jpg'
import img3 from '../../../photo/slider/photo3 (2).jpg'
import img4 from '../../../photo/slider/photo4 (2).jpg'
import img5 from '../../../photo/slider/photo5 (2).jpg'
import img6 from '../../../photo/slider/photo6 (2).jpg'


const Slider = () => {
    return (
        <div className='mt-12 mb-12'>
             <div className='text-center font-bold p-3 text-3xl  text-yellow-500' >
                <h1 className='text-5xl text-pink-600 pb-2'>WelCome To our Sports Academy Ltd.</h1>
                <hr className='md:h-3 bg-red-200 sm:'/>
              
                <progress className="progress w-56"></progress>
                <progress className="progress w-56"></progress>
            
                <p>Join to us for Learn Extracurricular Activities </p>
                <p>For Good Health, Fresh Mind and Skill Development </p>
             </div>
            <div className="carousel w-full md:h-screen" >
                <div id="slide1" className="carousel-item relative w-full">
                    <img src={img1} className="w-full  h-auto" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img src={img2} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img src={img3} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img src={img4} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide5" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide5" className="carousel-item relative w-full">
                    <img src={img5} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide6" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide6" className="carousel-item relative w-full">
                    <img src={img6} className="w-full" />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide5" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;