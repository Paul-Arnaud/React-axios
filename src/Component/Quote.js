import React, { Component } from 'react'
import axios from 'axios'


export default class Quote extends Component {
    state = {
        quote: []
    }

    getQuote = () => {
        axios.get('https://quests.wilders.dev/simpsons-quotes/quotes')
        .then(response => this.setState({quote : response.data[0]})
        );  
    }

    componentDidMount(){
        this.getQuote()
    }

    render() {
        return (
            <div>
                <button onClick={this.getQuote} value="Get another quote">Get another quote</button>
                <figure className="QuoteCard">
                    <img src={this.state.quote.image} alt="character"/>
                    <figcaption>
                        <blockquote>
                          {this.state.quote.quote}
                      </blockquote>
                      <p>
                        <cite>{this.state.quote.character}</cite>
                      </p>
                    </figcaption>
                  </figure> 
            </div>
        )
        
    }
}
