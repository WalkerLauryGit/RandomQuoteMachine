import React, { Component } from 'react'
import {quotes} from '../quotes'
import '../App.css'

export default class QuoteContainer extends Component {
    
    constructor(props){
        super(props)

        this.state = {
            quote: quotes[Math.floor(Math.random() * quotes.length)].quote,
            author: quotes[Math.floor(Math.random() * quotes.length)].author,
        }
        
        
    }

     newQuote = () => {
        this.setState({
            quote:quotes[Math.floor(Math.random() * quotes.length)].quote,
            author: quotes[Math.floor(Math.random() * quotes.length)].author,
        })
    }

    render() {
        return (
    <div>
        <div id="quote">
          <p id="text">{this.state.quote}</p>
          <p id="author">{this.state.author}</p>
          </div>
          <div>
          <button id="new-quote" onClick={this.newQuote.bind(this)}>New Quote</button>
          </div>
        <div id="social">
          <a target='_blank' rel="noopener noreferrer" href={'https://twitter.com/intent/tweet?text=' + this.state.quote + this.state.author}>Tweet this quote</a>
        </div>
        </div>        
        )
    }
}
