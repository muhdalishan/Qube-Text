import React from 'react';

export default function Footer(props) {
  return (
    <>
    <br />
    <footer
      className={`text-center text-lg-start bg-${props.darkM} text-${props.darkM === 'light' ? 'dark' : 'light'}`}
      style={{
        position: 'relative',
        left: 0,
        bottom: 0,
        width: '100%',
        padding: '3px 0', // Add some padding for better appearance
        zIndex: 1000 // Ensure the footer appears above other content
      }}
    >
      <div className="text-center p-3" >
        
        © {new Date().getFullYear() } 
        <a 
          href="https://qubeknit.com" 
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'none', color: props.darkM === 'light' ? 'black' : 'white' }}
        >
          {props.companyName ? props.companyName.split('|')[0] : 'Your Company'} 
        </a>
        <span> | </span>
        <a 
          href="https://www.linkedin.com/in/muhdalishan" // Replace with your LinkedIn profile link
          target="_blank" 
          rel="noopener noreferrer" 
          style={{ textDecoration: 'none', color: props.darkM === 'light' ? 'black' : 'white' }}
        >
          {props.companyName ? props.companyName.split('|')[1] : 'Your Name'}
        </a>
        
         
        
      </div>
    </footer>
    </>
  );
}
