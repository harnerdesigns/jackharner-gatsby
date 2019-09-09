
import React, { Component } from "react"

import Cookies from 'universal-cookie';


import { PhotoshopPicker } from 'react-color';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"



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
    justifyContent: "center"
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



    if (cookies.get('paletteColor')) {
      const cookieColor = cookies.get('paletteColor');
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


  getTextColor = (c) => {

    let o = Math.round(((parseInt(c.r) * 299) + (parseInt(c.g) * 587) + (parseInt(c.b) * 114)) / 1000);
    return ((o > 125) ? ('black') : ('white'));
  }

  darkenHSL(hsl, amount) {
    console.log({ hsl: hsl });

    let newL = (hsl.l * 100) - amount;
    return "hsl(" + hsl.h + ", " + (hsl.s * 100) + "%, " + newL + "%)"
  }



  setColorVars = () => {

    document.documentElement.style.setProperty('--color', this.state.selected_color.hex);

    document.documentElement.style.setProperty('--text-color', this.getTextColor(this.state.selected_color.rgb));


    document.documentElement.style.setProperty('--darkerColor', this.darkenHSL(this.state.selected_color.hsl, 2));



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


    cookies.set('paletteColor', this.state.selected_color, { path: '/' });
  }


  onCancelColor = () => {
    // update the state with the new array of colors
    this.setState({ current_color: "#ffffff", isColorPickerOpen: false })

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



