import React, { Component } from 'react'
import './CSS/dot.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {
            heading: "",
            details: "",
            comment: "",
            image: "",
          


        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }

    handler1 = (event) => {
        this.setState({
            heading: event.target.value
        })
    }
    handler2 = (event) => {
        this.setState({
            details: event.target.value
        })
    }
    handler3 = (event) => {
        this.setState({
            comment: event.target.value
        })
    }
    handler4 = (event) => {
       this.setState({
           image: event.target.value
       })
    }


    

    handleSubmit = (event) => {
        alert(`${this.state.heading}`)
        alert(` ${this.state.details}`)
        alert(`${this.state.comment}`) 
        console.log(this.state);
        this.setState({
            heading: "",
            details: "",
            comment: "",
            image: "",
           
        })
     event.preventDefault()
        
    }




    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h1>User Registration Form</h1>
                    <label>Heading :</label> <input type="text" value={this.state.heading} onChange={this.handler1 } placeholder="Heading...." /><br />
                    <label>Details :</label> <input type="text" value={this.state.detalis} onChange={this.handler2 } placeholder="Details...." /><br />
                    <label>comment :</label> <input type="text" value={this.state.comment} onChange={this.handler3 } placeholder="Comment Here...." /><br />
                   
                    <input type="submit" value="Submit" />
                </form>

            </div>
            
        )
    }
}

export default Form
