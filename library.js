/* =========================================================================== */
//   Codecademy Lesson Project demonstrating knowledge of using Classes with   //
//    getters, setters and methods as well as using inheritance                //
/* =========================================================================== */



// Parent Class (superclass)
class Media{
    constructor(title){
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }
    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    set isCheckedOut(bool){
        this._isCheckedOut = bool;
    }


    get ratings(){
        return this._ratings;
    }

    getAverageRating(){
        let ratingTotal = 0;
        this._ratings.forEach(rating => ratingTotal += rating);
        return ratingTotal / this._ratings.length;
    }

    toggleCheckOutStatus(){
        if(!this._isCheckedOut){
            this._isCheckedOut = true;
        } else {
            this._isCheckedOut = false;
        }
    }

    addRating(rating){
        this._ratings.push(rating);
    }


}

// Child Classes (subclasses)


class Book extends Media{
    constructor(author, title, pages){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages
    }


}


const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
console.log(historyOfEverything);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything);
historyOfEverything.addRating(3);
historyOfEverything.addRating(5);
historyOfEverything.addRating(1);
console.log(historyOfEverything);
console.log(historyOfEverything.getAverageRating());




class Movie extends Media{
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    get director(){
        return this._director;
    }
    get runTime(){
        return this._runTime;
    }
}

const speed = new Movie('Jan de Bont', 'Speed', 116);
console.log(speed);
speed.toggleCheckOutStatus();
console.log(speed);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed);
console.log(speed.getAverageRating());



class CD extends Media{
    constructor(artist, title, songs){
        super(title);
        this._artist = artist;
        this._songs = songs;
    }
    get artist(){
        return this._artist;
    }
    get songs(){
        return this._songs;
    }
}