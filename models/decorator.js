const Decorator = function () {
  this.stock = [];
};



module.exports = Decorator;

// A decorator should:
//
// start with an empty paint stock <-- done
// be able to add a can of paint to paint stock
// be able to calculate total litres paint it has in stock
// be able to calculate whether is has enough paint to paint a room
// be able to paint room if has enough paint in stock