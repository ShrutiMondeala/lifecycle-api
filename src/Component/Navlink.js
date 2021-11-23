import React from "react";


export default class Navlink extends React.Component{
constructor(props){
    super(props)
}

    render(){
        const arr = [1,2,3,4,5,6,7];
        return(
            <div>
                <div class="btn-group w-100" role="group" aria-label="Basic example">
            
            
            {
                arr.map((ele => {
                    // console.log(this.props);
                    return (<button 
                        type="button" 
                        className={"btn " + ( ele===this.props.pageNumber ? "btn-primary" : "btn-secondary")}
                        onClick = {() => {this.props.setPageNumber(ele)}}
                        >
                        {ele}</button>)
                }))
            }

          </div>
          </div>
        );
    }
}