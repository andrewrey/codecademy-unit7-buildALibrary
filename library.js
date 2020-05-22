// Codecademy Lesson Project demonstrating knowledge of using Classes and inheritance



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

