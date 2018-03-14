// // Object Methods

// // let band = {
// //   'name': 'Mumford and Sons',
// //   "awesome": true
// // };

// // // console.log(typeof band);
// // // console.log(band.name);


// // let netflix = {
// //   id: 1,
// //   name: 'Parks and Rec',
// //   seasonInfo: {
// //     episodeInfo: [
// //       { episode: 1, episodeName: 'Pilot' },
// //       { episode: 2, episodeName: 'Second' }
// //     ]
// //   }
// // }

// // // console.log('All the stuff', netflix);
// // // console.log('Season info', netflix.seasonInfo);
// // console.log('Episode info', netflix.seasonInfo.episodeInfo[0].episodeName)



// //  Object.create()

// let person = {
//   isHuman: false,
//   introduction: function() {
//     console.log(`My name is ${this.name}.  Am I a human? ${this.isHuman}. I am ${this.age} years old.`);
//   }
// };

// let me = Object.create(person);

// me.name = "Quincy";
// me.isHuman = true;
// me.age = 465;

// me.introduction()


// let address = {
//   state: 'IN',
//   intro: function() {
//     console.log(`Hello, my name is ${this.name}, and I live at ${this.streetNum} ${this.street} in ${this.city}, ${this.state} ${this.zip}.`);
//   }
// }

// let home = Object.create(address);

// home.name = 'Jared';
// home.streetNum = '17759';
// home.street = 'Vista Villa Dr.';
// home.city = 'Noblesville';
// home.state = 'IN';
// home.zip = 46060;

// home.intro()



// Object.assign()

const first = {
  a: 1,
  b: 2,
  c: 3
};

const second = {
  b: 5,
  d: 4
}

const third = Object.assign([], second, first);

console.log(third);