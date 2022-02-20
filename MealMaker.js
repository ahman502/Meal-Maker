const menu = {
    _courses: {
      appetizers:[],
      mains:[],
      desserts:[],
    },
    get appetizers() {
      return this._courses.appetizers;
    },
     get mains() {
      return this._courses.mains;
    },
     get desserts() {
      return this._courses.desserts;
    },
    set appetizers(appetizers) {
    this._courses.appetizers = appetizers;
    },
    set mains(mains) {
    this._courses.mains = mains;
    },
    set desserts(desserts) {
    this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      };
    },
    addDishToCourse(courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      };
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName) {
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length)
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer = this.getRandomDishFromCourse('appetizers');
      const main = this.getRandomDishFromCourse('mains');
      const dessert = this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      
      return `Your meal is ${appetizer.name}, ${main.name}, & ${dessert.name}. The total price is $${totalPrice.toFixed(2)}.`;
    }
  };
  
  menu.addDishToCourse('appetizers', 'Mozzarella sticks', 7.65);
  menu.addDishToCourse('appetizers', 'Chips and Salsa', 3.00);
  menu.addDishToCourse('appetizers', 'Chicken wings', 9.50);
  menu.addDishToCourse('mains','Steak', 18.13);
  menu.addDishToCourse('mains','Quesadilla', 10.00);
  menu.addDishToCourse('mains','Cheeseburger', 5.99);
  menu.addDishToCourse('desserts','Chocolate cake',7.90);
  menu.addDishToCourse('desserts','Hot fudge brownies',6.50);
  menu.addDishToCourse('desserts','Strawberry ice cream',6.90);
  
  let meal = menu.generateRandomMeal();
  console.log(meal);