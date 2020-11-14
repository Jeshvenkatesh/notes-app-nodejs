// const square = ( x ) => {
//     return x * x
// }

// console.log(square(2));

const tasks = {
    taskArry : [
        {
            text : 'Grocery shipping',
            completed : true
        },
        {
            text : 'clean yard',
            completed : false
        },
        {
            text : 'Film course',
            completed : false
        }
    ],
    // getTasksToDo : function () {      General
    //     const data = this.taskArry;
    //         const taskTodo = data.filter((task)=>{
    //             return task.completed === false;
    //         })
    //         return taskTodo;
    // },
    getTasksToDo(){    // ES6
        return this.taskArry.filter((task) => task.completed === false  );
    }

}

console.log(tasks.getTasksToDo());