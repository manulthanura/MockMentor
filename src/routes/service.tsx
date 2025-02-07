import { Container } from "@/components/container";

const ServicePage = () => {
  return (
    <div className="flex-col w-full pb-24">
      <Container>
        <div className="flex flex-wrap items-center justify-between -mx-4">
            <div className="w-full md:w-1/2 px-4">
                <h2 className="text-3xl text-center md:text-left md:text-6xl">
                <span className=" text-outline font-extrabold md:text-8xl">
                    Our Services
                </span>
                <span className="text-gray-500 font-extrabold">
                    - A better way to
                </span>
                <br />
                improve your interview chances and skills
                </h2>
    
                <p className="mt-4 text-muted-foreground text-sm">
                Boost your interview skills and increase your success rate with
                AI-driven insights. Discover a smarter way to prepare, practice, and
                stand out.
                </p>
            </div>
    
            <div className="w-full md:w-1/2 px-4">
                <img
                src="/assets/img/hero.png"
                alt="hero_img"
                className="w-full h-full object-cover"
                />
            </div>
        </div>
      </Container>
    </div>
  );
};

export default ServicePage;