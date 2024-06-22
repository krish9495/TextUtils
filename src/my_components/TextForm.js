import React, { useState } from "react";

export default function Textform(props) {
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Text Cleared!!", "success");
    }

    const handleSpeakClick = () => {
        const synth = window.speechSynthesis;
        const utterThis = new SpeechSynthesisUtterance(text);
        synth.speak(utterThis);
        props.showAlert("Wait it will speak now", "success");
    }

    const handleLowClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lower Text", "success");
    }

    const handleOnChange = (event) => {
        setText(event.target.value);
    };

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        props.showAlert("Converted to Upper Text", "success");
        setText(newText);
    };

    const [text, setText] = useState("");

    const textColor = props.mode === 'dark' ? 'white' : '#042743';
    const bgColor = props.mode === 'dark' ? 'grey' : 'white';

    return (
        <>
            <div className="container" style={{ color: textColor }}>
                <h1>{props.heading}</h1>
                <div className="my-3">
                    <textarea
                        className="form-control"
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'lightblue' : 'bgColor',
                            color: props.mode === 'dark' ? 'black' : 'textColor'
                          }}
                          
                        value={text}
                        onChange={handleOnChange}
                        placeholder="Enter your text"
                        id="floatingTextarea"
                        rows={8}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2 my-1" onClick={handleUpClick}>
                    Convert your text to Upper Case
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleLowClick}>
                    Convert your text to Lower Case
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleSpeakClick}>
                    Speak
                </button>
                <button className="btn btn-primary mx-2 my-1" onClick={handleClearClick}>
                    Clear
                </button>
            </div>

            <div className="container my-2">
                <h2 style={{ color: textColor }}>Your text summary</h2>
                <p style={{ color: textColor }}>{text.split(" ").filter((element) => element.length !== 0).length} Words and {text.length} Characters</p>
                <p style={{ color: textColor }}>Time required to read {0.008 * text.split(/\s+/).filter((word) => word.length > 0).length} Minutes</p>
                <h3 style={{ color: textColor }}>Preview</h3>
                <p style={{ color: textColor }}>{text.length > 0 ? text : "Enter some text to preview here"}</p>
            </div>
        </>
    );
}
