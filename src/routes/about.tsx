import { Container } from "@/components/container";

const AboutPage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="flex flex-col items-center justify-center w-full py-20 text-center">
          <h1 className="mb-10 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">
            About MockMentor
          </h1>
          <p className="mb-8 text-base text-body-color">
            MockMentor is an innovative AI-powered interview preparation platform designed to help candidates excel in technical interviews. Our mission is to provide personalized, adaptive learning experiences that empower users to build confidence and improve their skills.
          </p>
          <p className="mb-8 text-base text-body-color">
            Founded in 2025, we set out to build an AI-powered interview simulator that provides personalized feedback, adapts to your skill level, and helps reduce interview anxiety. Our platform uses advanced machine learning to create realistic interview scenarios that evolve as your skills improve.
          </p>
          <p className="mb-8 text-base text-body-color">
            At MockMentor, we believe everyone deserves access to effective interview preparation tools. We're committed to continuous improvement and innovation, ensuring our platform remains at the cutting edge of AI-assisted learning.
          </p>
        </div>
        {/* background */}
        <div className="flex flex-col items-center justify-center w-full py-20 text-justify">
          <h1 className="mb-10 text-4xl sm:text-5xl font-medium tracking-tight text-slate-900">
            Why MockMentor?
          </h1>
          <p className="mb-8 text-base text-body-color">
            The demand for AI-powered tools in various sectors is steadily increasing, and the field of interview preparation is no exception. A recent study, the 2024 DevSkills Report, highlights a significant trend where 78% of candidates experience heightened anxiety during technical interviews, indicating a growing need for better, more effective preparation methods. Traditional interview preparation often relies on static mock interviews or self-assessment methods, which fail to provide a personalized learning experience. This gap creates an opportunity for innovative solutions powered by AI.
          </p>
          <p className="mb-8 text-base text-body-color">
            Existing mock interview platforms lack the ability to offer personalized, real-time feedback during practice sessions. Most platforms feature standardized questions that do not adapt to the user’s individual progress or skill level. As a result, candidates receive generic feedback that may not effectively highlight areas needing improvement. Additionally, traditional mock interviews typically don’t simulate the dynamic nature of real-world interviews, where questions evolve based on responses. This limits the effectiveness of these platforms and contributes to the continued struggle with technical interview anxiety.
          </p>
          <p className="mb-8 text-base text-body-color">
            To address these challenges, we propose an AI-driven interview simulator designed to provide an adaptive, personalized interview experience. The simulator will use advanced machine learning algorithms to adjust the difficulty and nature of questions based on real-time performance, offering candidates a dynamic learning environment. The system will generate personalized feedback that not only assesses the correctness of responses but also gives insight into areas for improvement, such as coding speed, problem-solving approaches, and communication skills. In addition to mimicking real-world interview conditions, the AI will provide performance analytics, tracking progress over time and offering actionable insights to accelerate skill development.
          </p>
          <p className="mb-8 text-base text-body-color">
            Based on a 2024 CodeSignal study, users of AI-powered interview preparation tools demonstrate a 40% faster improvement in technical skills compared to traditional methods, which rely on static question banks and manual feedback. This significant improvement is achieved through the AI simulator’s ability to provide continuous, tailored feedback and real-time adjustments to the interview process, ensuring candidates are constantly challenged and supported as they prepare for their interviews.
          </p>
        </div>
        {/* card */}
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

export default AboutPage;