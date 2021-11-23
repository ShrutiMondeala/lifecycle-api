import './App.css';
import React from 'react';
import Navlink from './Component/Navlink';
import Api from './Component/Api';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            pageNumber: 2
        }
        this.setPageNumber = this.setPageNumber.bind(this);
    }

    setPageNumber(newpageNumber) {
        this.setState({ pageNumber: newpageNumber })
    }
    render() {
        return ( <div>
            Hello <Api/>
            <Navlink pageNumber = { this.state.pageNumber }
            setPageNumber = { this.setPageNumber}/> </div>
        )
    }
}
export default App;