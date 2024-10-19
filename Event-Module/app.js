// Event Module and Event Emitter

// Event driven programming

const EventEmitter = require('events');  // Importing event module

const eventEmitter = new EventEmitter();  // Creating new instance of EventEmitter

//Registering an event listener for the 'tutorial' event 
eventEmitter.on('tutorial',(num1,num2)=>{
    console.log(num1+num2);
    console.log('tutorial event has occured');
})

// eventEmitter.on('', ) has two argument.First one is listener and second one is the operation
//   that we want to perform when lsitener is called. 


// Emitting the tutorial event.
eventEmitter.emit('tutorial',1,2);  // here we are calling the listener.


class Person extends EventEmitter{
    constructor(name)
    {
        super();
        this._name = name;
    }
    get name(){
        return this._name;
    }
}

let shivam = new Person('Shivam');
let anjana = new Person('Anjana');

shivam.on('gettingname',()=>{
    console.log(`My name is ${shivam.name}`);
})

anjana.on('gettingname',()=>{
    console.log(`My name is ${anjana.name}`);
})


shivam.emit('gettingname');
anjana.emit('gettingname');

//  events are handled synchronously