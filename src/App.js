import React, { Component } from 'react';
import CardList from './Components/CardList';
import SearchBox from './Components/SearchBox.js';
import './App.css';
import Scroll from './Components/Scroll';

class App extends Component{
    constructor () {
        super();
        this.state = {
            robotsProperty: [],
            searchfield: ''
        }
    }

    componentDidMount () {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(users => this.setState({ robotsProperty : users }))
    }

    onSearchChange = (event) => {
        this.setState( { searchfield : event.target.value } );
    }

    render (){
        const filteredRobots = this.state.robotsProperty.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        });
        if (this.state.robotsProperty.length === 0){
            return <h1 className = 'tc'>Loading ...</h1>
        }else {
            return (
                <div className='tc'>
                    <h1>Robofriends</h1>
                    {/* in <SearchBox /> Component we used a property (prop)
                    with name searchChange that use onSearchChange function
                    we created earlier */}
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <CardList robots={filteredRobots}/>
                    </Scroll>
                </div>
            );
        }
    }
    
}

/*for creating interactive searchbox
 we should make a communicate between
 CardList and robots . we do this action with state object !*/

export default App;