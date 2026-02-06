import React, { useState, useRef } from "react";
// import * as tf from "@tensorflow/tfjs";
import * as mobilenet from "@tensorflow-models/mobilenet";
import AiChatApp from './AiChatApp';

function DrcnAI() {
    const [prediction, setPrediction] = useState(null);
    const imageRef = useRef(null); // reference to the image element

    // Load the MobileNet model
    const loadModel = async () => {
        const model = await mobilenet.load();
        return model;
    };

    // Handle image upload and prediction
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        imageRef.current.src = imageUrl;

        const model = await loadModel();
        const predictions = await model.classify(imageRef.current);
        setPrediction(predictions[0]); // Display the top prediction
    };

    return (
        <div className="bg-sectionlist">
            <section className="contact_section " >
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            DRCN AI
                        </h2>
                    </div>
                </div>
            </section>
            <div className="row m-0">
                <div className="col-md-6 text-left">
                    <h6 className="pl-3">AI Image Recognition</h6>
                    <div className="row text-left m-0">
                        <div className="col-md-12">Please choose any image and details of image will be shown below: </div>

                        <div className="col-md-12">
                            <input type="file" accept="image/*" onChange={handleImageUpload} />
                        </div>
                        <div className="col-md-12">
                            <img ref={imageRef} alt="Uploaded" style={{ width: "300px", margin: "10px 0px" }} />
                        </div>



                    </div>
                    {prediction && (
                        <div className="detail-box">
                            <h6>Prediction: <b>{prediction.className}</b></h6>

                            <p>Confidence Level: {prediction.probability.toFixed(2)}</p>
                        </div>
                    )}

                </div>
                <div className="col-md-6">
                    <AiChatApp></AiChatApp>
                </div>
            </div>

        </div>
    );
}

export default DrcnAI;
