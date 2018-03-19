class User {
  constructor(username, password) {
    this.name = username;
    this.password = password;
    this.type = 'Trial User'
  }

  // Method 1
  greet() {
    console.log(`Welcome back ${this.name}`);
  }

  // Method 2
  status() {
    console.log(`Current status: ${this.type}`);
  }
}

// Instance of the class/new object
var anonDude = new User('Anonymous dude');
anonDude.greet();
anonDude.status();

// Super!
class BronzeLevelUser extends User {
  constructor(username,password,ccinfo) {
    // HERE
    super(username, password);

    this.type = 'Bronze User';
    this.ccinfo = ccinfo;
  }

  getInfo() {
    console.log(this.username, this.password, this.type, this.ccinfo);
  }
}

var bronzeGuy = new BronzeLevelUser('Bronze Dude', 'bronze7589', '424242424242424242424242');
bronzeGuy.greet();
bronzeGuy.status();
console.log(bronzeGuy);