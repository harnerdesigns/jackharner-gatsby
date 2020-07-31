import React, { Component } from "react"



export default class ImageGrid extends Component {



    constructor(props){

        super(props);
        this.state = {
            activeImage: null
        }
    }

    onClick = (index) => {

        console.log(index);


        if(this.state.activeImage !== index){

            this.setState({
                activeImage: index
            });
            
        } else {

            this.setState({
                activeImage: null
            })
        }


    }


    mapImages(images){

       return (images.map((image, index ) => {
            return (<img alt="" id={index} src={image} className={(this.state.activeImage === index ? "active-image" : "")} key={index} onClick={(e)=>{this.onClick(index)}}  />) // eslint-disable-line

        }))
    }


render(){
    return(

        <div className="image-grid">

        {this.mapImages(this.props.images)}
        <span className="zoom-text">Click To Zoom</span>
        </div>




    )
}






}
