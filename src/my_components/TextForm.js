import React, { useState } from "react";

export default function Textform(props) {

    const handleClearClick =()=>
        {
            let newText=" ";
            setText(newText);
            props.showAlert("Text Cleared!!","success");
        }
        const handleSpeakClick = ()=>
            {
                const synth= window.speechSynthesis;
                const utterthis =new SpeechSynthesisUtterance(text);
                synth.speak(utterthis);
                props.showAlert("Wait it will speak now","success");
            }

    const handleLowClick = () => {
        let newtext = text.toLowerCase();
        setText(newtext);
        props.showAlert("Converted to Lower Text","success");

    }
    const handleOnChange = (event) => {
        //  console.log("changed");
        setText(event.target.value);
    };

    const handleUpClick = () => {
        //   console.log("Upper case was clicked "+ text)
        let newtext = text.toUpperCase();
        props.showAlert("Converted to Upper Text","success");
        setText(newtext);
    };

    const [text, setText] = useState(" ");

    return (
        <>
            <div className="container" style={{Color: props.mode==='dark'?'white':'dark'}}>
                <h1>{props.heading}</h1>
                <div class="my-5">
                    <textarea
                        className="form-control" style={{backgroundColor: props.mode==='dark'?'grey':'white'}}
                        value={text}
                        onChange={handleOnChange}
                        placeholder="Enter your text "
                        id="floatingTextarea"
                        rows={8}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-2"  onClick={handleUpClick}>
                    Convert your text to Upper Case
                </button>
                <button className="btn btn-primary mx-2" onClick={handleLowClick}>
                    Convert your text to Lower Case
                </button>
                <button className="btn btn-primary mx-2" onClick={handleSpeakClick}>
                    Speak
                </button>
                <button className="btn btn-primary mx-2" onClick={handleClearClick}>
                    Clear
                </button>
            </div>

            <div className="container my-2">
      <h2>Your text summary</h2>
      <p>{text.split(/\s+/).filter((word) => word.length > 0).length} Words and {text.length} Characters</p>
      <p>Time required to read {0.008 * text.split(/\s+/).filter((word) => word.length > 0).length} Minutes</p>
      <h3>Preview</h3>
      <p>{text.length > 0 ? text : "Enter some text to preview here"}</p>
    </div>
        </>
    );
}



