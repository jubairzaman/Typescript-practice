// // const makePromise = ()=>{
// //    return new Promise ((resolve , reject)=>{
// //         const data : string=" Data Is fatched";

// //         if(data){
// //             resolve(data);
// //         }else{
// //             reject(" Failed To Fetch Data")
// //         }
// //     })
// // }

// // const getPromiseData = async()=>{
// //     const data = await makePromise()
// // }

// interface iTodo {
//     userId: number,
//   id: number,
//   title: string,
//   completed: boolean;

// }


// const gettodo =async (): Promise<iTodo> => {

//     const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//     return await response.json();
    
// }

// const getToDoData = async (): Promise<void>=>{
//     const result = await gettodo();
//     console.log(result);
// }


// gettodo()
// getToDoData()


