export const AboutUs = () => {
  return (
    <div
      id="aboutus"
      className="flex flex-col items-center justify-center bg-black w-screen min-h-screen"
    >
      <div className="mt-20 md:mt-0">
        <h2 className="text-white text-3xl font-bold md:mb-8 ">About Us</h2>
        <div className="p-1 rounded-lg shadow-lg"></div>
      </div>
      <div className="flex flex-col items-center mt-8 px-4 lg:px-8">
        <div className="flex flex-wrap items-center justify-between gap-x-12 gap-y-8 w-full lg:flex-nowrap">
          <div className="flex-1">
            <h2 className="text-2xl mb-4 text-center text-neutral-200">
              Welcome to the Cloud Native Community Group - New Delhi. We are
              the New Delhi chapter of the Cloud Native Community Groups (CNCG),
              operating under the{" "}
              <span className="text-[#0086FF]">
                Cloud Native Computing Foundation
              </span>{" "}
              (CNCF). Our focus is on knowledge sharing and exploring the
              potential of cloud native technologies. Through our meetups,
              educational sessions, and practical activities, we aim to empower
              individuals in navigating the cloud native ecosystem. We are
              dedicated to hosting at least one meetup every month and take
              pride in being recognized as the leading CNCG community worldwide.
              We prioritize creating an inclusive learning environment, adhering
              to the CNCF Code of Conduct to ensure everyone feels welcome and
              respected.
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};
