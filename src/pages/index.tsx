import { CustomButton, InputForm, PlanCard } from "components";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Artboard, Logo1, Logo2, Logo4, Logo5, Logo6, Logo7 } from "public";
import { useState } from "react";

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="flex flex-col justify-center text-center">
      {/* Hero */}
      <section className="flex flex-row w-full p-[100px] bg-gray-800 ">
        <aside className="text-white w-[640px] text-left ">
          <div className="text-lg font-bold ">
            Home {">"} WEB DEVELOPMENT {">"} SERVICES
          </div>
          <div className="text-6xl font-extrabold pt-[30px] flex-nowrap ">
            Services for <br /> Improving Site Speed
          </div>
          <div className="text-lg pt-[20px]">
            Website speed optimization services are an often-overlooked strategy
            for great SEO. Your website will probably lose sales and income if
            it does not load quickly for visitors. Almost half of the web
            searchers will abandon a site after three seconds of waiting for it
            to load. Is your website fast enough to keep users coming back? If
            not, Muscled site speed optimization services can help. To speak
            with a specialist, please contact us.
          </div>
          <div className="flex flex-row mt-[40px]">
            <InputForm
              className="flex-1 w-[404px] text-black"
              value={value}
              placeholder="Enter Your Website Link"
              onChange={setValue}
            />
            <CustomButton
              title="Send Proposal"
              color="text-red"
              bgColor="bg-black"
              rounded="rounded-md"
              className="p-[11px]"
            />
          </div>
        </aside>

        <aside className=" w-[540px] ">
          <Image src={Artboard} alt="Artboard" />
        </aside>
      </section>
      {/* End Hero */}

      {/* Partner */}
      <section className="px-[100px]">
        <p className="text-center text-gray-900 pt-[50px] font-bold text-[24px] pb-[20px] m-0">
          Our Partners
        </p>
        <div className="flex flex-row justify-between">
          {[Logo1, Logo2, Logo4, Logo5, Logo6, Logo7].map((logo: string) => (
            <Image key={logo} src={logo} alt="Partner logo" />
          ))}
        </div>
      </section>
      {/* End Partner */}

      {/* Plans */}
      <section className="flex flex-col justify-center">
        <p className="text-[40px] my-[60px]">
          Explore Site Speed Optimization Service Packages
        </p>

        <div className="flex justify-center">
          <PlanCard
            stars={1}
            title="Standard Plan"
            hour={25}
            quantity={15}
            monthly={"3,600"}
            inverstment="3,125"
            bgcolor="bg-red-100"
          />
          <PlanCard
            stars={2}
            title="Standard Plan"
            hour={40}
            quantity={25}
            monthly={"1,800"}
            inverstment="3,125"
            bgcolor="bg-red-200"
          />
          <PlanCard
            stars={3}
            title="Standard Plan"
            hour={50}
            quantity={35}
            monthly={"4,800"}
            inverstment="3,125"
            bgcolor="bg-red-300"
          />
        </div>
      </section>
      {/* End Plans */}
    </div>
  );
};

export default Home;
