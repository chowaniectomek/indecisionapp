class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);

    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    const counter = parseInt(localStorage.getItem('counter'), 10);

    if (!isNaN(counter)) {
      this.setState(() => ({ counter }));
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter !== this.state.counter) {
      localStorage.setItem('counter', this.state.counter);
    }
  }

  handleAddOne() {
    this.setState(prevState => {
      return {
        counter: prevState.counter + 1
      };
    });
  }

  handleMinusOne() {
    this.setState(prevState => {
      return {
        counter: prevState.counter - 1
      };
    });
  }

  handleReset() {
    this.setState(() => {
      return {
        counter: 0
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Counter state: {this.state.counter}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter />, document.getElementById('app'));
