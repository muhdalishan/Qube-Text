import React, {useState} from 'react'


export default function TextForm(props) {
  const [text, setText] = useState('');
    // setText("New Text")


  //upper case  
  const handleUpClick=()=>{
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to upper case.","success")
  }
  
  //lowercase
  const handleDownClick=()=>{
      let newText = text.toLowerCase();
      setText(newText)
      props.showAlert("Converted to lower case.","success")

  }
  
  
  //Sentence case
  const handleSentenceClick = () => {
    let newText = text.toLowerCase().charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    setText(newText);
    props.showAlert("Converted to sentance case.","success")

  }
  
  //toogle case
  const handleToggleClick = () => {
    let newText = text.split('').map(char => {
      return char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase();
    }).join('');
    setText(newText);
    props.showAlert("Converted to toogle case.","success")

  }
  
  //word case
  const handleWordCapitalClick = () => {
    let newText = text.toLowerCase().split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
      }).join(' ');
      setText(newText);
      props.showAlert("Converted to word case.","success")

  }

  //Handle Spaces
  const handleESpaceClick =()=>{
    let newText = text.split(/[ ]+/);
    setText (newText.join(" "))
    props.showAlert("Extra Spaces Removed.","success")
    }

  //clear
  const handleClearClick=()=>{
    let newText = " ";
    setText(newText)
    props.showAlert("Text is Cleared","info")

  }

  //copy to clip
  const handleCopyClick = () => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        // Use clipboard API if available
        navigator.clipboard.writeText(text).then(() => {
            props.showAlert("Text copied to clipboard!", "info");
        }).catch(err => {
            props.showAlert("Failed to copy text!", "error");
        });
      } else {
          // Fallback for older browsers or devices (like some mobiles)
          const textarea = document.createElement("textarea");
          textarea.value = text;
          document.body.appendChild(textarea);
          textarea.select();
          try {
              document.execCommand("copy");
              props.showAlert("Text copied to clipboard!", "info");
          } catch (err) {
              props.showAlert("Failed to copy text!", "error");
          }
          document.body.removeChild(textarea);
      }
  };

        
  const handleOnChange=(event)=>{
    setText(event.target.value);
  }

  return (
    <>
    
    <div className="container-sm col-lg-12 " style={{color:props.darkM==='dark'?'white':'black'} }>
        <h3>{props.heading} </h3> 
        <div className="container my-4">
        <textarea  className="form-control" value={text} onChange={handleOnChange} style={{ backgroundColor: props.darkM==='light'?'white':'#212529',color:props.darkM==='dark'?'white':'black'}} id="MyBox" rows="8"/>
        <div id="Help" className="form-text">Enter your text in above box.</div>
         </div>
         <div className="d-flex justify-content-start">
          <button disabled ={text.length===0} className="btn btn-primary me-1 mx-1 w-100 my-1 small-button" onClick={handleUpClick}>UPPER case</button>
          <button disabled ={text.length===0} className="btn btn-primary me-1 mx-1 w-100 my-1 small-button" onClick={handleDownClick}>lower case</button>
          <button disabled ={text.length===0} className="btn btn-success me-1 mx-1 w-100 my-1 small-button" onClick={handleWordCapitalClick}>Word case</button>
          <button disabled ={text.length===0} className="btn btn-success me-1 mx-1 w-100 my-1 small-button" onClick={handleSentenceClick}>Sentence case</button>
        </div>
        <div className="d-flex justify-content-start">
          <button disabled ={text.length===0} className="btn btn-info me-1 mx-1 w-100 my-1 small-button" onClick={handleToggleClick}>tOOGLE case</button>
          <button disabled ={text.length===0} className="btn btn-info me-1 mx-1 w-100 my-1 small-button" onClick={handleESpaceClick}>Trim spaces</button>
          <button disabled ={text.length===0} className="btn btn-warning me-1 w-100 my-1 small-button" onClick={handleClearClick}>Clear</button>
          <button disabled ={text.length===0} className="btn btn-warning me-1 w-100 my-1 small-button" onClick={handleCopyClick}>Copy</button>
        </div>

         
         {/* <div className="d-flex justify-content-end">
         <button className="btn btn-warning me-2  my-4" onClick={handleClearClick}>Clear</button>
         <button className="btn btn-warning me-2 my-4" onClick={handleCopyClick}>Copy</button>
         </div> */}
    </div>
    
   

  <div className="container my-4 mx-6">
    <p>
      <button 
        className="btn btn-outline-secondary" 
        type="button" 
        data-bs-toggle="collapse" 
        data-bs-target="#collapseExample" 
        aria-expanded="true" 
        aria-controls="collapseExample"
      >
        Preview Text Summary
      </button>
    </p>
    
    <div className="collapse show" id="collapseExample"> 
      <div 
        className="card card-body" 
        style={{ 
          backgroundColor: props.darkM === 'light' ? 'white' : '#212529', 
          color: props.darkM === 'dark' ? 'white' : 'black' 
        }}
      >
        <h3 className="card-title">Text Summary</h3>
        <hr />
        <p>{text ? text.trim().split(/\s+/).filter(word => /^[A-Za-z]+$/.test(word)).length : 0} words </p>
        <p>{text ? text.trim().split('').filter((element) => element.length !== 0).length : 0} characters</p>
        <p>{text ? (0.005 * text.trim().split(/\s+/).filter(word => /^[A-Za-z]+$/.test(word)).length).toFixed(2) : 0} Minutes Average Read Time</p>
        
        <h3 className="card-title">Text Preview</h3>
        <hr />
        <p>{text.length > 0 ? text : "Nothing to preview!"}</p>
        
      </div>
    </div>
  </div>


    </>
  )
}


