import React from "react"
import Typing from "../Typing"

export const NewsletterForm = () => {
  return (
    <>
      <script src="https://f.convertkit.com/ckjs/ck.5.js"></script>
      <form
        action="https://app.convertkit.com/forms/1552450/subscriptions"
        class="seva-form formkit-form"
        method="post"
        data-sv-form="1552450"
        data-uid="b4591383a4"
        data-format="inline"
        data-version="5"
        data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"facebook":null,"segment":null,"pinterest":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":true,"url":"https://convertkit.com?utm_source=dynamic&amp;utm_medium=referral&amp;utm_campaign=poweredby&amp;utm_content=form"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
        min-width="400 500 600 700 800"
      >
        <div class="formkit-background"></div>
        <div data-style="minimal">
          <div class="formkit-header" data-element="header">
            <h1>
              Learn&nbsp;
              <span class="title__box">
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
          <div class="formkit-subheader" data-element="subheader">
            <p>
              Sign up for my newsletter and receive Tutorials, Cool Resources,
              Early Access To Posts, &amp; More!{" "}
            </p>
          </div>
          <ul
            class="formkit-alert formkit-alert-error"
            data-element="errors"
            data-group="alert"
          ></ul>
          <div
            data-element="fields"
            data-stacked="false"
            class="seva-fields formkit-fields"
          >
            <div class="formkit-field">
              <input
                class="formkit-input"
                name="email_address"
                placeholder="Your email address"
                required=""
                type="email"
              />
            </div>
            <button data-element="submit" class="formkit-submit formkit-submit">
              <div class="formkit-spinner">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <span>Subscribe</span>
            </button>
          </div>
          <div class="formkit-guarantee" data-element="guarantee">
            I won't send you spam, pinky swear. Unsubscribe at any time.
          </div>
        </div>
      </form>
    </>
  )
}
