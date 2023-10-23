export default class UserController {
    // constructor(method1, method2) {
    //     this.method1 = method1;
    //     this.method2= method2;
    // }

     async me(request, reply){
         console.log('request:',request.user)

         reply.send({hello: 'world2'})
    }
}