import { Component } from 'react';
import './App.css';
import Round from './components/Round/Round.js'


class App extends Component {

  state = {
    numb: [
      {number: 4},
      {number: 5},
      {number: 6},
      {number: 7},
      {number: 8},
    ]
  }

  
  
  changeNumber = () => {
    const newNumbArr = this.state.numb.map((number) => {
      const newNumb = {...number};
      newNumb.number = this.randomInteger(6, 36);
      return newNumb;
    })
    newNumbArr.sort(function(a,b) {
      if (a.number > b.number) {
        return 1;
      }
      if (a.number < b.number) {
        return -1;
      }
      return 0;
      
    });
    this.setState({numb: newNumbArr});
    // console.log('click');
    // const numb = {...this.state.numb};
    // const number = {...numb[1]};
    // number.number = this.randomInteger(6, 36);
    // numb[1] = number;
    // this.setState({numb});
    // console.log(numb[1]);

    // const numberCopy = this.state.numb;
    // numberCopy[0].number = this.randomInteger(6, 36);
    // numberCopy[1].number = this.randomInteger(6, 36);
    // numberCopy[2].number = this.randomInteger(6, 36);
    // numberCopy[3].number = this.randomInteger(6, 36);
    // numberCopy[4].number = this.randomInteger(6, 36);
    // this.setState({numberCopy})
  }

  randomInteger(min, max) {
    // случайное число от min до (max+1)
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
  }




  render() {  
    
    return (
      <div className="App">
      <button onClick={this.changeNumber}>New Numbers!</button>
      <div className='circle-loto'>
      <Round num={this.state.numb[0].number}/>
      <Round num={this.state.numb[1].number}/>
      <Round num={this.state.numb[2].number}/>
      <Round num={this.state.numb[3].number}/>
      <Round num={this.state.numb[4].number}/>
      </div>
      
  
      </div>
    );
  }
}

export default App;
