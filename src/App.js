
// vedeo 307 
// app.js 

// import React, { Component } from 'react';
// import CardList from './CardList';
// import SearchBox from './SearchBox';
// import {robots} from './robots';

// class App extends Component {
//     constructor(){
//         super()
//         this.state ={
//             robots: robots,
//             searchfield: ''
//         }
//     }
//     onSearchChange =(event) => {
//         this.setState({searchfield:event.target.value})

//         // console.log(filteredRobots);
//     }


//    render(){
//     const filteredRobots = this.state.robots.filter(robots =>{
//         return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
//     })
//     return(
//         <div className='tc'>
//            <h1> Robofriend</h1> 
//            <SearchBox  SearchChange= {this.onSearchChange}/>
//            <CardList robots= {filteredRobots}/>
//         </div>
  
//     );
//    }
// }
// export default App;




// vedeo 308 styling
// app.js 

import React, { Component } from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import {robots} from './robots';
import './App.css'

class App extends Component {
    constructor(){
        super()
        this.state ={ // to store data
            robots: robots,
            searchfield: ''
        }
    }
    onSearchChange =(event) => {
        this.setState({searchfield:event.target.value})

        // console.log(filteredRobots);
    }


   render(){
    const filteredRobots = this.state.robots.filter(robots =>{
        return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
    })
    return(
        <div className='tc'>
           <h1 className='f1'> Robofriend</h1> 
           <SearchBox  SearchChange= {this.onSearchChange}/>
           <CardList robots= {filteredRobots}/>
        </div>
  
    );
   }
}
export default App;