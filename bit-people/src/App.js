import React from 'react';
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Users from "./components/Users/Users.js"

class App extends React.Component {
  constructor() {
    super()

    this.state= {
      userView: true
    }

    
  }

  changeViewMode = () => {

  }
  render() {
    return (
      <div >
        <Header />
        <Users />
        <Footer />
      </div>
    );
  }

}

export default App;
