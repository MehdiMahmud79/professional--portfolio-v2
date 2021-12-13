import React from "react";

const Footer = () => {
  return (
    <footer
      class="bg-blue-400
         text-3xl text-white text-center
         border-t-4 border-gray-500
         fixed
         inset-x-0
         bottom-0
         p-4"
    >
      <div
        class="
          flex
          justify-content-center justify-between
          p-4
          text-gray-800
        "
      >
        <div class="mx-5 ">
          <p className="text-lg">Get connected with me on social networks:</p>
        </div>
        <div className="fs-5">
          <a
            href="https://www.researchgate.net/profile/Mehdi-Mahmud"
            className="mx-4  text-decoration-none"
          >
            <i className="fab fa-researchgate"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/mehdi-mahmud/"
            className="mx-4  text-decoration-none"
          >
            <i class="fab fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/mehdimahmud79"
            className="mx-4  text-decoration-none"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>
      </div>{" "}
    </footer>
  );
};

export default Footer;
