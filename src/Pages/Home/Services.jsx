import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/all-services")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setServices(data);
      });
  }, []);
  return (
    <div>
      <div className="text-center space-y-6 mb-14">
        <p className="text-sm font-bold text-[#FF3811]">Service</p>
        <h2 className="font-bold text-5xl">Our Service Area</h2>
        <p className="text-base font-normal text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which don't look even slightly
          believable.
        </p>
      </div>

      <div className="grid gap-8 justify-center md:grid-cols-2  lg:grid-cols-3 ">
        {services.map((service) => (
          <div
            key={service._id}
            className="border border-[#E8E8E8] rounded-lg w-[364px]"
          >
            <div className="w-11/12 mx-auto my-4">
              <img className="rounded-lg" src={service.img} alt="" />
            </div>
            <div className="w-11/12  mx-auto mb-4  flex justify-between items-center">
              <div>
                <h2 className="font-bold text-2xl">{service.title}</h2>
                <p className="text-[#FF3811] text-xl font-semibold">
                  Price : ${service.price}
                </p>
              </div>
              <div>
                <Link to={`/checkout/${service._id}`}>
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6 text-[#FF3811]"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                      />
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
