class block{
  constructor(canvas, x, y, size, mass, v){
    this.x = x
    this.y = y
    this.v = v
    this.mass = mass
    this.size = size
    this.canvas = canvas
    this.hits = 0
  }

  show(ctx){
    ctx.beginPath()
    ctx.rect(this.x, this.y, this.size, this.size)
    ctx.stroke()
  }
  update(){
    this.x += this.v
  }
  reverse(){
    if(this.x < 0){
      this.v *= -1
      this.hits++
    }
  }
  collide(other){
    if(this.x + this.size > other.x) {
      let v1 = this.bounce(other)
      let v2 = other.bounce(this)
      b1.v = v1
      b2.v = v2
      this.hits++
      // document.querySelector('audio').play()
    }
  }
  bounce(other){
    let sumofmasses = this.mass + other.mass
    let v = (((this.mass - other.mass) / sumofmasses) * this.v) + (((2 * other.mass) / sumofmasses) * other.v)
    return v
  }
}