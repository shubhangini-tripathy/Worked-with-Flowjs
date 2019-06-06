// @flow

let name: string = 'shubhi'
let users: string[] = ['shubhi', 'dhdhk']



let person: Person;

person = {
    name:'john',
    age: '30'
}

interface Person{
    name:string;
    age: number;
}

function checkType(name:string): string{
    return 'hello'+ name;
}
console.log(checkType(shubhi));