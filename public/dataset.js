class Drink{
    
    constructor(name,type,strongness,sweetness,flavor)
    {
        this.name = name;
        this.type = type;
        this.strongness = strongness;
        this.sweetness = sweetness;
        this.flavor = flavor;
    }

     getname()
    {return this.Name;}
    gettype()
    { return this.type;}
    getstrongness()
    {return this.strongness;}
    getsweetness()
    {return this.sweetness;}
    getflavor()
    {return this.flavor;}
}

const coffee = new Drink("Coffee","hotdrink","less","lesssweet","vanilla");
const hotchocolate = new Drink("Hot Chocolate","hotdrink","medium","regular","caramel");
const espresso = new Drink("Espresso","hotdrink","extra","toosweet","chocolate");
const latte = new Drink("Latte","hotdrink","less","lesssweet","strawberry");
const cappuchino = new Drink("Cappuchino","hotdrink","medium","regular","saltedcaramel");

const icedcoffee = new Drink("Iced Coffee","iceddrink","less","lesssweet","vanilla");
const fruitrefreshner = new Drink("Fruit Refreshner","iceddrink","medium","regular","caramel");
const lemonade = new Drink("Lemonade","iceddrink","extra","toosweet","chocolate");
const icedtea = new Drink("Iced Tea","iceddrink","less","lesssweet","strawberry");
const coldbrew = new Drink("Cold Brew","iceddrink","medium","regular","saltedcaramel");

const drinks = [coffee,hotchocolate,espresso,latte,cappuchino,icedcoffee,fruitrefreshner,lemonade,icedtea,coldbrew];

export default {drinks};