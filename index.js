const domContainer = document.querySelector("#app");
const root = ReactDOM.createRoot(domContainer);

function HelloMessage() {
  return (
    <div>
      <h3>Latest way</h3>
      <li>const domContainer = document.querySelector('#app');</li>
      <li>const root = ReactDOM.createRoot(domContainer);</li>

      <h3>Traditional Way - Deprecated from v18+</h3>
      <li>const container = document.getElementById('app');</li>
      <li>ReactDOM.render('ok',container);</li>


    </div>
  );
}

root.render(<HelloMessage />);
