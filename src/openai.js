import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI(userMessage) {
  const completion = await openai.chat.completions.create({
    messages: [
    { role: 'system', content: 'you assist and answer questions' },
    { role: 'user', content: userMessage }
    ],
    model: 'gpt-3.5-turbo',
    temperature: 0.7,
    max_tokens: 256,
    top_p: 1,
    frequency_penalty: 0,
    presence_penalty: 0
  });

  //return completion.choices[0].message.content;
  console.log(completion.choices[0].message.content);
  return completion.choices[0].message.content;
}

// sendMsgToOpenAI(userMessage);

// const { Configuration, OpenAIApi } = require('openai');
// const apiKeys = APIKEY;
// const configuration = new Configuration({ apiKey: apiKeys });
// const openai = new OpenAIApi(configuration);

// export async function sendMsgToOpenAI(message) {
//     const res = await openai.createCompletion({
//         model: 'text-davinci-003',
//         prompt: message,
//         temperature: 0.7,
//         max_tokens: 256,
//         top_p: 1,
//         frequency_penalty: 0,
//         presense_penalty: 0
//     });
//     console.log(res)
//     return res.data.choices[0].text;
// }


