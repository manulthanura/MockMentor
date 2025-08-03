import { Container } from "@/components/container";

const ServicePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        {/* Main Header Section - Following about.tsx pattern */}
        <div className="flex flex-col items-center justify-center w-full py-20 text-center">
          <h1 className="mb-10 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">
            Our Services
          </h1>
          <p className="mb-8 text-base text-body-color max-w-4xl">
            MockMentor offers two powerful AI-driven services designed to elevate your career prospects. Our innovative platform combines cutting-edge technology with personalized learning to help you succeed in today's competitive job market.
          </p>
        </div>

        {/* Service 1: Interview Preparation */}
        <div className="flex flex-col items-center justify-center w-full py-20 text-justify">
          <h1 className="mb-10 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 text-center">
            AI-Powered Interview Preparation
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-8 text-base text-body-color">
                Our flagship interview preparation service uses advanced machine learning algorithms to create realistic, adaptive interview scenarios. The AI adjusts question difficulty and topics based on your performance, ensuring a personalized learning experience that grows with your skills.
              </p>
              <p className="mb-8 text-base text-body-color">
                With real-time feedback and performance analytics, you'll receive detailed insights into your coding speed, problem-solving approaches, and communication skills. Our platform simulates the dynamic nature of real-world technical interviews, where questions evolve based on your responses.
              </p>
              <p className="mb-8 text-base text-body-color">
                Studies show that candidates using AI-powered preparation tools demonstrate 40% faster improvement compared to traditional methods. Reduce interview anxiety and build confidence through continuous, tailored practice sessions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Key Features:</h3>
              <ul className="space-y-3 text-body-color">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Adaptive AI questioning based on skill level
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Real-time performance feedback
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Progress tracking and analytics
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Multiple programming languages support
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Industry-specific interview scenarios
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service 2: CV Enhancement */}
        <div className="flex flex-col items-center justify-center w-full py-20 text-justify">
          <h1 className="mb-10 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900 text-center">
            Intelligent CV Enhancement - TailorMyResume
          </h1>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="bg-gradient-to-br from-green-50 to-emerald-100 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold mb-4 text-slate-900">Key Features:</h3>
              <ul className="space-y-3 text-body-color">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  AI-powered content optimization
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Job-specific keyword matching
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  ATS-friendly formatting
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Industry-standard templates
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 mt-1">✓</span>
                  Achievement quantification suggestions
                </li>
              </ul>
            </div>
            <div>
              <p className="mb-8 text-base text-body-color">
                Transform your resume into a powerful career tool with our AI-driven CV enhancement service, TailorMyResume. Our intelligent system analyzes job descriptions and optimizes your resume content to match specific role requirements, significantly improving your chances of passing ATS screenings.
              </p>
              <p className="mb-8 text-base text-body-color">
                TailorMyResume provides personalized recommendations for improving your resume structure, content, and formatting. From keyword optimization to achievement quantification, our AI ensures your resume stands out in today's competitive job market.
              </p>
              <p className="mb-8 text-base text-body-color">
                With industry-specific templates and ATS-friendly formatting, your enhanced CV will not only look professional but also perform well in automated screening systems used by most companies today.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section - Interview Preparation */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl">
            <div className="lg:py-14 p-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-between flex-col lg:flex-row">
              <div className="block text-center mb-5 lg:text-left lg:mb-0">
                <h2 className="font-manrope text-3xl text-white font-semibold mb-5 lg:mb-2">
                  Ready to ace your next interview?
                </h2>
                <p className="text-lg text-blue-100">
                  Join thousands of candidates who have improved their interview success rate with MockMentor.
                </p>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-blue-600 font-medium py-4 px-8 transition-all duration-500"
              >
                Start Practicing
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                    stroke="#4F46E5"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section - CV Enhancement */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl">
            <div
              className="lg:py-14 p-10 rounded-2xl bg-gradient-to-r from-green-600 to-lime-600 flex items-center justify-between flex-col lg:flex-row"
            >
              <div className="block text-center mb-5 lg:text-left lg:mb-0">
                <h2
                  className="font-manrope text-3xl text-white font-semibold mb-5 lg:mb-2"
                >
                  Wanna tailor your resume?
                </h2>
                <p className="text-lg text-green-100">
                  Crafting the perfect resume can be tough, but TailorMyResume simplifies the process.
                </p>
              </div>
              <a
                href="#"
                className="flex items-center gap-2 bg-white rounded-full shadow-sm text-lg text-green-600 font-medium py-4 px-8 transition-all duration-500"
              >
                Try TailorMyResume
                <svg
                  width="19"
                  height="14"
                  viewBox="0 0 19 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.75 7L16.4167 7M11.8333 12.5L16.6852 7.64818C16.9907 7.34263 17.1435 7.18985 17.1435 7C17.1435 6.81015 16.9907 6.65737 16.6852 6.35182L11.8333 1.5"
                    stroke="#4F46E5"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
};

export default ServicePage;