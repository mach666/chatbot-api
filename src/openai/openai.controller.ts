import { Body, Controller, Post } from '@nestjs/common';
import { chatCompletionRequest } from './dto/chat-completion.request';
import { OpenaiService } from './openai.service';

@Controller('openai')
export class OpenaiController {
    constructor(private readonly openaiService: OpenaiService) {}
    @Post('chat')
    async chatCompletion(
        @Body() body: chatCompletionRequest
    ){
        return this.openaiService.createChatCompletion(body.message)
    }
}
