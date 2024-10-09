import React from 'react';

export default function About(props) {
  return (
    <>
    
      <div className="container" style={{ color: props.darkM === 'dark' ? 'white' : 'black' }}>
        <h1>About</h1>
        <hr />
        
        <h4><b>QubeText:</b> Your Comprehensive Text Utility Solution</h4>
        <p>
          QubeText is a modern, versatile, and user-friendly text utility application tailored to meet the needs of anyone looking to efficiently manipulate and manage text. Whether you're a student, writer, coder, or content creator, this app offers a range of robust features to transform your text in just a few clicks, providing a streamlined experience for various text-editing tasks.
        </p>
        
        <h4>Key Features:</h4>
        <div className="container my-4 mx-2">
          <p>
            <button
              className="btn btn-outline-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              Text Formatting Options:
            </button>
          </p>
          <div className="collapse" id="collapseExample">
            <div className="card card-body" style={{ backgroundColor: props.darkM === 'light' ? 'white' : '#212529', color: props.darkM === 'dark' ? 'white' : 'black' }}>
              <h5>Text Formatting Options:</h5>
              <hr />
              <p>
                <b>UPPER CASE:</b> Instantly convert all the text into uppercase letters. This is especially useful for headings, titles, or whenever emphasis is needed in written content.
                <br />
                <br />
                <b>lower case:</b> Switch all text to lowercase, ideal for consistency in documents or casual messages.
                <br />
                <br />
                <b>Word Case:</b> Capitalizes the first letter of each word in the text. This feature is beneficial for formatting titles, headers, or names.
                <br />
                <br />
                <b>Sentence case:</b> Converts text into sentence case, where only the first letter of each sentence is capitalized. It's perfect for cleaning up improperly capitalized content and enhancing readability.
                <br />
                <br />
                <b>tOOGLE cASE:</b> Flips the case of every character, turning uppercase letters into lowercase and vice versa. This can be fun for stylistic purposes or adding a unique twist to text.
              </p>
            </div>
          </div>
        </div>

        <div className="container my-4 mx-2">
          <p>
            <button
              className="btn btn-outline-secondary"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseAdditionalTools"
              aria-expanded="false"
              aria-controls="collapseAdditionalTools"
            >
              Additional Tools:
            </button>
          </p>
          <div className="collapse" id="collapseAdditionalTools">
            <div className="card card-body" style={{ backgroundColor: props.darkM === 'light' ? 'white' : '#212529', color: props.darkM === 'dark' ? 'white' : 'black' }}>
              <h5>Additional Tools:</h5>
              <hr />
              <p>
                <b>Remove Extra Spaces:</b> Automatically clean up your text by removing any unnecessary or excessive spaces between words or sentences. This ensures neat and tidy text, especially useful when pasting from various sources.
                <br />
                <br />
                <b>Clear Text:</b> With a single click, you can clear the entire text box, allowing you to start fresh without manually deleting content.
                <br />
                <br />
                <b>Copy Text:</b> After editing, quickly copy your formatted text to the clipboard with one click, ready for use elsewhere without any hassle.
              </p>
            </div>
          </div>
        </div>

        <br />
        <h5>Summary:</h5>
        <hr />
        <p>
          QubeText is a go-to tool for anyone needing fast, reliable text formatting and manipulation. Its real-time text processing, combined with a clean, accessible interface and dark/light mode option, makes it suitable for various environments and text-related tasks. This web app eliminates the need for cumbersome, manual text formatting tasks, allowing users to focus on content rather than mechanics.
          <br />
          <br />
          Whether you're managing professional documents, social media posts, or personal notes, QubeText simplifies the process with its straightforward design and powerful tools.
        </p>
      </div>
    </>
  );
}
