import { useForm, ValidationError } from "@formspree/react";
import Router from "next/router";
import { useEffect, useState } from "react";
import CustomHead from "../components/Head/Head";
import Layout from "../components/Layout/Layout";
import styles from "../styles/Contact/Contact.module.scss";

const ContactPage = () => {
  const [formState, submit] = useForm(process.env.NEXT_PUBLIC_FORM);
  const [date, setDate] = useState("");
  let maxDate =
    (Number(date.substring(0, 4)) + 2).toString() + date.substring(4);

  useEffect(() => {
    const d = new Date();
    setDate(d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate());
  }, []);

  if (formState.success) {
    Router.push("/success");
  }

  return (
    <>
      <CustomHead
        title="Contact | Chawla Media"
        description="Schedule a photoshoot or just say hello."
        url="https://www.chawlamedia.com/contact"
      />
      <Layout>
        <section className="pageHeader">
          <h1>Let&apos;s Talk</h1>
          <h2>Inquire about a photoshoot or say hello</h2>
        </section>
        {/*  */}
        <section id={styles.formContainer}>
          <form id={styles.form} name="contact" method="POST" onSubmit={submit}>
            <input type="hidden" name="form-name" value="contact" />
            <div id={styles.nameContainer} style={{ margin: "120px" }}>
              <label>
                Full Name
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  pattern={/^([ \u00c0-\u01ffa-zA-Z'\-])+$/}
                  required
                  minLength={2}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={formState.errors}
                />
              </label>
            </div>
            <div id={styles.emailContainer}>
              <label>
                Email
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@email.com"
                  pattern={
                    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
                  }
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={formState.errors}
                />
              </label>
            </div>
            <div id={styles.phoneContainer}>
              <label>
                Phone Number
                <input
                  type="phone"
                  name="phone"
                  placeholder="123-456-7890"
                  pattern={
                    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/
                  }
                  required
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={formState.errors}
                />
              </label>
            </div>
            <div id={styles.photoshootContainer}>
              <label>
                Type of Photoshoot
                <select name="photoshoot-type" required>
                  <option disabled selected>
                    -- Select an option --
                  </option>
                  <option value="stills">Stills</option>
                  <option value="rollers">Rollers</option>
                  <option value="portraits">Portraits</option>
                  <option value="cinematic">Cinematic</option>
                  <option value="other">Other - please specify below</option>
                </select>
                <ValidationError
                  prefix="Photoshoot"
                  field="photoshoot"
                  errors={formState.errors}
                />
              </label>
            </div>
            <div id={styles.dateContainer}>
              <label>
                Date
                <input
                  type="date"
                  name="date"
                  required
                  min={date}
                  max={maxDate}
                />
                <ValidationError
                  prefix="Date"
                  field="date"
                  errors={formState.errors}
                />
              </label>
            </div>
            <div id={styles.locationContainer}>
              <label>
                Location
                <input
                  type="text"
                  name="location"
                  placeholder="Orlando, FL"
                  pattern={/^[A-Z][A-Za-z\s]+, [A-Z]{2}/}
                  required
                />
                <ValidationError
                  prefix="Location"
                  field="location"
                  errors={formState.errors}
                />
              </label>
            </div>
            <div id={styles.messageContainer}>
              <label>
                Additional Details
                <textarea name="message" cols="30" rows="10"></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={formState.errors}
                />
              </label>
            </div>
            <button type="submit" disabled={formState.submitting}>
              Send
            </button>
            <ValidationError errors={formState.errors} />
          </form>
        </section>
      </Layout>
    </>
  );
};

export default ContactPage;
