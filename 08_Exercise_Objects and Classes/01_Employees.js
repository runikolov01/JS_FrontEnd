function createList(arr) {
    arr.forEach(employee => {
        const employeeName = employee;
        const personalNumber = employee.length;

        console.log(`Name: ${employeeName} -- Personal Number: ${personalNumber}`);
    });
}


createList([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);