import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Query } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { createTaskDto } from "./dto/create-task.dto";
import { updateTaskDto } from "./dto/update-task.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller('/tasks')
export class TasksController {
    
    constructor(private tasksService:TasksService) {}
    @ApiTags('tasks')
    @Get()
    @ApiOperation({summary: 'Get all tasks'})
    @ApiResponse({status: 200, description: 'Return all tasks'})
    getAllTasks(@Query() query: any){
        console.log(query)
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string){
        return this.tasksService.getTask(parseInt(id));
    }
    @Post()
    createTask(@Body() task: createTaskDto) {
        return this.tasksService.createTask(task);
    }
    
    @Put()
    updateTask(@Body() task: updateTaskDto){
        return this.tasksService.updateTask(task); 
    }

    @Patch()
    patchTask() {
        return this.tasksService.patchTask();
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }
}