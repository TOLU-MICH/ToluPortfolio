import Button from "../component/Button";
import personIcon from "../assets/person.svg";
import mailIcon from "../assets/mail.svg";
import linkedin from "../assets/linkedin.svg";
import whatsapp from "../assets/whatsapp.svg";
import pdf from "../assets/resume.pdf";
import { useRef } from "react";

export default function ContactMe() {
  const name = useRef();
  const email = useRef();
  const phone = useRef();
  const subject = useRef();
  const message = useRef();

  const handleFocus = (e) => {
    const inp = e.target;
    inp.nextElementSibling.style.top = "-5px";
  };

  // if the input loses focus no value it will take the label down,
  //  else the label will at the top
  const handleBlur = (e) => {
    const inp = e.target;
    if (inp.value.length >= 1) inp.nextElementSibling.style.top = "-5px";
    else inp.nextElementSibling.style.top = "50%";
  };

  //if the two password entered does not match it will throw a warning to the user
  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail();
  };

  function sendEmail() {
    const bodyMessage = `Full Name: ${name.current.value} <br/> Email: ${email.current.value} <br/> Phone Number: ${phone.current.value} <br/> Message:${message.current.value}`;

    Email.send({
      SecureToken: "e3220c87-c37f-4bdf-b547-5354929835cd",
      To: "francismicheal609@gmail.com",
      From: "francismicheal609@gmail.com",
      Subject: subject.current.value,
      Body: bodyMessage,
    }).then((message) => {
      console.log(message);
      if ((message = "ok")) {
        Swal.fire({
          title: "Success!",
          text: "Message was sent sucessfully!",
          icon: "success",
        });
      }
    });
  }

  return (
    <form
      className="wrap-content mb-0 md:mb-52 mt-36"
      action="#"
      onSubmit={(e) => handleSubmit(e)}
      id="contact"
    >
      <h2
        className="font-bold text-2xl sm:text-3xl lg:text-4xl font-[Inconsolata] mb-5 lg:mb-0"
        data-aos="fade-down"
        data-aos-delay="100"
      >
        CONTACT ME
      </h2>
      <div
        className="flex flex-wrap justify-between"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <ul className="font-bold font-small md:text-xl order-2 md:order-1 flex flex-col my-7 space-y-3 lg:space-y-4">
          <li className="flex text-sm lg:text-lg font-normal">
            <img src={mailIcon} alt="" className="lg:w-8 w-5 mr-2 lg:mr-4" />
            <a href="mailto:francismicheal609@gmail.com">
              francismicheal609@gmail.com
            </a>
          </li>
          <li className="flex text-sm lg:text-lg font-normal">
            <img src={whatsapp} alt="" className="lg:w-8 w-5 mr-2 lg:mr-4" />
            <a href="https://wa.me/08127952290">Contact me on WhatsApp</a>
          </li>
          <li className="flex text-sm lg:text-lg font-normal">
            <img src={linkedin} alt="" className="lg:w-8 w-5 mr-2 lg:mr-4" />
            <a href="https://www.linkedin.com/in/micheal-francis-961b30267">
              Visit my LinkedIn profile
            </a>
          </li>
          <li>
            <a href={pdf} download>
              <Button value="Download cv" />
            </a>
          </li>
        </ul>
        <div className="md:w-[40%] font-bold font-small md:text-xl order-1 md:order-2">
          {/* Your name */}
          <div className=" input-box  flex  position  relative  w-[90%]  h-12 input-bg rounded-full mb-7 md:my-7">
            <img
              src={personIcon}
              alt=""
              className="w-5 h-5 absolute right-4 top-4"
            />
            <input
              type="text"
              onBlur={handleBlur}
              onFocus={handleFocus}
              minLength={5}
              maxLength={50}
              required
              ref={name}
              className=" w-full  h-full  bg-transparent  outline-none  font-semibold pl-8 px-4"
            />
            <label className=" absolute  top-1/2 left-8  text-sm md:text-lg -translate-y-1/2  font-medium  pointer-events-none  transition-[.5s]">
              Your name
            </label>
          </div>
          {/* Email */}
          <div className=" input-box  flex  position  relative  w-[95%]  h-12 input-bg rounded-full  my-7">
            <img
              src={mailIcon}
              alt=""
              className="w-5 h-5 absolute right-4 top-4"
            />
            <input
              type="email"
              onBlur={handleBlur}
              onFocus={handleFocus}
              minLength={10}
              maxLength={50}
              required
              ref={email}
              className=" w-full  h-full  bg-transparent  outline-none  font-semibold pl-8 px-4"
            />
            <label className=" absolute  top-1/2 left-8  text-sm md:text-lg -translate-y-1/2  font-medium  pointer-events-none  transition-[.5s]">
              email
            </label>
          </div>
          {/* Phone  */}
          <div className=" input-box  flex  position  relative  w-[95%]  h-12 input-bg rounded-full  my-7">
            <img
              src={mailIcon}
              alt=""
              className="w-5 h-5 absolute right-4 top-4"
            />
            <input
              type="number"
              onBlur={handleBlur}
              onFocus={handleFocus}
              minLength={10}
              maxLength={50}
              required
              ref={phone}
              className=" w-full  h-full  bg-transparent  outline-none  font-semibold pl-8 px-4"
            />
            <label className=" absolute  top-1/2 left-8  text-sm md:text-lg -translate-y-1/2  font-medium  pointer-events-none  transition-[.5s]">
              phone
            </label>
          </div>
          {/* Your subject */}
          <div className=" input-box  flex  position  relative  w-[90%]  h-12 input-bg rounded-full mb-7 md:my-7">
            <img
              src={personIcon}
              alt=""
              className="w-5 h-5 absolute right-4 top-4"
            />
            <input
              type="text"
              onBlur={handleBlur}
              onFocus={handleFocus}
              minLength={10}
              maxLength={50}
              required
              ref={subject}
              className=" w-full  h-full  bg-transparent  outline-none  font-semibold pl-8 px-4"
            />
            <label className=" absolute  top-1/2 left-8  text-sm md:text-lg -translate-y-1/2  font-medium  pointer-events-none  transition-[.5s]">
              Subject
            </label>
          </div>
          {/* message */}
          <div className=" input-box  flex  position  relative  w-full  h-[30vh] input-bg rounded-3xl  my-7">
            <img
              src={personIcon}
              alt=""
              className="w-5 h-5 absolute right-4 top-4"
            />
            <input
              type="text"
              onBlur={handleBlur}
              onFocus={handleFocus}
              minLength={10}
              maxLength={50}
              required
              ref={message}
              className=" w-full  h-full  bg-transparent  outline-none  font-semibold pl-8 px-4"
            />
            <label className=" absolute  top-[10%] left-8  text-sm md:text-lg -translate-y-1/2  font-medium  pointer-events-none  transition-[.5s]">
              your message
            </label>
          </div>
          <input
            type="submit"
            className="md:text-xl mr-2 mb-2 py-1 md:py-2 pl-5 pr-[.8rem] w-fit rounded-full  bg-gray-800  bg-gradient-to-b text-white from-[#115DCE] to-[#042B66] list-none"
            value={"submit"}
          />
        </div>
      </div>
    </form>
  );
}
