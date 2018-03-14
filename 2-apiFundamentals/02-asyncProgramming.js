var amIGood = true;

var iCanHaveGift = new Promise (
  function(resolve, reject) {
    if (amIGood) {
      var gift = {
        brand: 'Lego',
        item: 'starWarsLegoSet'
      };
      resolve(gift);
    } else {
      var naughty = 'You have made the naughty list; you get coal';
      reject(naughty);
    }
  }
)

iCanHaveGift.then(data => {
  console.log(data)
})