import React, { useEffect, useRef, useState } from "react"

const CanvasBG = ({ children, footerCTA }) => {
  const [particles, setParticles] = useState([
    {
      x: 100, //x-coordinate
      y: 100, //y-coordinate
      size: 5,
      frame: 0,
      angle: 0,
      up: true,
    },
  ])

  let canvasRef = useRef()

  useEffect(() => {
    let canvas = canvasRef.current
    let ctx = canvas.getContext("2d")
    var W = window.innerWidth
    var H = window.innerHeight
    canvas.width = W
    canvas.height = H

    let requestId

    const draw = () => {
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);

      var color = getComputedStyle(document.body).getPropertyValue("--color")
      particles.forEach(function(p, i) {
        ctx.save()
        // ctx.translate(clickX, clickY);
        ctx.beginPath()
        ctx.strokeStyle = (p.up ? color : "black")

        ctx.lineWidth = (p.up ? 5 : 7);

        lineCircles(ctx, p, (p.up ? false : true))

        if (p.frame > 100) {
          let opacity = (p.frame - 100) / 50
          ctx.fillStyle = `rgba(0,0,0,${opacity})`

          ctx.fill()
        }
        if (p.frame > 15 && p.up){
            particles[i] = {
                x: p.x, //x-coordinate
                y: p.y, //y-coordinate
                size: 5,
                frame: p.frame + 1,
                angle: p.angle + Math.random(),
                up: !p.up
              }
        } else {
        particles[i] = {
          x: p.x, //x-coordinate
          y: p.y, //y-coordinate
          size: p.size + 24 / 2,
          frame: p.frame + 1,
          angle: p.angle + Math.random(),
          up: p.up
        }}

        if (p.frame == 33) {
          particles.splice(i, 1)
        //   ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
      })
      requestId = requestAnimationFrame(draw)
    }
    draw()
    return () => {
      cancelAnimationFrame(requestId)
    }
  }, null)
  const canvasClick = e => {
    let cursorX = e.pageX
    let cursorY = e.pageY
    // console.log(particles)
    setParticles([
      ...particles,
      {
        x: cursorX, //x-coordinate
        y: cursorY, //y-coordinate
        size: 5,
        frame: 0,
        angle: Math.random(),
        up: true,
      },
    ])
  }
  return (
    <canvas
      ref={canvasRef}
      id="introbg_animation"
      onClick={canvasClick}
      style={{
        width: "100%",
        height: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 1,
      }}
    ></canvas>
  )
}

export default CanvasBG

const lineCircles = (ctx, p, full=false) => {
  ctx.globalAlpha = p.frame
  // ctx.lineCap = "round
  let endPoint = (full ? (p.angle + 2) * Math.PI : Math.random() * Math.PI)
  ctx.arc(p.x, p.y, p.size, p.angle * Math.PI, endPoint)
  ctx.stroke()

  ctx.restore()
}
