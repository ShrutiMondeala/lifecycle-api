import React from "react";


export default class Api extends React.Component {

        constructor(props) {
            super(props); 
                this.state = {
                    data: null,
                    isLoaded: false
                }
            
        }
        render() {
                console.log(this.props.pageNumber)
                return ( <div style = {
                            { minHeight: '500px', textAlign: 'center' } } >
                             {this.state.isLoaded ? 
                            ( <h1> Api </h1>)
                            :
                            ( <h1> Loading... </h1>)}

                        </div>
                                );
                            }
    
                            
            componentDidMount() {
                this.setState({...this.state, isLoaded: false})
                fetch(`https://reqres.in/api/users/${this.props.pageNumber}`)
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    this.setState({isLoaded: true, data: res.data})
                })
                
            }
                           
    
    }

                        
