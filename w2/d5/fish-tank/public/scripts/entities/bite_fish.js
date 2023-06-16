class BiteFish extends Fish {
  constructor(options) {
    super(options);
    this.surgeSecondsLeft = 0;
    this.maxSurge = 1.0;
    this.surgMult = 3.0;
    this.imageUri = '/images/bite-fish.png';
  }

  updateOneTick() {
    let delta = this.swimVelocity.scale(PHYSICS_TICK_SIZE_S * (20 + this.surgeSecondsLeft * this.surgMult));
    this.position.addMut(delta);
    this.timeUntilSpeedChange -= PHYSICS_TICK_SIZE_S;
    if (this.timeUntilSpeedChange < 0) {
      this.makeNewVelocity();
    }
    this.surgeSecondsLeft = Math.max(0, this.surgeSecondsLeft - PHYSICS_TICK_SIZE_S);
  }


  onClick(event) {
    this.surgeSecondsLeft = this.maxSurge;
  }
}