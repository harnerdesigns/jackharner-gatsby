import React from "react"
import shaklee from "../../images/Shaklee.png"
import meology from "../../images/meology.png"
import Vert from "./vert"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Shaklee = () => {
  const link =
    "https://shaklee.jackharner.com"
  return (
    <Vert
      link={link}
      image={null}
      slug="shaklee"
      buttonText={<>Try It Today! &raquo;</>}
    > 
    <div class="grid grid--2">

      <div>
      <img src={shaklee} alt="Shaklee" />
      <h2>Get Up & Feel Great!</h2>
      <h3>
        Take the Meology Prove It Challenge and feel healthier in 30 days.{" "}
        <strong>Guaranteed.</strong>
      </h3>
      </div>
      <img class='meology-img' src={meology} alt="Shaklee's Meology" />
    </div>
      <ul class="shaklee__perks">
        <li>
          <h4>
            <FontAwesomeIcon icon={"shield-alt"} />
            Safe
          </h4>
          <span>
            Shaklee's screening process surpasses US Gov't Standards.
          </span>
        </li>
        <li>
          <h4>
            <FontAwesomeIcon icon={"lock"} />
            Proven
          </h4>
          <span>Most clinically proven Wellness company in the world.</span>
        </li>
        <li>
          <h4>
            <FontAwesomeIcon icon={"money-bill"} />
            Guaranteed
          </h4>
          <span>Money-Back Guarantee. Even if the container's empty.</span>
        </li>
      </ul>
    </Vert>
  )
}

export default Shaklee
