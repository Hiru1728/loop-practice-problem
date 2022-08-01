// for (var i = 0; i < 20; i++) {
//     if (i > 10) {
//         break;
//     }
//     console.log(i);
// }
// var rostGiven = 0;
// while (rostGiven < 10) {
//     console.log('please, give one pice of roast');
//     rostGiven++;
//     if (rostGiven > 3) {
//         break;
//     }
// }

// var number = [45, 87, 89, 56, 32, 51, 25];
// for (var i = 0; i < number.length; i++) {
//     if (number[i] == 56) {
//         break;
//     }
//     console.log(number[i]);
// }
var number = [45, 87, 89, 56, 32, 51, 25];
for (var i = 0; i < number.length; i++) {
    if (number[i] > 50) {
        continue;
    }
    console.log(number[i]);
}