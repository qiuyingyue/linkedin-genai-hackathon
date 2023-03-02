import GenAi from './GenAi';

function Options() {
  return (
    <div class="options">
      <h3>Enter a prompt to update the UI</h3>
      <label>First, enter your secret key from your <a href="https://platform.openai.com/account/api-keys">Open AI</a> account:</label>
      <input class="secret-key-input" type="text" placeholder="Secret key" id="secret-key-input" name="secret-key-input"></input>
      <p><em>Start with something simple, like</em></p>
      <ul>
        <li>Can you update the <strong>title</strong> to be <strong>larger</strong>?</li>
        <li>Please update the <strong>buttons</strong> to be a <strong>darker</strong> color.</li>
        <li>Can you make the <strong>buttons</strong> less <strong>rounded</strong>?</li>
      </ul>
      <p><em>Or get more creative, like</em></p>
      <ul>
        <li>Can you update to a style <strong>Gen Z</strong> would like?</li>
        <li>Update the style so it looks like <strong>Reddit</strong></li>
      </ul>
      <GenAi/>
    </div>
  );
}

export default Options;
