import { useState, useRef } from "react";

const Test = () => {
  const [image, setImage] = useState({ file: [] });

  const fileRef = useRef();

  const onChange = () => {
    console.log(fileRef.current.files[0]);
    let file = fileRef.current.files[0];
    if(file){
        const size = parseFloat(file.size / 1024).toFixed(2);
        if (size < 500) {
            const reader = new FileReader();
            const url = reader.readAsDataURL(file);
          reader.onloadend = function (e) {
            setImage({ imgSrc: [reader.result] });
          };
          console.log(url);
        }
        else{
            setImage({ imgSrc: [] })
            alert('Max file size is 500Kb')
            file=[]
        }
    }
   
  };

  return (
    <div>
      <div>
        <form>
          <input ref={fileRef} type="file" name="user[image]" multiple={false} onChange={onChange} accept="image/png, image/gif, image/jpeg" />
        </form>
        {/* Only show first image, for now. */}
        <img src={image.imgSrc} style={{width:"200px"}} alt="img" />
      </div>
    </div>
  );
};

export default Test;
