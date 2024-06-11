import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { chatCompletionMessageDto } from './dto/chat-completion.request';
import {ChatCompletionMessageParam} from 'openai/resources'

@Injectable()
export class OpenaiService {
    private context = ''
    constructor(private readonly openai : OpenAI,) {}

    async createChatCompletion(message: chatCompletionMessageDto[]){
        message[0].content = `${this.context} \n ${message[0].content}`
        const response =await this.openai.chat.completions.create({
            messages: message as ChatCompletionMessageParam[],
            model: 'gpt-4-turbo'
        })
        this.context = `${message[0].content} \n ${response.choices[0].message.content}`
        return response.choices[0].message
    }
}
