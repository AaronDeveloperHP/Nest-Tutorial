import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res } from '@nestjs/common';
import { validate } from 'class-validator';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
@Controller('/hello')
export class HelloController {

    @Get('/')
    index(@Req() request: Request, @Res() response: Response){
        console.log(request.url)
        response.status(200).json({
            message: 'Hello World'
        });
    }
    @Get('somethingnew')
    @HttpCode(201)
    somethingNew(){
        return 'something has been created'
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage(){
        return 'This page is not found'
    }

    @Get('error')
    @HttpCode(500)
    errorPage(){
        return 'Error Route'
    }
    
    @Get('ticket/:num')
    getNumber(@Param('num',ParseIntPipe) num: number){
        console.log(typeof num)
        return num + 14
    }

    @Get('active/:status')
    isUserActive(@Param('status',ParseBoolPipe) status: boolean){
        console.log(typeof status)
        return status
    }

    @Get('greet')
    greet(@Query(ValidateuserPipe)query:{name:string,age:number}) {
        console.log(query.age)
        return `Hello ${query.name}, you are ${query.age + 30} years old`
    }
}
