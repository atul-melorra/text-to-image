import Head from "next/head";
import Image from "next/image";
import NavBar from "../component/Navbar";
import Input from "../component/Input";
import axios from "axios";
import { useEffect, useState } from "react";
import { BounceLoader } from "react-spinners";
import { Button, Row ,Col, Form} from "react-bootstrap";
import CheckExample from "../component/CheckBox";
let API_URL = `http://northcarolina-a.tensordockmarketplace.com:9000`;

export default function Home() {
  const [keyWord, setKeyWord] = useState("");
  const [imgUrl, setImgURl] = useState("");
  console.log("🚀 ~ file: index.js ~ line 13 ~ Home ~ imgUrl", imgUrl);
  const [loading, setloading] = useState(false);
  const generateImage = async (id) => {
    try {
      let blob = await axios.get(`${API_URL}/download/${id}`, {
        responseType: "blob",
      });
      let blobURL = URL.createObjectURL(blob.data);
      setImgURl(blobURL);
      setloading(false);
      setKeyWord("")
    } catch (error) {
      setloading(false);
    }
  };
  const generateImageID = () => {
    setImgURl("");
    setloading(true);
    axios
      .post(`${API_URL}/generate`, { prompt: keyWord, scale: 7.5, steps: 50, seed: 0 })
      .then((res) => {
        console.log("🚀 ~ file: index.js ~ line 19 ~ .then ~ res", res);
        generateImage(res.data.download_id);
      })
      .catch((err) => {
        setloading(false);
      });
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="text-center my-3">
          <h1>Text to Image Converter</h1>
          <small>By using artificial intelligence and Machine Learning</small>
        </div>
        <Input loading={loading} value={keyWord} generateImage={generateImageID} setValue={setKeyWord} />
        <div className="text-center" style={{ position: "absolute", marginLeft: "41%", marginTop: "5%" }}>
          {loading ? <BounceLoader style={{ margin: "auto" }} className="mt-3 text-center" color="#ff8d6d" /> : ""}
        </div>
        <Row>
          <Col md="3" className="d-none d-sm-block">
            <p>Colors</p>
              {["Yellow", "White", "Rose", "Multiple"].map((el) => {
                return <Form.Check onClick={(e)=>setKeyWord((prevVal)=>prevVal+" "+e.target.value)}  value={el} type={"radio"} name={"color"} label={el}  id={`default-${el}`} />;
              })}
              <br/>
               <p>Jewellery Types</p>
              {["Gold", "Diamond", "Gemstone"].map((el) => {
                return <Form.Check onClick={(e)=>setKeyWord((prevVal)=>prevVal+" "+e.target.value)}  value={el} type={"radio"} name={"color"} label={el}  id={`default-${el}`} />;
              })}
              <br/>
               <p>Cateory</p>
              {["Rings", "Pendants", "Bracelets","Necklaces",'Bangles',"Chains","Nose Pins",'Waist Chains','Coins'].map((el) => {
                return <Form.Check onClick={(e)=>setKeyWord((prevVal)=>prevVal+" "+e.target.value)}  value={el} type={"radio"} name={"color"} label={el}  id={`default-${el}`} />;
              })}
              <br/>
               <p>Cateory</p>
              {["Regular Rings", "Flexible Bracelets", "Drops","Round Bangles",'Wide Rings',"Studs","Short Necklaces",'Chokers','Open Top Bangles'].map((el) => {
                return <Form.Check onClick={(e)=>setKeyWord((prevVal)=>prevVal+" "+e.target.value)}  value={el} type={"radio"} name={"color"} label={el}  id={`default-${el}`} />;
              })}
              <br/>
               <p>Occasions</p>
              {["Casual", "Party", "Work","Traditionals"].map((el) => {
                return <Form.Check onClick={(e)=>setKeyWord((prevVal)=>prevVal+" "+e.target.value)}  value={el} type={"radio"} name={"color"} label={el}  id={`default-${el}`} />;
              })}
          </Col>
          <Col md="9">
            <div style={{ marginTop: "4rem" }}>
              {imgUrl && <img src={imgUrl} alt={"imageurl"} />}
              {imgUrl && (
                <p className="mt-3">
                  <Button style={{ background: "#ff8d6d", color: "black", border: "none" }}>
                    <a href={imgUrl} download>
                      Download Image
                    </a>
                  </Button>
                </p>
              )}
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}
