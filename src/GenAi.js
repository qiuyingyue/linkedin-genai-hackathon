function GenAi() {

  /**
   * Placeholder for the API call with the text input from a user
   */
  function callAi() {
    const input = document.querySelector('#gen-ai-input');
    console.log('We should make a call to the API with input ', input.value);
  }

  /**
   * For the time being, include a manual update mechanism to test the style tag update
   */
  function manuallyUpdateStyles() {
    const output = document.querySelector('#gen-ai-output');
    updateStyles(output.value);
  }

  /**
   * Replace the DOM <style> tag content with new CSS
   * @param {String} newCss - AI-generated CSS which should replace our existing styles
   */
  function updateStyles(newCss) {
    const styleTag = document.querySelector('#upsell-styles');
    styleTag.innerHTML = newCss;
  }

  return (
    <div class="gen-ai">
      <div>
        <input type="text" id="gen-ai-input" name="gen-ai-input"></input>
        <button onClick={callAi}>Go!</button>
      </div>
      <div>
        <input type="text" id="gen-ai-output" name="gen-ai-output"></input>
        <button onClick={manuallyUpdateStyles}>Update CSS</button>
        </div>
    </div>
  );
}

export default GenAi;
