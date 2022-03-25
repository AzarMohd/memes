import React from "react";
import { useEffect,useState } from "react";

const Main = ()=>{
    // console.log("..HI");
    const [InputText,setInputText]=useState({
        firsttextbox:"",
        secondtextbox:""
    })
    const[randomImage,setRandomImage]=useState(
        "https://i.imgflip.com/1bij.jpg",
    )
    const[allImg,setAllImage]=useState([]);
    const handleChange=(e)=>{
        setInputText({
            ...InputText,
            [e.target.name]:e.target.value
        })
    }
    useEffect(()=>{
        // console.log("useEffect Called");
        fetch(" https://api.imgflip.com/get_memes")
        .then(response=>response.json())
        .then(res=>setAllImage(res.data.memes))
    },[])

    const HandleSubmit=(e)=>{
        console.log("Submit button is clicked");
    
    e.preventDefault();
    console.log("Image count::::",allImg.length);//Take count of image from api
const rnum = Math.random()
console.log("Random Value gene::::",rnum);
const num = Math.floor(rnum*allImg.length)//pick any random  image
console.log(num);
const randleImage = allImg[num].url;
console.log(randleImage);
setRandomImage(randleImage);
    }

    return(
        <div className="container">
            <form onSubmit={HandleSubmit} className="box">
                <input type="text" name="firsttextbox" placeholder="Add text here" 
                className="box1" value={InputText.firsttextbox} onChange={handleChange}>
                </input>
                <input type="text" name="secondtextbox" placeholder="Add text here" 
                className="box2" value={InputText.secondtextbox} onChange={handleChange}>
                </input>
                <button className="button">Generate Meme</button>
            </form>
            <div className="meme">
                   <img src={randomImage} alt="" />
                  <h2 className="top-1">{InputText.firsttextbox}</h2>
                  <h2 className="top-2">{InputText.secondtextbox}</h2>
            </div>
        </div>
    )
}
export default Main; 