import {Type} from 'class-transformer'
import {IsArray, IsNotEmpty, IsString, ValidateNested} from 'class-validator'
export class chatCompletionRequest{
    @IsArray()
    @ValidateNested({ each:true})
    @Type(()=> chatCompletionMessageDto)
    message:chatCompletionMessageDto[]
}
export class chatCompletionMessageDto{
    @IsString()
    @IsNotEmpty()
    role:string;

    @IsString()
    @IsNotEmpty()
    content:string;
}