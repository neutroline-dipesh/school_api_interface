import React, {Component} from 'react';
import Gallery from 'react-grid-gallery';
import gallerydata from './gallerydata.json';

class GalleryPhotos extends Component{
    render(){
        const IMAGES = gallerydata.images;
        return(
            <div class="container">
                <Gallery images={IMAGES}/>
            </div>
        )
    }
        
}

export default GalleryPhotos;
