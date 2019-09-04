
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
    this.state = { color: '#E91E63', selected_color: cookies.get('paletteColor') };

    if(cookies.get('paletteColor')){
      this.setColor(cookies.get('paletteColor'))
    }

  }

  toggleModal = () => {
    this.setState({
      isColorPickerOpen: !this.state.isColorPickerOpen
    });
  }

  onChangeColors = (color) => {
    // update the state with the new array of colors
    this.setState({ selected_color: color.hex })

  }

  setColor = (color) => {
    this.setState({ color: color, selected_color: color})

    document.documentElement.style.setProperty('--color', color);

  }

  onAcceptColor = (color = "") => {



    // update the state with the new array of colors
    this.setState({ color: this.state.selected_color, isColorPickerOpen: !this.state.isColorPickerOpen })

    document.documentElement.style.setProperty('--color', this.state.selected_color);


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



