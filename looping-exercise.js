// 1. Melakukan Looping Menggunakan While

var loopingPertama = 0;
var counter = 2;

console.log('LOOPING PERTAMA');
while(loopingPertama < 20) {
  loopingPertama += counter;
  console.log(loopingPertama + ' - I love coding');
}


var loopingKedua = 22;
var counter2 = 2;

console.log('LOOPING KEDUA');
while(loopingKedua > 2) {
  loopingKedua -= counter2;
  console.log(loopingKedua + ' - I will become fullstack developer');
}


// 2. Melakukan Looping Menggunakan Form

console.log('LOOPING PERTAMA');
for(var firstLooping = 1; firstLooping <=20; firstLooping ++) {
  console.log(firstLooping + ' - I love coding');
}

console.log('LOOPING KEDUA');
for(var secondLooping =20; secondLooping >= 1; secondLooping --) {
  console.log(secondLooping + ' - I will become fullstack developer');
}
