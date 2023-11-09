function formatGrade(grade) {
    let result = "Fail";

    if (grade >= 3.00 && grade < 3.50) {
        result = "Poor";
    }
    else if (grade >= 3.50 && grade < 4.50) {
        result = "Good";
    }
    else if (grade >= 4.50 && grade < 5.50) {
        result = "Very good";
    }
    else if (grade >= 5.0) {
        result = "Excellent";
    }
    if (grade >= 3.00) {
        console.log(`${result} (${grade.toFixed(2)})`);
    }
    else {
        grade = 2.00;
        console.log(`${result} (${grade.toFixed(0)})`);
    }
}

formatGrade(2.99);