import React, { useEffect, useRef, useState } from "react"

import styled from "styled-components"

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
    canvas.height = canvas.offsetHeight

    let requestId

    const draw = () => {
      //   ctx.clearRect(0, 0, canvas.width, canvas.height);

      var color = getComputedStyle(document.body).getPropertyValue("--text-color")
      particles.forEach(function(p, i) {
        ctx.save()
        // ctx.translate(clickX, clickY);
        ctx.beginPath()
        ctx.strokeStyle = p.up ? color : "black"

        ctx.lineWidth = p.up ? 5 : 7
        if (p.frame > 0) {
          lineCircles(ctx, p, p.up ? false : true)
        }

        if (p.frame > 15 && p.up && p.frame > 0) {
          particles[i] = {
            x: p.x, //x-coordinate
            y: p.y, //y-coordinate
            size: 5,
            frame: p.frame + 1,
            angle: p.angle + Math.random(),
            up: !p.up,
          }
        } else if (p.frame > 0) {
          particles[i] = {
            x: p.x, //x-coordinate
            y: p.y, //y-coordinate
            size: p.size + 24 / 2,
            frame: p.frame + 1,
            angle: p.angle + Math.random(),
            up: p.up,
          }
        } else {  
          particles[i] = {
            x: p.x, //x-coordinate
            y: p.y, //y-coordinate
            size: p.size,
            frame: p.frame + 1,
            angle: p.angle,
            up: p.up,
          }
        }

        if (p.frame == 33) {
          particles.splice(i, 1)
          //   ctx.clearRect(0, 0, canvas.width, canvas.height)
          if (particles.length == 0) {
            setParticles([
              {
                x: Math.random() * W, //x-coordinate
                y: Math.random() * H, //y-coordinate
                size: 5,
                frame: -180,
                angle: 0,
                up: true,
              },
            ])
          }
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

  const canvasHover = e => {
    let cursorX = e.pageX
    let cursorY = e.pageY
    // console.log(particles)
    if (particles.length < 1) {
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
  }
  return (
    <>
      <canvas
        ref={canvasRef}
        id="introbg_animation"
        onMouseMove={canvasHover}
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
    </>
  )
}

export default CanvasBG

const lineCircles = (ctx, p, full = false) => {
  ctx.globalAlpha = p.frame
  ctx.globalCompositeOperation = full ? "destination-out" : null
  // ctx.lineCap = "round
  let endPoint = full ? (p.angle + 2) * Math.PI : Math.random() * Math.PI
  ctx.arc(p.x, p.y, p.size, p.angle * Math.PI, endPoint)
  ctx.stroke()

  ctx.restore()
}
