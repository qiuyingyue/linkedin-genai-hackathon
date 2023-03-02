import { Configuration, OpenAIApi } from "openai";
const organizationId = "org-96dopwo0NE7xVygt5gBE0uKG" // Switch to your own one
const secretKey = "" // Switch to your own one

const url = "https://api.openai.com/v1/completions";
const model = "text-davinci-003" // Can use getOpenAiModels to list avaliable modals
const max_tokens = 800 // The size limit for the response. Shorter is faster and cheaper but the code may be incomplete
const temperature = 1 // from 0-2. closer to 0 is more deterministic; closer to 2 is more random

export const getCodeFromQuestion = async (question) =>{
    return getAnswerFromQuestion(question).then(extractCode)
}
// make http request
const getAnswerFromQuestion = async (question) => {
    const data = JSON.stringify({
        model: model,
        prompt: question,
        temperature: temperature,
        max_tokens: max_tokens,
        stream:false
    })

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
                  controller.close();
                  return;
                }
                // Get the data and send it to the browser via the controller
                controller.enqueue(value);
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
        if (result.choices) {
            answer = result.choices[0].text
            console.log("Answer: " + answer);
        } else {
            answer = result.error.message
        }  
        return answer
      });
}

function extractCode(text) {
    const indexOfStart =  text.indexOf('///')
    const indexOfEnd =  text.indexOf('###')
    
    return text.substring(indexOfStart + 3, indexOfEnd)
}

const configuration = new Configuration({
    organization: organizationId,
    apiKey: secretKey,
});
export const getOpenAiModels = async () =>  {
    const openai = new OpenAIApi(configuration);
    const response = openai.listEngines();
    return response.then(res=>{
        console.log(res.data)
        return res.data
    })
}


//////////// For experiment


// Use node.JS library, not ready, has CORS issues
const getAnswerFromQuestionV2 = async (question) =>{
    const openai = new OpenAIApi(configuration);
    const params = {
        model: model, 
        question: question, //"Can you provide sample css code of red button?",
        temperature: temperature,
        max_tokens: max_tokens};

    return openai.createAnswer(params)
        .then((response) => {
            console.log(response.choices[0].text);
        })
        .catch((error) => {
            console.error(error);
        });
}

// Before using this, install the library by "npm i openai-api"
const getAnswerFromQuestionV3 = async (question) => {
    const OpenAI = require('openai-api');
    const openai = new OpenAI(secretKey);
    return openai.complete({
        engine: model,
        prompt: question,
        maxTokens: max_tokens,
        temperature: temperature,
        stream: false
        // topP: 1,
        // presencePenalty: 0,
        // frequencyPenalty: 0,
        // bestOf: 1,
        // n: 1,
        // stop: ['\n', "testing"]
    }).then(response => {
        console.log(response.data);
        return response.data.choices[0].text
    })

}

