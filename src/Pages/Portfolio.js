import React from 'react';
import Gallery from "react-grid-gallery";
import imageSlide from "../Components/Data";

class Portfolio extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            images: this.props.images
        };

    }

    render () {return (
        <div className="container p-6 mx-auto">
            <h1 className="headings text-4xl">Portfolio</h1>
            <p>
                Here is a sample of what I can do using my knowledge in Blender3D and image editing tools like Adobe Photoshop and Illustrator. I will be updating this with time.
            </p>
            <div className="w-full h-auto overflow-hidden block bg-gray-100">
                <Gallery images={imageSlide.artWorks} enableLightbox={true} enableImageSelection={false} />
            </div>
            <p className="text-center mt-4">More will be coming!</p>
        </div>
    );}
    
}

export default Portfolio
