
import React, { Component } from "react"

import Cookies from 'universal-cookie';


import { PhotoshopPicker } from 'react-color';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import Button from "../atoms/button";


const cookies = new Cookies();




let styles = {

  popover: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100vh',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    zIndex: 9999
  },
  cover: {
    background: "radial-gradient(#fff, rgba(0,0,0,0.4) 60%)",
    height: "100vh",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1
  }
}

export default class ColorSwitcher extends Component {



  constructor(props) {
    super(props);



    if (cookies.get('paletteColorObj')) {
      const cookieColor = cookies.get('paletteColorObj');
      this.state = {
        color: cookieColor,
        selected_color: cookieColor,
      };
      this.setColorVars()

    } else {
      this.state = {
        color: {
          hex: '#E91E63',
          rgb: {
            r: "100",
            g: '100',
            b: "100"
          }
        },
        selected_color: {
          hex: '#E91E63',
          rgb: {
            r: "233",
            g: '30',
            b: "99"
          },
          hsl: {
            "h": 339.60591133004925,
            "s": 0.8218623481781375,
            "l": 0.5156862745098039,
            "a": 1
          }
        },
      };
    }


  }

  hexToRgb = (hex) => {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }


  hslToRgb = (h, s, l) => {
    var r, g, b;

    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 1 / 2) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
      }

      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;

      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }

    return { r: r * 255, g: g * 255, b: b * 255 };
  }


  getTextColor = (c) => {

    let o = Math.round(((parseInt(c.r) * 299) + (parseInt(c.g) * 587) + (parseInt(c.b) * 114)) / 1000);
    return ((o > 125) ? ('black') : ('white'));
  }

  darkenHSL(hsl, amount, format = false) {

    let newL = (hsl.l) - (amount / 100);
    if (format) {

      return "hsl(" + hsl.h + ", " + (hsl.s * 100) + "%, " + (newL * 100) + "%)"
    } else {

      return { h: hsl.h, s: hsl.s, l: newL }
    }
  }



  setColorVars = () => {

    document.documentElement.style.setProperty('--color', this.state.selected_color.hex);

    document.documentElement.style.setProperty('--text-color', this.getTextColor(this.state.selected_color.rgb));


    document.documentElement.style.setProperty('--darkerColor', this.darkenHSL(this.state.selected_color.hsl, 15, true));
    let darkerColor = this.darkenHSL(this.state.selected_color.hsl, 15);
    console.log({ lighter: this.state.selected_color.hsl, darker: darkerColor });
    document.documentElement.style.setProperty('--darker-text-color', this.getTextColor(this.hslToRgb(darkerColor.h, darkerColor.s, darkerColor.l)));



  }


  toggleModal = () => {
    this.setState({
      isColorPickerOpen: !this.state.isColorPickerOpen
    });
  }



  onChangeColors = (color) => {
    // update the state with the new array of colors
    this.setState({ selected_color: color })

  }



  onAcceptColor = () => {

    // update the state with the new array of colors
    this.setState({ color: this.state.selected_color, isColorPickerOpen: !this.state.isColorPickerOpen })

    this.setColorVars();


    cookies.set('paletteColorObj', this.state.selected_color, { path: '/' });

    // ReactGA.event({
    //   category: 'Color',
    //   action: 'Picked Color',
    //   label: this.state.selected_color
    // });
  }


  onCancelColor = () => {
    // update the state with the new array of colors
    this.setState({ current_color: "#ffffff", isColorPickerOpen: false })

  }

  onReset = () => {
    //delete cookie and reset variables. 
    this.setState({
      color: {
        hex: '#E91E63',
        rgb: {
          r: "100",
          g: '100',
          b: "100"
        }
      },
      selected_color: {
        hex: '#E91E63',
        rgb: {
          r: "233",
          g: '30',
          b: "99"
        },
        hsl: {
          "h": 339.60591133004925,
          "s": 0.8218623481781375,
          "l": 0.5156862745098039,
          "a": 1
        }
      },
      isColorPickerOpen: !this.state.isColorPickerOpen
    }, () => this.setColorVars())

    cookies.remove('paletteColorObj', { path: '/' });
    // ReactGA.event({
    //   category: 'Color',
    //   action: 'Reset Color'
    // });

  }

  render() {
    return (

      <>
        {this.state.isColorPickerOpen ?
          <div style={styles.popover} >
            <div style={styles.cover} onClick={this.handleClose} />
            <PhotoshopPicker
              id="color__add"
              header="Pick An Accent Color"
              onAccept={this.onAcceptColor}
              onCancel={this.onCancelColor}
              onChangeComplete={this.onChangeColors}
              color={this.state.selected_color} />
            <Button icon="undo-alt" label={{ __html: "Reset To Default" }} onClick={this.onReset}
              extraStyle={{ background: "#E91E63", color: "#ffffff" }} />
          </div>
          :
          null}

        <button onClick={this.toggleModal} id="colorSwitcher" type={"button"}>
          <FontAwesomeIcon icon="palette"></FontAwesomeIcon>
        </button>

      </>
    );
  }






}



