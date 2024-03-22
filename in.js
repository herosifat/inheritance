class vehicle{
constructor(name,price){
    this.name =name;
    this.price =price;
}
move(){
    console.log('ghari chola suru koro')   
   }
}
class bus extends vehicle{
    constructor(name,price,seat,light){
        super(name,price);
        this.seat= seat;
        this.light = light;
    }
}

class truck extends vehicle {
    constructor(name,price, load,ticketPrice){
        super(name,price);
        this.load = load;
        this.ticketPrice =ticketPrice;
    }
}
