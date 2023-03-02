function Options() {
  return (
    <div class="options">
      <h3>Enter a prompt to update the UI</h3>
      <p><em>Start with something simple, like</em></p>
      <ul>
        <li>Can you update the <strong>buttons</strong> to be <strong>larger</strong>?</li>
        <li>Please update the <strong>buttons</strong> to be a <strong>darker</strong> color.</li>
        <li>Can you update the <strong>title</strong> to be <strong>larger</strong>?</li>
      </ul>
      <input type="text" id="lname" name="lname"></input><button>Go!</button>
    </div>
  );
}

export default Options;
