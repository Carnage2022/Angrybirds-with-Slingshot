class Slingshot {
    constructor(bird, point) {
        var options = {
            bodyA: bird,
            pointB: point,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }
    fly() {
        this.sling.bodyA = null;
    }
    display() {
        if (this.sling.bodyA){
         push ();
        strokeWeight(4);
        stroke("blue");
        line(this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y)
        pop ();
        }
        
    }
}