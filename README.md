# Phaser-3---5th---Chichen-Egg-Laying
The mobile game made by Phaser 3


### Chicken Egg Laying

## How to Play

Like Flappy bird, you should be clicked to be lifted a little higher, but with laying. You should gather the eggs in the bucket that is moving. 

the 5th game trying with Phaser 3

## Rule

The default broken egg counting is 15, if you gather egg that is more than broken eggs, then broken egg counting is added 1 more. 

If you broke eggs as broken egg counting, then you will loss.









**used**


custom class for add egg that is falling,
in index.html:

`<script type="text/javascript" src="egg.js"></script>`

call custom class in create()  when click:
`const egged = new egg(this);`

in egg.js, add class to the group that is made in scene1.js:

in scene1.js:  `this.groupForClass = this.add.group();`

in egg.js: `  scene.groupForClass.add(this);`

upload() function in egg.js is called from scene1 with that:
`this.bg.tilePositionX += 3;
for (let i = 0; i < this.groupForClass.getChildren().length; i++){
  const egged = this.groupForClass.getChildren()[i];
  egged.update();
}`

add image to scene in egg.js:
`scene.add.existing(this);`

add image to physics in egg.js:
`scene.physics.world.enableBody(this);`






### Resized sprites with the real ratios in dynamic Canvas sizes:

`this.__next_by_nextPcs = 7;`


   `this.canvas = this.sys.game.canvas;
				this._width = this.canvas.offsetWidth;
				this._height = this.canvas.offsetHeight;


				this.__sprite_w = 64;
				this.__sprite_h = 64;
				this.__gap = this._width/(this.__next_by_nextPcs + 1);
				this.__sprite_w_scale = this.__gap/(this._width*64/800);
				this.__sprite_h_scale = this.__gap/(this._height*64/600);`
        
        with this ratio:
        `  this.__sprite = this.physics.add.sprite(0,0, "numbers")`
  `.setScale(this.__sprite_w_scale, this.__sprite_h_scale);`
  
  
  ## Some notes
  
  There was a problem with setTimeout() # bug
  
  `setTimeout(() => {

  
      }`


Sometimes the chickens' Y velocity has negative number, meaning, the chicken does not falling, flying the top.

## [Demo](https://html5.ozguruygulama.com/chicken_egg_laying/index.html "Demo")
