

const Testimonials = ({ data }) => {

    if (data) {
        var testimonials = data.testimonials.map(function (testimonials) {
          return (
            <div key={testimonials.user} className="space-y-5 font-librebaskervilleItalic">
                <h1 className=" text-3xl">{testimonials.text}</h1>
                <p> --{testimonials.user}</p>
            </div>
          );
        });
      }

    return (
        <div className="bg-bgT bg-cover bg-fixed w-full overflow-hidden relative bg-no-repeat bg-center p-6 md:px-16 py-12" id="testimonials">
            <div className="text-white text-center space-y-5">
                <div>
                    <span className="hidden md:inline-block font-librebaskervilleItalic pr-3 text-7xl text-left">""</span>
                    <h1 className="md:hidden tracking-widest text-2xl mt-10 font-semibold text-center font-OpenSansBold">CLIENT TESTIMONIALS</h1>
                </div>
                {testimonials}
            </div>
        </div>
    )
}

export default Testimonials;
