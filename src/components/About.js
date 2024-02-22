import React from "react";


export default function About(props) {

    // const [myStyle, setMyStyle] = useState({
    //     color: "black",
    //     backgroundColor: "white"
    // })
    // const [btnText, setBtnText] = useState("Enable Dark Mode");

    // const toggleStyle = () => {
    //     if (myStyle.color === "black") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor: "black",
    //             border: "1px solid white"
    //         })
    //         setBtnText("Enable Light Mode")
    //     } else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor: "white"
    //         })
    //         setBtnText("Enable Dark Mode")

    //     }
    // }

    function getColor(mode) {
  switch (mode) {
    case 'primary':
      return '#007bff'; // Example primary color
    case 'danger':
      return '#dc3545'; // Example danger color
    case 'warning':
      return '#ffc107'; // Example warning color
    case 'success':
      return '#28a745'; // Example success color
    default:
      return 'white'; // Default background color
  }
}


    let myStyle =
    {
        color: props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode === 'dark'?'#053257':'white',
        
    }

    return (
        <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>

            <h2 className="my-4">About Us</h2>
            <div className="accordion" id="accordionExample" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: getColor(props.mode) }}>
                <div className="accordion-item" style={{ color: props.mode === 'dark' ? 'white' : 'black', backgroundColor: getColor(props.mode) }}>
                    <h2 className="accordion-header" id="headingOne">
                        <button
                            className="accordion-button"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                        >
                            <strong>Analyze Your Text</strong>
                        </button>
                    </h2>
                    <div
                        id="collapseOne"
                        className="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                        TextUtils gives you a way to analyze your text quickly. Be it word count or character count
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingTwo">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                        >
                           <strong>Free to Use</strong> 
                        </button>
                    </h2>
                    <div
                        id="collapseTwo"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                        TextUtils is a free character counter tool that provides instant word count or character count statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item" >
                    <h2 className="accordion-header" id="headingThree">
                        <button
                            className="accordion-button collapsed"
                            style={myStyle}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                        >
                            <strong>Browser Compatibility</strong> 
                        </button>
                    </h2>
                    <div
                        id="collapseThree"
                        className="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                    >
                        <div className="accordion-body" style={myStyle}>
                        This word counter software works any web browsers, such as Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, etc. It suits to count characters in Facebook, Blog, Books, Excel document, PDF Document, etc.
                        </div>
                    </div>
                </div>
            </div>
            {/* <div className="container my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">
                    {btnText}
                </button>
            </div> */}
        </div>

    );
}
