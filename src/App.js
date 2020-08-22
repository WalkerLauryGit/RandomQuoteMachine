import React from 'react';
import './App.css';
import QuoteContainer from './components/QuoteContainer';

function App() {



  return (
    
    <div className="App">
      
      <div id="quote-box">
        <QuoteContainer/>
        
        <div id="social">
          <a target='_blank' rel="noopener noreferrer" href='https://twitter.com/intent/tweet'>Tweet this quote</a>
        </div>
      </div>
    </div>
  );
}

export default App;
