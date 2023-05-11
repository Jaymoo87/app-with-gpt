import { NextResponse } from 'next/server';
import { AxiosResponse } from 'axios';

import { Configuration, CreateChatCompletionResponse, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export async function PATCH(request: Request) {
  try {
    const { title, role } = await request.json();
    const aiRes: AxiosResponse<CreateChatCompletionResponse, any> = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'user',
          content: `Create small blog post with html tags based on this title: ${title}`,
        },
        {
          role: 'system',
          content: `${role || 'I am a helpful assistant'}. Write with html tags`,
        },
      ],
      temperature: 0,
      max_tokens: 7,
    });
    return NextResponse.json(
      {
        content: aiRes.data.choices[0].message?.content,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('req error', error);
    return NextResponse.json({ error: 'post did not update' }, { status: 500 });
  }
}
