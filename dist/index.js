let name = 'shubhi';
let users = ['shubhi', 'dhdhk'];

let person;

person = {
    name: 'john',
    age: 30
};

function checkType(name) {
    return 'hello' + name;
}
console.log(checkType('shubhi'));

var worksheetObject = {
    'worksheetName': 'Production',
    'requestKey': 'discreteTypeCurve',
    'discrete': {
        'wellLife': {
            'cell': 'C4',
            'factor': 1,
            'type': 'number'
        },
        'totalEURMboe': {
            'cell': 'C6',
            'factor': 1,
            'type': 'number'
        },
        'totalEURBcfe': {
            'cell': 'C7',
            'factor': 1,
            'type': 'number'
        }
    }
};