;(function() {
// soup don't need to know there are a point system
var soup = new Soup({
        fontSize: 20,
        fontFamily: "Coustard",
        color: "black", // font color
        selectColor: "blue", // line color
        size: 20, // initial grid size
        wordsNum: 30, // initial number of words
        clock: "clock", // where display time? (element id)
        points: "points", // where display points? (element id)
        layout: "You have {points} points", // how display points?
        startPoint: 1000, // initial points
        every: 10000, // every n miliseconds
        deduct: 10, // deduct n points
        
        /*== Events ==*/
        onHint: function() { this.score.down(50); },
        
        // you get the final score and time in hh:mm:ss format
        onFinish: function(time, score) {
            // do anything
        }
    });
}());
