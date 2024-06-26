function Mobile() {
  return (
    <section className="relative">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6  flex flex-col md:flex-row items-center justify-between mt-10">
        <div className="py-6 md:py-0 md:w-1/2 px-6 sm:px-10 md:px-0">
          <div className="relative flex flex-col items-center   ">
            <div className="md:ml-10 mt-10 w-7xl">
              <img
                className="md:max-w-none mx-auto md:mr-20"
                src="https://res.cloudinary.com/db60chvpz/image/upload/v1716351443/Wrapp/g0qw27xjwi0vpewwl5pa.png"
                width={500}
                height="300"
                alt="iPad"
              />
            </div>
          </div>
        </div>
        <div className=" mx-auto text-center ">
          <div className="text-center md:text-start ">
            <h2 className="text-[#475569] font-semibold">NO LIMITS</h2>
            <h1 className="text-black text-4xl font-bold mb-5">Mission </h1>
            <p className="text-black mb-7">
              Our mission is to lead the digital revolution in homes and
              businesses by implementing advanced technologies. We strive to
              provide innovative solutions that not only enhance the quality of
              life but also optimize efficiency and security in every space we
              transform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Mobile;
