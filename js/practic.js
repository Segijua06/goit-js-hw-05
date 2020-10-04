const Hotel = function(name, stars, capacity) {
    this.name = name;
    this.stars = stars;
    this.capacity = capacity;
    this.guestCount = 0;
  
    this.greet = function(guestName) {
      console.log(`Hello ${guestName}, wellcome to ${this.name}`);
    };
  
    this.addGuests = function(amount) {
      this.guestCount += amount;
    };
  
    this.removeGuests = function(amount) {
      this.guestCount -= amount;
    };
  };
  
  const hotel = new Hotel('Sunrise Hotel', 5, 100);
  
  console.log(hotel);
  // Hotel {name: "Sunrise Hotel", greet: ƒ, addGuests: f, removeGuests: f}
  hotel.greet('Mango'); // Hello Mango, wellcome to Sunrise Hotel
  hotel.addGuests(50);
  hotel.removeGuests(50);
  