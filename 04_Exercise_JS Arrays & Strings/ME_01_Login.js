function login(array) {
    let username = array[0];
    let realPass = username.split('').reverse().join('');
    for (let i = 1; i < array.length; i++) {
        let currentPass = array[i];
        if (i === 4) {
            if (currentPass === realPass) {
                console.log(`User ${username} logged in.`)
                break;
            }
            else {
                console.log(`User ${username} blocked!`);
            }

        }
        else {
            if (currentPass === realPass) {
                console.log(`User ${username} logged in.`)
                break;
            }
            else {
                console.log("Incorrect password. Try again.")
            }
        }
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);