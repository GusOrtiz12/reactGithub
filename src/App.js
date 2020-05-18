import React from 'react';
import './App.css';

class App extends React.Component{
  render(){
    return (
    <div>
    <div className="header" style={{ color: 'red'}}>{this.props.title}</div>
    <Card />
    <ConditionalStyle />
    </div>
    )
  }
}

class Form extends React.Component {
  userNameInput = React.createRef();
  handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const resp = await axios.get(`https://api.github.com/users/${this.userNameInput.current.value}`);
      this.props.onSubmit(resp.data);
      this.userNameInput.current.value = '';
      // console.log('submitted');
      // console.log(this.userNameInput.current.value);
      // console.log(resp.data);
    } catch (error){
      console.error(error);
      console.log('Houston we have a problem!');
    }
  }
  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" 
        placeholder="Github username" 
        ref={this.userNameInput} 
        required/>
        <button>Add card</button>
      </form>
    );
  }
}


class ConditionalStyle extends React.Component {
  render(){
    return (
      <div style={{color: Math.random() < 0.5 ? 'green' : 'blue'}}> Look at me. I change colors.</div>
    )
  }
}

class Card extends React.Component {
  render(){
    return (
      <div className="github-profile">
        <img src="https://placehold.it/75" />
        <div className="info">
          <div className="name">Name here ...</div>
          <div className="company">Company here ...</div>
        </div>
      </div>
    );
  }
}

const CardList = (props) => {
  <div>
    {props.profiles.map(profile => < Card key={profile.id} {...profile} />)}
    </div>
}

// const App = ({title}) => {
//   <div className="header">{title}</div>
// }

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
