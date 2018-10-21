const app = {
  detailsVisible: false
};

const showDetails = () => {
  app.detailsVisible = !app.detailsVisible;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility toggle</h1>
      <button onClick={showDetails}>
        {app.detailsVisible ? 'Hide details' : 'Show details'}
      </button>
      {app.detailsVisible && (
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          expedita veritatis at ratione, eveniet culpa vitae velit! Magni, fuga,
          ipsa doloribus distinctio autem cupiditate sequi, laboriosam
          voluptatem ratione veritatis accusamus.
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, document.getElementById('app'));
};

renderApp();
