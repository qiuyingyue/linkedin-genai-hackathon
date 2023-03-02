import { Configuration, OpenAIApi } from "openai";
const organizationId = "org-96dopwo0NE7xVygt5gBE0uKG" // Switch to your own one
const secretKey = "" // Switch to your own one

const url = "https://api.openai.com/v1/completions";
const model = "text-davinci-003" //"text-davinci-002-render-sha"
const max_tokens = 1000
const temperature = 1 // from 0-2
// const configuration = new Configuration({
//     organization: organizationId,
//     apiKey: process.env.OPENAI_API_KEY,
// });
// const openai = new OpenAIApi(configuration);

// export const getOpenAiModels = async () =>  {
//     const response = await openai.listEngines();
//     return response
// }

// // Use node.JS library, not ready
// export const getAnswerFromQuestionV2 = async (question) =>{
//     const createAnswerRequest = {
//         model: model, 
//         question: question, //"Can you provide sample css code of red button?",
//         temperature: temperature,
//         max_tokens: max_tokens};
//     const response = openai.createAnswer(createAnswerRequest)
//     return response
// }

// make http request
export const getAnswerFromQuestion = async (question) => {
    const data = JSON.stringify({
        model: model,
        prompt: question,
        temperature: temperature,
        max_tokens: max_tokens,
        stream:false
    })
    // console.log(data)

    const headers = new Headers({
        'OpenAI-Organization': organizationId,
        'Authorization': "Bearer " + secretKey,
        'Content-Type': 'application/json'
    })
   
    const options = {
        method: "POST",
        body: data,
        headers:headers 
    }

    return fetch(url, options)
    .then(response => {
        console.log(response.status);
        return response.body
    })
    .then((rb) => {
        const reader = rb.getReader();
        return new ReadableStream({
          start(controller) {
            // The following function handles each data chunk
            function push() {
              // "done" is a Boolean and value a "Uint8Array"
              reader.read().then(({ done, value }) => {
                // If there is no more data to read
                if (done) {
                //   console.log("done", done);
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
                // Check chunks by logging to the console
                // console.log(done, value);
                push();
              });
            }
            push();
          },
        });
      })
      .then((stream) =>
        // Respond with our stream
        new Response(stream, { headers: { "Content-Type": "application/json" } }).json()
      )
      .then((result) => {
        console.log(result);
        var answer;
        if (result["choices"]) {
            answer = result["choices"][0]["text"]
            console.log("Answer: " + answer);
        } else {
            answer = result["error"]["message"]
        }  
        return answer
      });
}

export const getCodeFromQuestion = async (question) =>{
    return getAnswerFromQuestion(question).then(extractCode)
}

function extractCode(text) {
    const indexOfNewline =  text.indexOf('.')
    console.log(indexOfNewline)
    return text.substring(indexOfNewline)
}
