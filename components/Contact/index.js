import Head from 'next/head';

// import useAnalytics from '../../hooks/useAnalytics';
import useResetUI from '../../hooks/useResetUI';
import useContact from './hooks';

const Contact = () => {
  useResetUI();
  // useAnalytics(pageTitle);
  useContact();

  return (
    <>
      <Head>
        <title>Contact | Full-Stack Web Developer | Gilbert L.</title>
      </Head>

      <section className="contact" id="contact">
        <div className="container text-center min-h-screen contact__container px-15 center">
          <div>
            <h1 className="section-heading">Contact Me</h1>
            <p className="contact__desc">
              If you wanna get in touch, talk to me about a project
              collaboration or just say hi, click the button below and fill up
              the awesome form or hire me on{' '}
              <a
                rel="noreferrer"
                href="https://www.upwork.com/freelancers/~0110dcf905a3a19183"
                target="_blank"
                className="text-bold"
              >
                Upwork
              </a>{' '}
              and let&apos;s talk.
            </p>

            <button className="btn btn-primary mt-15 contact__send-btn">
              Send Message
            </button>
          </div>
        </div>

        <div className="contact-form">
          <div className="contact-form__container min-h-screen px-15">
            <div className="w-full contact-form__content">
              <button className="close-btn contact-form__close"></button>
              <form className="contact-form__form" action="">
                <div className="contact-form__input-wrapper">
                  <input
                    type="text"
                    name="name"
                    className="contact-form__input"
                    required
                  />
                  <label className="contact-form__label">
                    <span className="contact-form__span">Your Name</span>
                  </label>
                </div>
                <div className="contact-form__input-wrapper">
                  <input
                    type="email"
                    name="email"
                    className="contact-form__input"
                    required
                  />
                  <label className="contact-form__label">
                    <span className="contact-form__span">Your Email</span>
                  </label>
                </div>
                <div className="contact-form__input-wrapper">
                  <textarea
                    name="message"
                    className="contact-form__input contact-form__textarea"
                    required
                  ></textarea>
                  <label className="contact-form__label">
                    <span className="contact-form__span">Message</span>
                  </label>
                </div>
                <button className="btn btn-primary mt-15 contact-form__send-form">
                  Send
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
