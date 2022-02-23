import React, {useState, useEffect } from 'react'
const theimage = "https://picsum.photos/200";

export const AddPreset = () => {

    const [img, setImg] = useState();
    // const [addImg, setAddImg] = useState([]);
  
    const fetchImage = async () => {
      const res = await fetch(theimage);
      const imageBlob = await res.blob();
      const imageObjectURL = URL.createObjectURL(imageBlob);
      setImg(imageObjectURL);
    };
  
    useEffect(() => {
      fetchImage();
    }, []);

  return (
    <div className="getimage">
        <img className="onload" src={img} alt="" />
    </div>
  )
};