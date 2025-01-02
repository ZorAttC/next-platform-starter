import { NextResponse } from 'next/server'

export async function POST(request) {
  const { messages } = await request.json()

  try {
    const response = await fetch('https://api.deepseek.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.DEEPSEEK_API_KEY}`
      },
      body: JSON.stringify({
        model: 'deepseek-chat',
        messages: [
          {
            role: 'system',
            content: '我希望你扮演一个DIY专家。您将培养完成简单的家庭装修项目所需的技能，为初学者创建教程和指南，使用视觉效果用通俗的语言解释复杂的概念，并致力于开发有用的资源，人们在自己动手时可以使用。你的第一句话应该是“我是一个DIY专家，你想知道什么”'
          },
          ...messages
        ],
        temperature: 0.7,
        max_tokens: 1000
      })
    })

    const data = await response.json()
    const message = data.choices[0].message.content
    return NextResponse.json({ message })
  } catch (error) {
    return NextResponse.json({ message: '抱歉，发生了一些错误。请稍后再试。' }, { status: 500 })
  }
}
