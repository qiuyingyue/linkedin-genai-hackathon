import {getCodeFromQuestion} from "./openaihelper"


function GenAi() {
  /**
   * Trigger API call with the text input from a user. Target CSS.
   */
  function callAiForCSS() {
    let appContainerEl = document.querySelector('.App-container');
    appContainerEl.classList.add('loading');
    const input = document.querySelector('#gen-ai-css-input');
    console.log('We should make a call to the API with CSS for input ', input.value);

    const existingStyle = document.querySelector('#upsell-styles').innerHTML
    const question = "Here's the code for the current style: " + existingStyle + "\n" + input.value
    + ". Please send me the full new code enclosed between \"///\" and \"###\"?"
    return getCodeFromQuestion(question, 800)
    .then(responseValue => {
      if (responseValue.data) {
        updateStyles(responseValue.data);
      } else {
        window.alert("Error:" + responseValue.error)
      }
      appContainerEl.classList.remove('loading');
    });
  }

  /**
   * Trigger API call with the text input from a user. Target HTML.
   */
  function callAiForHtml() {
    let appContainerEl = document.querySelector('.App-container');
    appContainerEl.classList.add('loading');
    const input = document.querySelector('#gen-ai-html-input');
    console.log('We should make a call to the API with HTML for input ', input.value);

    const existingMarkup = document.querySelector('.upsell-markup-container').innerHTML
    const question = "Here's the code for the current markup: " + existingMarkup + "\n" + input.value
    + ". Please send me the full new code enclosed between \"///\" and \"###\"?"
    return getCodeFromQuestion(question, 1500)
    .then(responseValue => {
      if (responseValue.data) {
        updateMarkup(responseValue.data);
      } else {
        window.alert("Error:" + responseValue.error)
      }
      appContainerEl.classList.remove('loading');
    });
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

  /**
   * Replace the DOM <style> tag content with new CSS
   * @param {String} newCss - AI-generated CSS which should replace our existing styles
   */
  function updateMarkup(newHtml) {
    const styleTag = document.querySelector('.upsell-markup-container');
    styleTag.innerHTML = newHtml;
  }

  return (
    <div class="gen-ai">
      <div class="gen-ai-container">
        <div class="gen-ai-textarea-container">
          <textarea class="gen-ai-input drop-shadow-sm" id="gen-ai-css-input" name="gen-ai-input" placeholder="Enter a prompt to update the styles"></textarea>
        </div>
        <button onClick={callAiForCSS}>Go!</button>
      </div>
      <div class="gen-ai-container">
        <div class="gen-ai-textarea-container">
          <textarea class="gen-ai-input drop-shadow-sm" id="gen-ai-html-input" name="gen-ai-input" placeholder="Enter a prompt to update the copy"></textarea>
        </div>
        <button onClick={callAiForHtml}>Go!</button>
      </div>
      {/* <div class="gen-ai-container">
        <textarea class="gen-ai-output" type="text" id="gen-ai-output" name="gen-ai-output" placeholder="Wait for your CSS to get populated here..."></textarea>
        <button onClick={manuallyUpdateStyles}>Update CSS</button>
      </div> */}
    </div>
  );
}

export default GenAi;
