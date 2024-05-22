import { Injectable } from '@nestjs/common';
import OpenAI from 'openai';
import { chatCompletionMessageDto } from './dto/chat-completion.request';
import {ChatCompletionMessageParam} from 'openai/resources'
import { Messages } from 'openai/resources/beta/threads/messages';

@Injectable()
export class OpenaiService {
    constructor(private readonly openai : OpenAI) {}

    async createChatCompletion(message: chatCompletionMessageDto[]){
        return this.openai.chat.completions.create({
            messages: message as ChatCompletionMessageParam[],
            model: 'gpt-3.5-turbo'
        })
    }
}
