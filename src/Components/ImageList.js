import Imageİtem from "./Imageİtem";

function ImageList({imagesPlaceholder}){
    return (<div className="imageList">
        {imagesPlaceholder.map((image,index)=>{
            return <Imageİtem key={index} image={image}/>;
        })}
    </div>)
}

export default ImageList;