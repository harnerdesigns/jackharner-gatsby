import React, { useState, useEffect } from "react"

import Layout from "../components/layout"
import PageTitle from "../components/pageTitle"
import Seo from "../components/seo"
import ReCAPTCHA from "react-google-recaptcha";


const HireMe = () => {

  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    url: "",
    budget: "",
    how: [],
    referral: "",
    other: "",

  });

  const [success, setSuccess] = useState(false)
  const [verified, setVerified] = useState(false)
  
  const [error, setError] = useState()

  const options = {
    70629: { checked: false, label: 'Brand new website / Full redesign of existing website' }, 70631: { checked: false, label: 'Minor edits or bug fixes to existing site' }, 70633: { checked: false, label: 'Adding new functionality to existing site' }, 70651: { checked: false, label: 'E-Commerce Consulting' }, 70652: { checked: false, label: 'Other' }
  };

  const [checkboxes, setCheckboxes] = useState(options);

  const toggle = key => {

    let newKey = { ...checkboxes[key], ['checked']: !checkboxes[key]?.checked }
    setCheckboxes({ ...checkboxes, [key]: newKey });
  };

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const captchaChange = (value) =>{
    if(value){
      setVerified(true)
    }
    }


    const submitForm = (e) => {
      e.preventDefault();
      const requestOptions = {
        method: 'POST',
        crossDomain:true,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          "custom_form_uuid": "712488cba4c164a",
          "embed_form": false,
          "hide_header": false,
          "custom_form_request": {
              "uuid": null,
              "custom_form_answers": [
                  {
                      "question_id": 87164,
                      "question_kind": "text",
                      "value": formData.url,
                      "question_option_ids": [],
                      "attachments": []
                  },
                  {
                      "question_id": 87172,
                      "question_kind": "multiple_choice",
                      "value": "",
                      "question_option_ids": formData.how,
                      "attachments": []
                  },
                  {
                      "question_id": 87176,
                      "question_kind": "number",
                      "value": formData.budget,
                      "question_option_ids": [],
                      "attachments": []
                  },
                  {
                      "question_id": 87180,
                      "question_kind": "text",
                      "value": formData.referral,
                      "question_option_ids": [],
                      "attachments": []
                  },
                  {
                    "question_id": 87182,
                    "question_kind": "text",
                    "value": formData.other,
                    "question_option_ids": [],
                    "attachments": []
                }
              ],
              "client_organization_email": formData.email,
              "client_organization_first_name": formData.firstname,
              "client_organization_last_name": formData.lastname,
              "answered": true
          }
      })
    };
    fetch('https://app.hellobonsai.com/api/v1/custom_form_request_answer', requestOptions)
    .then(response => response.json())
    .then(data => setSuccess(true));

    }


  useEffect(() => {
    setFormData({ ...formData, ['how']: Object.keys(checkboxes).filter(x => checkboxes[x].checked) })
    console.log({formData})
  }, [checkboxes])

  useEffect(() => {
    console.log(formData)
  }, [formData])


  return (
    <Layout footerCTA={false}>
      <Seo title="Hire Me" />
      <PageTitle>Hire Me</PageTitle>
      <section className="slim black content content--centered">
        <h3>Thank you for your interest in my Web Development & E-Commerce Consulting Services!</h3>
        <p>Please fill out the form below to give me a better idea if we'd be a good fit or not.</p>
        <small>
          All information is absolutely confidential.</small>
      </section>
{success ? <h1>Success!</h1> : ""}
      <section className="slim black content">
        <form id="hire-me-form" onSubmit={submitForm}>
          <h3>Contact Info</h3>
          <div className="grid grid--2">
            <label>
              First Name
              <input onChange={handleChange} type="text" name="firstname" placeholder="Darth" value={formData.firstname} />
            </label>
            <label>
              Last Name
              <input onChange={handleChange} type="text" name="lastname" placeholder="Vader" value={formData.lastname} />
            </label>
          </div>
          <label>
            Your Email
            <input onChange={handleChange} type="text" name="email" placeholder="Email" value={formData.email} />
          </label>

          <h3>Site Info</h3>

          <label>
            Existing Site URL
            <input onChange={handleChange} type="text" name="url" placeholder="" value={formData.url} />
          </label>
          <label>
            Estimated Budget For This Project
            <select onChange={handleChange} name="budget" placeholder="$10,000" value={formData.budget}>
              <option>$3-5,000</option>
              <option>$5-10,000</option>
              <option>$10-50,000</option>
              <option>$50,000+</option>
            </select>
          </label>

<h3>How Can I Help You Sell Better Online?</h3>
          <div className="grid checkboxes">
            {Object.keys(checkboxes).map((key) => (
              <>
              <input
              readOnly
              type="checkbox"
              checked={checkboxes[key].checked || false}
              onClick={() => toggle(key)}
              value={key}
              id={key}
            />
              <label for={key} className="flex flex--start" key={checkboxes[key].label}>
                
                {checkboxes[key].label}
              </label>
              </>
            ))}          </div>

          <h3>Other Info</h3>
          <label>
              How did you find me?
          <textarea onChange={handleChange} type="text" name="referral" placeholder="Twitter, Instagram, Google, a previous client of mine, etc..." value={formData.referral}>{formData.referral}</textarea>
          </label>
          <label>
              Anything else I need to know before we get started?
          <textarea onChange={handleChange} type="text" name="other" placeholder="" value={formData.other}>{formData.other}</textarea>
          </label>

          <ReCAPTCHA
            sitekey="6LchjBYjAAAAAPSBakr9qjRwxvtACaOMqIUKpShz" 
            onChange={captchaChange} />

          <input type="submit" value="Submit" />


        </form>
      </section>
    </Layout>
  )
}

export default HireMe

