class egg extends Phaser.GameObjects.Image{

  constructor(scene){



    const x = scene.chicken.x-20;
    const y = scene.chicken.y+20;

    super(scene, x, y, "egg");

    // canvas calc

    this.canvas = scene.sys.game.canvas;


          this._width = this.canvas.offsetWidth;
          this._height = this.canvas.offsetHeight;

          this.__next_by_nextPcs = 24;

          this.__gap = this._width/(this.__next_by_nextPcs + 1);
  this.__sprite_w_scale = this.__gap/(this._width*63/800);
  this.__sprite_h_scale = this.__gap/(this._height*64/600);

    // register to scene1

    scene.add.existing(this);

    // scene.physics.add.image();

    scene.physics.world.enableBody(this);

    // original egg sizes: 63x64



    this.setScale(this.__sprite_w_scale, this.__sprite_h_scale);

  //  console.log(this);


    this.body.velocity.x = -40;
    this.body.velocity.y = 200;

  //  this.setVelocityY(200);

    // add to group in scene1

    scene.groupForClass.add(this);

    scene.__egged_say++;


  }

  update(){

//console.log(this.y);

    if (this.y >= this.scene.__bucked_bottom_h  && this.y <= this.scene.__bucked_bottom_h+10){



      if (this.x < this.scene.bucket.x+(this.scene.__bucked_w/2) && this.x > this.scene.bucket.x-(this.scene.__bucked_w/2)){

      //    console.log(this.scene.__bucked_bottom_h);

        this.scene.__bucket_egg_say++;
          this.destroy();
        this.y = 450;


      }

    }

if (this.y > 500){

  this.destroy();

}

  }

}
