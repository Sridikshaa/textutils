import React,{useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked"+text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Text converted to Uppercase","success")
    }
    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to Lowercase","success")
    }
    const handleClearClick = ()=>{
        let newText = "";
        setText(newText);
        props.showAlert("Text is cleared","warning")
    }
    const handleTitleClick = ()=>{
        const titleCase = (str) => {
            let words = str.split(/\s+/);
            let capitalizedWords = words.map(word => {
              return word.charAt(0).toUpperCase() + word.slice(1);
            });
            return capitalizedWords.join(" ");
          };
        setText(titleCase(text));
        props.showAlert("Text converted to Titlecase","success")
    }

    const handleBoldClick = () => {
        setBold(!bold);
        props.showAlert("Text converted to Bold","success")
      };


    const handleOnChange = (event)=>{
        // console.log("On Change");
        setText(event.target.value)
    }

    // const countWords = (str) => {
    //     // Remove trailing spaces
    //     str = str.trim();
    //     if (!str) return 0; // If the string is empty, return 0
    //     // Count words without spaces
    //     return str.split(/\s+/).filter(Boolean).length;
    //   };

      const handleCopy = ()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text successfully copied","success")
      }

      const handleExtraSpaces = () =>{
        let newText = text.split(/\s+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces are removed","success")
      }

    const [text,setText]=useState('');
    const [bold, setBold] = useState(false);

  return (
    <>
    <div className='container' style={{color: props.mode ==='dark'?'white':'#042743'}}>
    <h2 className='mb-4'>{props.heading}</h2>
    <div className="mb-3">
    <textarea className="form-control" id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#053257':'white', color: props.mode ==='dark'?'white':'#042743'}} value={text} rows="8"></textarea>
    </div>
    <button disabled={text.length===0} className="btn btn-primary mx-1" style={{cursor:'pointer'}} onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" style={{cursor:'pointer'}} onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" style={{cursor:'pointer'}} onClick={handleClearClick}>Clear Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" style={{cursor:'pointer'}} onClick={handleTitleClick}>Convert to Titlecase</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" style={{cursor:'pointer'}} onClick={handleBoldClick}>{bold ? 'Remove Bold' : 'Convert to Bold'}</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" style={{cursor:'pointer'}} onClick={handleCopy}>Copy Text</button>
    <button disabled={text.length===0} className="btn btn-primary mx-1" style={{cursor:'pointer'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
  </div>
  <div className="container my-4" style={{color: props.mode ==='dark'?'white':'#042743'}}>
    <h3>Your text summary</h3>
    <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
    <p>{0.009 * text.split(/\s+/).filter((element)=>{return element.length!==0}).length} minutes to read</p>
    <h3>Preview</h3>
    <p style={{ opacity: text.length === 0 ? '0.5' : '1',fontWeight: bold ? 'bold' : 'normal' }}>{text.length>0?text:"Nothing to preview"}</p>
  </div>
  </>
  )
}
