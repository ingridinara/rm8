
import React from 'react'
import App from '../App';

class Welcome extends React.Component {
    state ={
        visibleApp: false
    };

    render(){

        if (this.state.visibleApp == true){
            return <div><App /> </div>
        } 

        const show = this.state.visibleApp ? (<App />) : (<div>  <h1>Welcome !!!</h1> </div>);

        return(
            <div>
                {show}
                <button onClick={() => { this.setState({ visibleApp: !this.state.visibleApp  })}}>ACCEDIR</button>
            </div>
        )
    }
}

export default Welcome;