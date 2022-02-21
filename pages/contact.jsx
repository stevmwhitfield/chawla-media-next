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

  if (formState.succeeded) {
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
          <h2>Inquire about a photoshoot or anything on your mind</h2>
        </section>
        {/*  */}
        <section id={styles.formContainer}>
          <form id={styles.form} name="contact" method="POST" onSubmit={submit}>
            <input type="hidden" name="form-name" value="contact" />
            <div id={styles.name} className={styles.fieldContainer}>
              <label>
                Full Name <span className={styles.required}>*</span>
                <input
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  pattern="^([ \u00c0-\u01ffa-zA-Z'\-])+$"
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
            <div id={styles.email} className={styles.fieldContainer}>
              <label>
                Email <span className={styles.required}>*</span>
                <input
                  type="email"
                  name="email"
                  placeholder="johndoe@email.com"
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={formState.errors}
                />
              </label>
            </div>
            <div id={styles.phone} className={styles.fieldContainer}>
              <label>
                Phone Number <span className={styles.required}>*</span>
                <input
                  type="phone"
                  name="phone"
                  placeholder="123-456-7890"
                  pattern="^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
                  required
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={formState.errors}
                />
              </label>
            </div>
            <div id={styles.location} className={styles.fieldContainer}>
              <label>
                Location <span className={styles.required}>*</span>
                <input
                  type="text"
                  name="location"
                  placeholder="Orlando, FL"
                  pattern="^[A-Z][A-Za-z\s]+, [A-Z]{2}"
                  required
                />
                <ValidationError
                  prefix="Location"
                  field="location"
                  errors={formState.errors}
                />
              </label>
            </div>
            <div id={styles.photoshoot} className={styles.fieldContainer}>
              <label>
                Type of Photoshoot <span className={styles.required}>*</span>
                <select name="photoshoot-type" required>
                  <option disabled selected>
                    -- Select an option --
                  </option>
                  <optgroup label="Photoshoots">
                    <option value="stills">Stills</option>
                    <option value="rollers">Rollers</option>
                    <option value="portraits">Portraits</option>
                    <option value="cinematic">Cinematic</option>
                  </optgroup>
                  <optgroup label="Misc.">
                    <option value="other">Other - please specify below</option>
                  </optgroup>
                </select>
                <ValidationError
                  prefix="Photoshoot"
                  field="photoshoot"
                  errors={formState.errors}
                />
              </label>
            </div>
            <div id={styles.date} className={styles.fieldContainer}>
              <label>
                Date <span className={styles.required}>*</span>
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
            <div id={styles.message} className={styles.fieldContainer}>
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
            <button
              id={styles.button}
              type="submit"
              disabled={formState.submitting}
            >
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
