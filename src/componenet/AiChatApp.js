import React, { useState } from "react";
import axios from "axios";



function AiChatApp() {
    // State to hold the user's input and AI response
    const [inputText, setInputText] = useState("");
    const [responseText, setResponseText] = useState("");
    const [loading, setLoading] = useState(false);

    // Handle input change
    const handleInputChange = (e) => {
        setInputText(e.target.value);
    };

    // Function to call the OpenAI API
    const fetchAIResponse = async () => {
        setLoading(true);
        try {
            const response = await axios.post(
                "https://api.openai.com/v1/completions",
                {
                    model: "text-davinci-003", // Use the appropriate GPT-3 model
                    prompt: inputText,
                    max_tokens: 100, // Adjust based on your needs
                },
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer YOUR_API_KEY`, // Replace with your API Key
                    },
                }
            );
            setResponseText(response.data.choices[0].text);
        } catch (error) {
            console.error("Error fetching AI response:", error);
            setResponseText("Sorry, something went wrong.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contact_section ">
            <h6>DRCN Chatbot</h6>
            <textarea
                value={inputText}
                onChange={handleInputChange}
                placeholder="Ask me anything!"
                rows="4"
                cols="50"
            ></textarea>
            <br />
            <button className="btn-primary" type="submit" onClick={fetchAIResponse} disabled={loading}>
                {loading ? "Thinking..." : "Ask AI"}
            </button>
            <div>
                <h6>Response:</h6>
                <p>{responseText}</p>
            </div>
        </div>
    );
}

export default AiChatApp;
