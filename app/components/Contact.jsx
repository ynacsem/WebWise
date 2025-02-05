import { FaFacebook, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

function Contact({id}) {
  const contactMethods = [
    {
      title: "Connect With Us",
      content: [
        {
          icon: <FaInstagram />,
          text: "Instagram",
          href: "https://www.instagram.com/webcraftalgeria/",
          color: "text-pink-500",
        },
        { icon: <FaFacebook />, text: "Facebook", href: "https://facebook.com", color: "text-blue-500" },
        { icon: <FaTwitter />, text: "Twitter", href: "https://twitter.com", color: "text-sky-400" },
      ],
    },
    {
      title: "Email Us",
      icon: <FaEnvelope className="w-6 h-6" />,
      content: "infowebcraftalgeria@gmail.com",
    },
  ];

  return (
    <div  className="bg-gradient-to-b from-yellow-50 to-white py-24" id="contact">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12 text-gray-800">Get in Touch</h1>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-6xl mx-auto">
          {/* Contact Cards (Left Side) */}
          <div className="w-full md:w-1/2 space-y-6">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="overflow-hidden group transition-all duration-300 hover:shadow-xl border-2 border-yellow-200 hover:border-yellow-400"
              >
                <CardHeader className="bg-yellow-100 transition-colors group-hover:bg-yellow-200">
                  <CardTitle className="flex items-center text-2xl font-semibold text-gray-800">
                    {method.icon && <span className="mr-3">{method.icon}</span>}
                    {method.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 bg-white">
                  {Array.isArray(method.content) ? (
                    <div className="space-y-4">
                      {method.content.map((item, i) => (
                        <a
                          key={i}
                          href={item.href}
                          className={`flex items-center text-lg font-medium ${item.color} hover:underline transition-all duration-300 ease-in-out transform hover:translate-x-2`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span className="mr-3 text-2xl">{item.icon}</span>
                          {item.text}
                        </a>
                      ))}
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <FaEnvelope className="mr-3 text-2xl text-yellow-500" />
                      <p className="text-lg font-medium text-gray-700">{method.content}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>

          {/* SVG Illustration (Right Side) */}
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 500 500"
              className="w-full h-auto max-w-md"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="250" cy="250" r="200" stroke="#FBBF24" strokeWidth="10" fill="#FEF3C7" />
              <path
                d="M150 200 Q250 100 350 200 T250 400"
                stroke="#F59E0B"
                strokeWidth="8"
                fill="none"
              />
              <circle cx="250" cy="250" r="50" fill="#FCD34D" />
              <path
                d="M250 200 L270 250 L250 300 L230 250 Z"
                fill="#F59E0B"
              />
              <text x="250" y="250" textAnchor="middle" dominantBaseline="middle" fontSize="24" fill="#1E293B" fontFamily="Arial">
                Contact Us
              </text>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;