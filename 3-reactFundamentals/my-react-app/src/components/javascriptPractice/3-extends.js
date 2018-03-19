class User {
  constructor(name) {
    this.name = name;
    this.type = 'Trial User'
  }
  // Method 1
  greet() {
    console.log(`Welcome back, ${this.name}`);
  }
  // Method 2
  status() {
    console.log(`Current status: ${this.type}`);
  }
}

class TrialUser extends User {
  trialEnding() {
    console.log(`Your trial will be ending soon, ${this.name}. Would you like to join our program?`);
  }
}

var anonDude = new User('Anonymous dude');
anonDude.greet();
anonDude.status();

var trialUser = new TrialUser('Paul');
trialUser.greet();
trialUser.trialEnding();
trialUser.status();