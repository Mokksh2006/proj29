class Box{
  constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          //'friction':1.0,
         // 'density':1.0,
          'isStatic':false
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.visible = 255;
      
      World.add(world, this.body);
    }
    display(){
    if(this.body.speed < 3){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate (angle);
      strokeWeight(4);
      stroke(0,255,0);
      rectMode(CENTER);
      fill(0,0,255);
      rect(0, 0, this.width, this.height);
      pop();      
      }
     else{
       World.remove(world, this.body);
       push();
       this.visibility-=0.001;
       tint(255, this.visibility); 
      pop();
      }
    }
    score(){
      if(this.visibility < 0 && this.visibility > -30){
        score = score + 1;
      }
    }

  }