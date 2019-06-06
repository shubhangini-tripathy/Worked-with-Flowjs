

let name: string = 'shubhi'
let users: string[] = ['shubhi', 'dhdhk']



let person: Person;

person = {
    name: 'john',
    age: 30
}

interface Person {
    name: string;
    age: number;
}

function checkType(name: string): string {
    return 'hello' + name;
}
console.log(checkType('shubhi'));


interface cellObject  {
    cell: string,
    factor: number,
    type: string
}
interface WorksheetObject {
    worksheetName: string,
    requestKey: string,
    discrete: {
        wellLife: cellObject,
        totalEURMboe: cellObject,
        totalEURBcfe: cellObject
    }
}


var worksheetObject: WorksheetObject =
{
    'worksheetName': 'Production',
    'requestKey': 'discreteTypeCurve',
    'discrete': {
        'wellLife': {
            'cell': 'C4',
            'factor': 1,
            'type': 'number',
        },
        'totalEURMboe': {
            'cell': 'C6',
            'factor': 1,
            'type': 'number',
        },
        'totalEURBcfe': {
            'cell': 'C7',
            'factor': 1,
            'type': 'number',
        },
    },
}

