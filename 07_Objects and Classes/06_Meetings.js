function createMeeting(array) {
    const meetings = {};
    for (const element of array) {
        const [day, name] = element.split(" ");
        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    }

    Object.keys(meetings).forEach((day) => {
        console.log(`${day} -> ${meetings[day]}`);
    });
}

createMeeting(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);