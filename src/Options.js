import GenAi from './GenAi';

function Options() {
  return (
    <div class="options">
      <div>
        <label>First, enter your Open AI <a href="https://platform.openai.com/account/api-keys">secret key</a>:</label>
        <input class="secret-key-input" type="text" placeholder="Secret key" id="secret-key-input" name="secret-key-input"></input>
      </div>
      <div>
        <label>And <a href="https://platform.openai.com/account/org-settings">organization ID:</a></label>
        <input class="organization-id-input" type="text" placeholder="Organization ID" id="organization-id-input" name="organization-id-input"></input>
      </div>
      <h3>Enter a prompt to update the UI</h3>
      <p><em>Start with something simple, like</em></p>
      <ul>
        <li>Can you update the <strong>title</strong> to be <strong>larger</strong>?</li>
        <li>Please update the <strong>buttons</strong> to be a <strong>darker</strong> color.</li>
        <li>Can you make the <strong>buttons</strong> less <strong>rounded</strong>?</li>
      </ul>
      <p><em>Or get more creative...</em></p>
      <ul>
        <li>Can you update to a style <strong>Gen Z</strong> would like?</li>
        <li>Update the style so it looks like <strong>Reddit</strong></li>
      </ul>
      <GenAi/>
    </div>
  );
}

export default Options;
