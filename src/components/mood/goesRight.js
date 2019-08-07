import React, { Component } from "react"

import 'splitting/dist/splitting.css'
import 'splitting/dist/splitting-cells.css'
import Splitting from 'splitting'





export default class GoesRight extends Component {



    constructor(props) {

        super(props);
        this.state = {
        }
    }


    componentDidMount() {

         Splitting();
    }




    render() {

        return (

            <container className="mood__container" id="goesRight">

                <h1>What If It All Goes <span className="strikeThrough" data-splitting="">Wrong</span> <span className="right">Right?</span></h1>

            </container>
        )
    }






}
