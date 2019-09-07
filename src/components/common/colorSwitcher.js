
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
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: "center",
    justifyContent: "center"
  },
  cover: {
    backgroundColor: "rgba(0,0,0,0.8)",
    height: "100%",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
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
        selected_color_rgb: this.hexToRgb(cookieColor)
      };
      this.setColorVars(cookieColor)

    } else {
      this.state = { color: '#E91E63', selected_color: '#E91E63',
      selected_color_rgb: this.hexToRgb('#E91E63')
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



  toggleModal = () => {
    this.setState({
      isColorPickerOpen: !this.state.isColorPickerOpen
    });
  }



  onChangeColors = (color) => {
    // update the state with the new array of colors
    this.setState({ selected_color: color.hex, selected_color_rgb: color.rgb })


  }

  setColorVars = () => {

    document.documentElement.style.setProperty('--color', this.state.selected_color);

    document.documentElement.style.setProperty('--text-color', this.getTextColor(this.state.selected_color_rgb));



  }

  onAcceptColor = () => {



    // update the state with the new array of colors
    this.setState({ color: this.state.selected_color, isColorPickerOpen: !this.state.isColorPickerOpen, selected_color_rgb: this.hexToRgb(this.state.selected_color) })

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



