import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header';
import Maincontent from './Components/Maincontent';
import Footer from './Components/Footer';
import SelectedColor from './Components/SelectedColor';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

export class App extends Component {
  constructor(props) {
    super(props);

    //  State for Storing Data for application level
    this.state = {
      colorList: [],
      currentColor: [],
      selectColor: {},
      addedColor: [],
      formState: [],

    }
    this.result = [];
    this.counter = 0;

    //counter for cart count
    this.colorCount = 0;

    //Method for generating color
    this.generateRandomColor();
  }



  // method for generating the random color.
  generateRandomColor = () => {
    let counter = 1;
    let obj = {
      id: null,
      name: ''
    }
    for (let i = 0; i <= 7; i++) {
      let array1 = [];

      for (let j = 0; j < 14; j++) {
        let data = '#' + (Math.random() * 0xFFFFFF << 0).toString(16);
        obj.id = counter;
        obj.name = data;
        array1.push(obj);
        counter++;
        obj = {
          id: null,
          name: ''
        }
      }
      this.result.push(array1)
    }

  }

  // used for the component mounting
  componentDidMount = () => {
    this.setState({ colorList: [...this.result] })
    this.setState({ currentColor: this.result['0'] })

  }

  onButtonClick = (ind) => {
    let data = this.state.colorList.filter((color, index) => {
      if (ind === index) {
        return color;
      }
    })
    this.setState({ currentColor: data['0'] });
  }
  //color selection
  colorSelect = (colorSelect) => {
    this.colorCount++;
    this.setState({ selectColor: colorSelect });
    this.setState({ addedColor: [...this.state.addedColor, colorSelect] });
  }
  // methos for loadMoreColor
  onButtonClick = () => {
    this.counter++;
    if (this.counter < this.state.colorList.length) {
      this.setState({ currentColor: [...this.state.currentColor, ...this.state.colorList[this.counter]] })
    }


  }

  //Delete Color Fron Selected Component
  onDeleteColor = (deleteColor) => {
    this.setState({
      addedColor: this.state.addedColor.filter((deleteData) => {
        if (deleteColor !== deleteData) {
          return deleteData
        }
      })
    })
    this.colorCount--;
  }

  // submit 
  SelectedColor = (e) => {
    let obj = {
      title: e,
      data: this.state.addedColor
    }
    this.state.formState.push(obj);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header colorCount={this.colorCount} />
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-12 col-sm-12 col-xs-12" style={mainContent}>
                <Switch>

                  <Route path="/cart" render={(props) => (
                    <React.Fragment>
                      <SelectedColor {...props} selectColor={this.state.addedColor} formState={this.state.formState} onDeleteColor={this.onDeleteColor} SelectedColor={this.SelectedColor} onDeleteCurrentColor={this.onDeleteCurrentColor} />
                    </React.Fragment>
                  )} />

                  <Route exect path="/" render={(props) => (
                    <React.Fragment>
                      <Maincontent mainColorData={this.state.currentColor} colorSelect={this.colorSelect} />
                      <Footer onButtonClick={this.onButtonClick} />
                    </React.Fragment>
                  )} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}
const mainContent = {
  display: "flex",
  flexFlow: "wrap"
}


export default App;
