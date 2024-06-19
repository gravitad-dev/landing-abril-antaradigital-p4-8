import texts from "../../sections.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Noter2() {
  const settings = {
    dots: true,
    // infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 5000, // Tiempo en milisegundos entre cada transición
  };
  return (
    <section className="relative mt-7">
      <div className="max-w-6xl mx-auto px-4 sm:px-6  md:flex items-center justify-center">
        {/* Hero content */}
        <div className="pt-10 pb-12 md:pt-10 lg:pb-20 text-center">
          <h1 className="text-6xl font-bold mb-7">What Makes Us Different</h1>
          <p>
            We not only adopt the most advanced technologies but also tailor
            them to the specific needs of each client. Our strength lies in the
            combination of deep knowledge in AI, Blockchain, and smart home
            technology with a personalized and customer-centric approach. This
            allows us to offer unique and effective solutions that truly make a
            difference.
          </p>
        </div>
      </div>

      {/* <Slider {...settings}> */}
      <div className=" p-5 rounded">
        <div className="relative flex items-center">
          <img
            src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/rkypchxtnexmufporbc9.png"
            alt="img1"
            className=" border-8 border-white rounded-lg "
            style={{ borderWidth: "20px" }}
          />
          <div className="absolute md:left-1/2 lg:left-[600px] text-center md:text-start md:items-start p-10 bg-white shadow max-w-[680px] rounded">
            <h2 className="text-[#475569] text-xl font-bold ">Why Trust Us</h2>
            <p className="my-3">
              Why Antara Digital is Your Trusted Partner in Technological
              Innovation
            </p>
            <ul className="list-disc pl-5">
              <li>
                <p className="font-bold">Experience and Expertise:</p>
                We have a team of experts in emerging technologies with a strong
                track record in the industry. We stay at the forefront of
                technology to always offer the most advanced solutions.
              </li>
              <li>
                <p className="font-bold">Personalized Approach:</p>
                Each project is unique, and we work closely with our clients to
                understand and meet their specific needs.
              </li>
              <li>
                <p className="font-bold">Commitment to Quality:</p>
                We guarantee high-quality products and services that exceed
                expectations.
              </li>
            </ul>

            {/* <a
                className="flex items-center text-[#7C3AED] text-lg gap-2   font-semibold"
                href="/#"
              >
                Read Full Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-5 pt-1"
                >
                  <title>arrow</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a> */}
          </div>
        </div>
      </div>
      {/* <div className=" p-5 rounded">
          <div className="relative flex items-center">
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/rkypchxtnexmufporbc9.png"
              alt="img1"
              className=" border-8 border-white rounded-lg "
              style={{ borderWidth: "20px" }}
            />
            <div className="absolute md:left-1/2 lg:left-[600px] text-center md:text-start md:items-start p-10 bg-white shadow max-w-[680px] rounded">
              <h2 className="text-[#475569] font-bold mb-3">
                ARTIST & INVESTOR
              </h2>

              <p className="text-black font-semibold mb-7">
                Enim sagittis, sit porttitor morbi lobortis amet, libero
                adipiscing auctor. Malesuada tristique libero, id netus
                tincidunt. Egestas ac arcu amet nisl quis est ...
              </p>
              <a
                className="flex items-center text-[#7C3AED] text-lg gap-2   font-semibold"
                href="/#"
              >
                Read Full Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-5 pt-1"
                >
                  <title>arrow</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div> */}
      {/* <div className=" p-5 rounded">
          <div className="relative flex items-center">
            <img
              src="https://res.cloudinary.com/db60chvpz/image/upload/v1716247111/Wrapp/rkypchxtnexmufporbc9.png"
              alt="img1"
              className=" border-8 border-white rounded-lg "
              style={{ borderWidth: "20px" }}
            />
            <div className="absolute md:left-1/2 lg:left-[600px] text-center md:text-start md:items-start p-10 bg-white shadow max-w-[680px] rounded">
              <h2 className="text-[#475569] font-bold mb-3">
                ARTIST & INVESTOR
              </h2>

              <p className="text-black font-semibold mb-7">
                Enim sagittis, sit porttitor morbi lobortis amet, libero
                adipiscing auctor. Malesuada tristique libero, id netus
                tincidunt. Egestas ac arcu amet nisl quis est ...
              </p>
              <a
                className="flex items-center text-[#7C3AED] text-lg gap-2   font-semibold"
                href="/#"
              >
                Read Full Story
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={3}
                  stroke="currentColor"
                  className="w-6 h-5 pt-1"
                >
                  <title>arrow</title>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div> */}
      {/* </Slider> */}
    </section>
  );
}
export default Noter2;
