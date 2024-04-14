import { Injectable, NotFoundException } from "@nestjs/common";
import { createTaskDto } from "./dto/create-task.dto";
import { updateTaskDto } from "./dto/update-task.dto";

export interface Task {
    name: string;
    surname: string;
    age: number;
}

@Injectable()
export class TasksService {

private tasks = []

    getTasks(){
        return this.tasks
    }

    getTask(id:number){
        const taskFound = this.tasks.find(task => task.id === id)
        if(!taskFound){
            return new NotFoundException(`Task with ID ${id} not found`)
        }
        return taskFound
    }

    createTask(task:createTaskDto){
        console.log(task)
        this.tasks.push({
            ...task,
            id:this.tasks.length + 1
        })
        return task
    }

    updateTask(task:updateTaskDto){
        console.log(task)
        return 'Actualizan Tareas'
    }

    patchTask(){
        return 'Actualizan campos de Tareas'
    }

    deleteTask(){
        return 'Borrando Tareas'
    }

}