import React from "react"
import Typing from "../Typing"

export const NewsletterForm = React.forwardRef((props, ref) => {
  return (
    <>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <form
        action="https://app.convertkit.com/forms/1552450/subscriptions"
        className="seva-form formkit-form"
        id="newsletterSignup"
        method="post"
        data-sv-form="1552450"
        data-uid="b4591383a4"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div className="formkit-background"></div>
        <div data-style="minimal">
          <div className="formkit-header" data-element="header">
            <h1>
              Learn&nbsp;
              <span className="title__box">
                {" "}
                <Typing
                  words={[
                    "Web Dev",
                    "Automation",
                    "WordPress",
                    "Linux",
                    "Python",
                    "CSS",
                  ]}
                />
              </span>
              With Me
            </h1>
          </div>
          <div className="formkit-subheader" data-element="subheader">
            <p>
              Sign up for my newsletter and receive Tutorials, Cool Resources,
              Early Access To Posts, &amp; More!{" "}
            </p>
          </div>
          <ul
            className="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          <div
            data-element="fields"
            data-stacked="false"
            className="seva-fields formkit-fields"
          >
            <div className="formkit-field">
              <input
                className="formkit-input"
                name="email_address"
                placeholder="Your email address"
                required=""
                type="email"
                ref={ref}
              />
            </div>
            <button data-element="submit" className="formkit-submit formkit-submit">
              <div className="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Subscribe</span>
            </button>
          </div>
          <div className="formkit-guarantee" data-element="guarantee">
            I won't send you spam, pinky swear. Unsubscribe at any time.
          </div>
        </div>
      </form>
    </>
  )
})
