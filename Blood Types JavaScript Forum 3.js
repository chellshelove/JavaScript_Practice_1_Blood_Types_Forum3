var firstName = prompt("Enter your name: ", "green"),
    age = parseInt(prompt("Enter your age: ", "18"), 10),
    bloodType = prompt("Enter your blood type: ").toUpperCase(),
    res;

if (age >= 18 || age <= 66) {
    switch (bloodType) {
        case 'o-':
            alert("Hello " + firstName + ". Since you have blood type " + bloodType + " your can donate blood to people with the blood group  O-, O+, A-, A+, B-, B+, AB-, AB+.");
            break;
        case 'o+':
            alert("Hello " + firstName + ". Since you have blood type " + bloodType + " you can donate blood to people with the blood group O+, A+, B+, AB+.");
            break;
        default:
            alert('Default case');
    }
} else {
    alert('Your age does not meet the requirements for giving blood.');
}