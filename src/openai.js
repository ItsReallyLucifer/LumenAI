// const { Configuration, OpenAIApi } = require('openai');
// const apiKeys = "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";
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


import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.REACT_APP_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export async function sendMsgToOpenAI() {
  const completion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'you assist and asnwer questions' }],
    model: 'gpt-3.5-turbo',
  });

  //return completion.choices[0].message.content;
  console.log(completion.choices[0].message.content);
}

sendMsgToOpenAI();