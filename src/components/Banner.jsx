import { Calendar, MapPin, Clock } from "lucide-react";
import HeroSlide from "./HeroSlide";


const Banner = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white shadow-sm">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gray-900 rounded-sm flex items-center justify-center">
            <span className="text-white text-sm font-bold">△</span>
          </div>
          <span className="text-sm text-gray-600">hey.@alexcarter.com</span>
        </div>
        <button className="p-2">
          <div className="w-6 h-6 flex flex-col justify-center space-y-1">
            <div className="w-full h-0.5 bg-gray-600"></div>
            <div className="w-full h-0.5 bg-gray-600"></div>
            <div className="w-full h-0.5 bg-gray-600"></div>
          </div>
        </button>
      </header>

      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Main Content */}
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm{" "}
                <span className="inline-flex items-center">
                  <img
                    className="w-12 h-12 lg:w-16 lg:h-16 rounded-full object-cover mx-2"
                    src="/placeholder.svg?height=64&width=64"
                    alt="Profile"
                  />
                </span>
                Alex Carter!
              </h1>

              <div className="space-y-2">
                <p className="text-xl text-gray-600">Product Lead</p>
                <p className="text-xl">
                  <span className="text-orange-500 font-semibold">
                    Apple Design.
                  </span>
                  <span className="ml-2 text-sm bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    Open to work
                  </span>
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <button className="btn bg-gray-900 text-white hover:bg-gray-800 px-6 py-3 rounded-lg font-medium">
                  Book a call
                </button>
                <p className="text-gray-600 text-sm max-w-xs">
                  Feel free to explore my portfolio and reach out – I'd love to
                  connect!
                </p>
              </div>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center space-x-2 mb-2">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-900">
                    Experience
                  </span>
                </div>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>• Product Lead at Apple</li>
                  <li>• Product Designer at Google</li>
                  <li>• UX Designer at Figma</li>
                </ul>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center space-x-2 mb-2">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-900">
                    From portfolio
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Check out my latest work and case studies showcasing design
                  solutions.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm border">
                <div className="flex items-center space-x-2 mb-2">
                  <Clock className="w-4 h-4 text-gray-500" />
                  <span className="text-sm font-medium text-gray-900">
                    Next availability
                  </span>
                </div>
                <p className="text-sm text-gray-600">
                  Open from this Monday to discuss new opportunities.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Portfolio Slider */}
          <div className="flex justify-center lg:justify-end">
            {/* <Slide /> */}
            <HeroSlide/>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-16 bg-white rounded-lg p-8 shadow-sm border">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">
                30 Discovery Call
              </h3>
              <p className="text-gray-600">
                Let's discuss your project and see how we can work together.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">
                <p>Mon-Fri</p>
                <p>9am-5pm EST</p>
              </div>
              <button className="btn bg-gray-900 text-white hover:bg-gray-800 px-6 py-2 rounded-lg">
                Book now
              </button>
            </div>
          </div>
        </div>

        {/* Location */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm tracking-wider">MONTREAL</p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
