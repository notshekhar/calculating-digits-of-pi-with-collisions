let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")
let hits = document.querySelector('.hits')
let digits = 5
let v = 2/Math.pow(10, digits-2)*-1
let timeSteps = Math.pow(10, digits-2)  
let s1 = 50, m1 = 1
let s2 = 100, m2 = Math.pow(100, digits-1)
let b1 = new block(canvas, 300, (canvas.height / 2) - s1 / 2, s1, m1, 0)
let b2 = new block(canvas, 600, (canvas.height / 2) - s2 / 2, s2, m2, v)

let counter = 0

function draw(){
  for(let i=0; i<timeSteps; i++){
    //cleaning canvas 
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    b1.show(ctx)
    b2.show(ctx)
    b1.update()
    b2.update()
    b1.reverse()
    b2.reverse()
    b1.collide(b2)
    hits.innerHTML = `Hits - ${b1.hits}<br>PI - ${b1.hits/Math.pow(10, digits-1)}`
  }
}

setInterval(()=>draw(), 16)