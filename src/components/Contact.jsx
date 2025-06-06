import {
  Github,
  Twitter,
  Linkedin,
  Facebook,
  Globe,
  MessageCircle,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Let's Connect</h1>
          <p className="text-slate-400 text-lg">
            Got a project in mind or just want to chat? Fill out the form and
            I'll get back to you!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Profile Info */}
          <div className="space-y-8">
            {/* Profile Card */}
            <div className="flex items-start space-x-4">
              <div className="avatar">
                <div className="w-20 h-20 rounded-full ring ring-orange-400 ring-offset-base-100 ring-offset-2">
                  <img
                    src="/placeholder.svg?height=80&width=80"
                    alt="Profile"
                  />
                </div>
              </div>
              <div>
                <h2 className="text-2xl font-bold text-orange-400 mb-2">
                  AN Mamun
                </h2>
                <p className="text-slate-300 text-sm mb-3">
                  Software Engineer | Django & Python Developer | Competitive
                  Programmer
                </p>
                <p className="text-slate-400 text-sm">
                  My name is Nur Mohammad Al Mamun, but I'm popularly known as{" "}
                  <span className="text-orange-400 font-semibold">
                    AN Mamun
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-slate-300">
                <MapPin className="w-5 h-5 text-orange-400" />
                <span>Sylhet, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Mail className="w-5 h-5 text-orange-400" />
                <a
                  href="mailto:anmamun0@gmail.com"
                  className="text-orange-400 hover:underline"
                >
                  anmamun0@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>+880 1782 059949</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-300">
                <Globe className="w-5 h-5 text-orange-400" />
                <a href="#" className="text-blue-400 hover:underline">
                  anmamun4.vercel.app
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 pt-4">
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <Globe className="w-6 h-6" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-white transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="space-y-6">
            <form className="space-y-6">
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">Your Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Full Name"
                  className="input input-bordered bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-orange-400"
                />
              </div>

              {/* Email and Subject Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-300">
                      Your Email
                    </span>
                  </label>
                  <input
                    type="email"
                    placeholder="youremail@example.com"
                    className="input input-bordered bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-orange-400"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-300">Subject</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="input input-bordered bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-orange-400"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-slate-300">
                    Your Message
                  </span>
                </label>
                <textarea
                  placeholder="Type your message here..."
                  className="textarea textarea-bordered h-32 bg-slate-700 border-slate-600 text-white placeholder-slate-400 focus:border-orange-400 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="btn bg-slate-600 hover:bg-slate-500 border-slate-600 text-white px-8"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
