import React, { useState, useEffect, useRef } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Drips = ({ color, slim, wrapperHeight, svgWidth, numberPoints = 15, style }) => {
  const wrapperRef = useRef()
  const [path, setPath] = useState("")
  const [startPath, setStartPath] = useState();
  const [dripDripped, setDripDripped] = useState(false)
  const [built, setBuilt] = useState(false)
  const [dim, setDim] = useState({ w: 0, h: 0 })


  useEffect(() => {
    const onPageLoad = () => {
      setDripDripped(true)
    };

    // Check if the page has already loaded
    if (document?.readyState === 'complete') {
      setTimeout(()=>
      {onPageLoad();}, 100
      )
    } else {
      window.addEventListener('load', onPageLoad);
      // Remove the event listener when component unmounts
      return () => window.removeEventListener('load', onPageLoad);
    }
  }, []);

  useEffect(() => {
    if (!built) {
      setPath(buildPath(calculateWavePoints(1)))
      setStartPath(buildPath(calculateStartPath(1)))
      setBuilt(true)
    } 
  }, [built])

  let calculateStartPath = () => {
    var points = []
    var pointCount = numberPoints
    var width = 1080
    var height = 1080

    setDim({ w: width, h: height })

    for (var i = 0; i <= pointCount; i++) {
      points.push({ x: i * (1080 / pointCount), y: 0 })
    }

    return points

  }

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
      style={{...style, height: wrapperHeight ? wrapperHeight : "" }}
      onClick={()=>{setDripDripped(!dripDripped)}}
    >
      <svg
        preserveAspectRatio="none"
        viewBox={`0 0 ${dim.w} ${dim.h}`}
        style={{ width: svgWidth ? svgWidth : "", transition: "400ms"}}
      >
        <path id="wave" d={dripDripped ? path : startPath} fill={color} style={{ transition: "all 1s cubic-bezier(0.190, 1.000, 0.220, 1.000)" }} />
      </svg>
    </div>
  )
}

export default Drips
