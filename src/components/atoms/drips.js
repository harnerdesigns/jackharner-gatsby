import React, { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Drips = ({ color, slim, wrapperHeight, svgWidth, numberPoints = 15 }) => {
  const wrapperRef = useRef()
  const [path, setPath] = useState("")
  const [built, setBuilt] = useState(false)
  const [dim, setDim] = useState({ w: 0, h: 0 })
  useEffect(() => {
    if (!built) {
      setPath(buildPath(calculateWavePoints(1)))
      setBuilt(true)
    }
  }, [built])

  let calculateWavePoints = () => {
    var points = []
    var pointCount = numberPoints
    var width = 1080
    var height = 1080

    setDim({ w: width, h: height })

    for (var i = 0; i <= pointCount; i++) {
      var waveHeight = height - ((height / 2) * Math.random() + 50)
      points.push({ x: i * (width / pointCount), y: waveHeight })
    }

    console.log({ points })

    return points
  }

  let buildPath = points => {
    var width = 1080
    var height = 1080

    setDim({ w: width, h: height })

    var SVGString = "M " + points[0].x + " " + points[0].y

    var cp = {
      x: (points[1].x + points[0].x) / 2,
      y: points[0].y,
    }

    var cp0 = {
      x: (points[1].x + points[0].x) / 2,
      y: points[1].y,
    }

    SVGString +=
      " C " +
      cp.x +
      " " +
      cp.y +
      " " +
      cp0.x +
      " " +
      cp0.y +
      " " +
      points[1].x +
      " " +
      points[1].y

    var prevCp = cp0
    // var inverted = -1;

    for (var i = 1; i < points.length - 1; i++) {
      var cp1 = {
        x: (points[i + 1].x + points[i].x) / 2,
        y: points[i].y,
      }

      var cp2 = {
        x: (points[i + 1].x + points[i].x) / 2,
        y: points[i + 1].y,
      }

      SVGString +=
        " C " +
        cp1.x +
        " " +
        cp1.y +
        " " +
        cp2.x +
        " " +
        cp2.y +
        " " +
        points[i + 1].x +
        " " +
        points[i + 1].y
      prevCp = cp1
      // inverted = -inverted;
    }

    SVGString += " L " + width + " " + height
    SVGString += " L 0 " + height + " Z"
    return SVGString
  }
  return (
    <div
      ref={wrapperRef}
      id="svgWrapper"
      className={slim ? "slim" : ""}
      style={{ height: wrapperHeight ? wrapperHeight : "" }}
    >
      <svg
        preserveAspectRatio="none"
        viewBox={`0 0 ${dim.w} ${dim.h}`}
        style={{ width: svgWidth ? svgWidth : "" }}
      >
        <path id="wave" d={path} fill={color} />
      </svg>
    </div>
  )
}

export default Drips
