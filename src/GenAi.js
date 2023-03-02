import {getCodeFromQuestion} from "./openaihelper"


function GenAi() {
  /**
   * Placeholder for the API call with the text input from a user
   */
  function callAi() {
    let appContainerEl = document.querySelector('.App-container');
    appContainerEl.classList.add('loading');
    const input = document.querySelector('#gen-ai-input');
    console.log('We should make a call to the API with input ', input.value);

    const existingStyle = document.querySelector('#upsell-styles').innerHTML
    const question = "Here's the code for the current style: " + existingStyle + "\n" + input.value
    + ". Please send me the full new code enclosed between \"///\" and \"###\"?"
    return getCodeFromQuestion(question)
    .then(responseValue => {
      document.getElementById('gen-ai-output').value=responseValue;
      appContainerEl.classList.remove('loading');
    })
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
        <textarea id="gen-ai-input" name="gen-ai-input" style={{height: "80px", width: "320px"}}></textarea>
        <button onClick={callAi}>Go!</button>
      </div>
      <div>
        <textarea type="text" id="gen-ai-output" name="gen-ai-output" style={{height: "80px", width: "320px"}}></textarea>
        <button onClick={manuallyUpdateStyles}>Update CSS</button>
        </div>
    </div>
  );
}

export default GenAi;
