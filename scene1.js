class scene1 extends Phaser.Scene{

constructor(){
  super({key:"scene1"});
}

preload(){

  this.canvas = this.sys.game.canvas;


 				this._width = this.canvas.offsetWidth;
 				this._height = this.canvas.offsetHeight;

        this.__next_by_nextPcs = 5;

        this.__gap = this._width/(this.__next_by_nextPcs + 1);
this.__sprite_w_scale = this.__gap/(this._width*100/800);
this.__sprite_h_scale = this.__gap/(this._height*100/600);

this.load.image("chicken", "assets/chicken.png");
this.load.image("egg", "assets/egg.png");
this.load.image("egg_broken", "assets/egg_broken.png");
this.load.image("bucket", "assets/bucket.png");
this.load.image("bg", "assets/background.jpg");


// config vars:

this.__neg_vel = 0;

// config for the last jump key

this.__jump_say = 0;
this.__jump_fx_say = 0;

// inter vars:

this.__egged_say = 0;
this.__bucket_egg_say = 0;

// priv

this.__priv_broken = 15;

// this.__bucket_egg non-stream

this.__bucket_egg_ARRAY = [];


}



create(){







// bg: 626x563
// chicken: 100x100
// bucket: 100x100
this.bg = this.add.tileSprite(0, 0, 800, 600, "bg")
.setOrigin(0,0);

this.chicken = this.physics.add.image(400,200, "chicken")
.setScale(this.__sprite_w_scale, this.__sprite_h_scale)
.setVelocityY(100)
.setCollideWorldBounds(true);

// add two image for points

this.egg_image = this.add.image(0,0,"egg")
.setOrigin(0,0)
.setScale(this.__sprite_w_scale, this.__sprite_h_scale);

this.add.image(0,this.egg_image.height*this.__sprite_h_scale,"egg_broken")
.setOrigin(0,0)
.setScale(this.__sprite_w_scale, this.__sprite_h_scale);

// add two text

this._egg_text = this.add.text(0,0,"");
this._egg_broken_text = this.add.text(0,0,"");


this.bucket = this.physics.add.image(200,430, "bucket")
.setScale(this.__sprite_w_scale, this.__sprite_h_scale)
.setVelocityX(-200)
.setCollideWorldBounds(true)
.setBounce(1);

this.__bucked_h = this.__sprite_h_scale*100;
this.__bucked_bottom_h = 430;
this.__bucked_w = this.__sprite_w_scale*100;


//this.physics.add.existing(this.chicken);

// input on

this.input.on("pointerdown", this.chickenJump, this);

// add a group for comming from egg custom classs

this.groupForClass = this.add.group();

}

update(){

this.bg.tilePositionX += 3;

for (let i = 0; i < this.groupForClass.getChildren().length; i++){

  const egged = this.groupForClass.getChildren()[i];

  egged.update();

}

this.checkChickenLevel();
this.checkBucketEgg();
this.textEggs();


}

chickenJump(){

  this.__jump_say++; // if it eq jump_fx_say

  this.chicken.setVelocityY(this.__neg_vel-50);

  const egged = new egg(this);

  setTimeout(() => {

    this.jumpFx_after();



  },1000);

// console.log("zip");

}

jumpFx_after(){

  this.__jump_fx_say++;


  if (this.__jump_say === this.__jump_fx_say){



  this.__neg_vel = 0;
  this.chicken.setVelocityY(100);

} //   if (this.__jump_say === this.__jump_fx_say){


}

dead(){

  this.scene.start("scene2");

}

checkChickenLevel(){

  if (this.chicken.y >= 430){this.dead();}

}

checkBucketEgg(){

  if (this.__bucket_egg_say === this.__bucket_egg_ARRAY.length + 1){

    this.__bucket_egg_ARRAY.push(true);

    // console.log();

    if (this.__bucket_egg_say >= (this.__egged_say-this.__bucket_egg_say)) {this.__priv_broken++;}

  }


  if (this.__egged_say-this.__bucket_egg_say >= this.__priv_broken){

    this.dead();

  }

// this.__bucket_egg_ARRAY



}

textEggs(){

  this._egg_text.destroy();
  this._egg_broken_text.destroy();

this._egg_text =  this.add.text(this.egg_image.width*this.__sprite_w_scale,0, "  " + this.__bucket_egg_say, {font: "bold " + this.egg_image.height*this.__sprite_h_scale + "px Georgia", fill:"yellow"})
  .setOrigin(0,0);


  this._egg_broken_text =  this.add.text(this.egg_image.width*this.__sprite_w_scale,this.egg_image.height*this.__sprite_h_scale, "  " + (this.__egged_say-this.__bucket_egg_say) + "/" + this.__priv_broken, {font: "bold " + this.egg_image.height*this.__sprite_h_scale + "px Georgia", fill:"yellow"})
    .setOrigin(0,0);
//  this._egg_text = this.add.text(this.egg_image.width*this.__sprite_w_scale,"eee " + this.__egged_say);
//  this._egg_broken_text = this.add.text(0,0,"");






}


}
