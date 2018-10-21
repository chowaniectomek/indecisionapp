class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);

    this.showDetails = this.showDetails.bind(this);

    this.state = {
      isVisible: false
    };
  }

  showDetails() {
    this.setState(prevState => {
      return {
        isVisible: !prevState.isVisible
      };
    });
  }

  render() {
    return (
      <div>
        <h1>Visibility toggle</h1>
        <button onClick={this.showDetails}>
          {this.state.isVisible ? 'Hide' : 'Show'} Details
        </button>
        {this.state.isVisible && <Details />}
      </div>
    );
  }
}

class Details extends React.Component {
  render() {
    return (
      <div>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ea totam
          tempora obcaecati ullam sint rem autem, iure iste labore mollitia fuga
          ratione pariatur dolorem veritatis vitae? Necessitatibus facere soluta
          non?
        </p>
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));
