/* eslint-disable react/no-unescaped-entities */
import {
  Buttons,
  InputForm,
  PlanCard,
  HeroScetion,
  TableOfContent,
  TableOfServices,
  Typogrphy,
  CardServices,
} from "components";
import {
  SpeedScore,
  dataOfContent,
  TotalInitialProject,
  differenceBetweenPages,
  optimizationServices,
  TheAdvantagesOfSiteSpeedOptimization,
  FourFactors,
  websiteOptimizationTools,
  websiteRequireAssistance,
  HowMuchDoesItCost,
  MuscledIsaFullService,
  BeginRightAway,
} from "constants/index";
import { FlexColumn, FlexRow } from "layout";
import type { NextPage } from "next";

import {
  Arrow,
  Artboard,
  ContactPhoto,
  Logo1,
  Logo2,
  Logo4,
  Logo5,
  Logo6,
  Logo7,
  Roket,
  Vector,
} from "public";

import { useState } from "react";

const Home: NextPage = () => {
  const [value, setValue] = useState<string>("");

  return (
    <FlexColumn>
      {/* Hero */}
      <FlexRow className="p-[100px] bg-gray-800 ">
        <aside className="text-white w-[640px] text-left ">
          <HeroScetion
            text={[
              { subTitle: "Home > WEB DEVELOPMENT > SERVICES" },
              { begTitle: "Services for" },
              { begTitle: "Improving Site Speed" },
              {
                subTitle:
                  "Website speed optimization services are an often-overlooked strategy for great SEO. Your website will probably lose sales and income if it does not load quickly for visitors. Almost half of the web searchers will abandon a site after three seconds of waiting for it to load. Is your website fast enough to keep users coming back? If not, Muscled site speed optimization services can help. To speak with a specialist, please contact us.",
              },
            ]}
          />

          <FlexRow className="w-auto mt-[40px]">
            <InputForm
              className="flex-1 w-[404px] text-black"
              value={value}
              placeholder="Enter Your Website Link"
              onChange={setValue}
            />
            <Buttons title="Send Proposal" height="h-[50px]" />
          </FlexRow>
        </aside>

        <aside className=" w-[540px] ">
          <Artboard className="text-[500px] " />
        </aside>
      </FlexRow>
      {/* End Hero */}

      {/* Partner */}
      <FlexColumn className="px-[100px] py-[40px] itesm-center bg-white w-full">
        <Typogrphy md extraBold className="py-5 text-center text-blackLight">
          Our Partners
        </Typogrphy>
        <FlexRow className="justify-between w-full">
          {[Logo1, Logo2, Logo4, Logo5, Logo6, Logo7].map(
            (
              Logo: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
              idx: number
            ) => (
              <Logo key={idx} className="h-10 text-9xl " />
            )
          )}
        </FlexRow>
      </FlexColumn>
      {/* End Partner */}

      {/* Packeges */}
      <FlexColumn className="bg-[#F5F5F5] px-[100px] py-[40px] text-center">
        <Typogrphy extraBold md className="pb-[40px]">
          Explore Site Speed Optimization Service Packages
        </Typogrphy>

        <FlexRow className="flex justify-center">
          <PlanCard
            stars={1}
            title="Standard Plan"
            hour={25}
            quantity={15}
            monthly={"3,600"}
            inverstment="3,125"
            bgcolor="bg-rose-50"
          />
          <PlanCard
            stars={2}
            title="Standard Plan"
            hour={40}
            quantity={25}
            monthly={"1,800"}
            inverstment="3,125"
            bgcolor="bg-rose-100"
          />
          <PlanCard
            stars={3}
            title="Standard Plan"
            hour={50}
            quantity={35}
            monthly={"4,800"}
            inverstment="3,125"
            bgcolor=" bg-rose-200"
          />
        </FlexRow>
      </FlexColumn>
      {/* End Packeges */}

      {/* Speed */}
      <FlexColumn className="pt-[40px]">
        <FlexRow className="justify-center">
          <Typogrphy xs className="text-[#5F27BD]">
            See Full Deliverables
          </Typogrphy>
        </FlexRow>
        <FlexRow className="px-[100px] py-[80px] mt-2 bg-[#C4000040]">
          <FlexColumn className="itesm-center">
            <HeroScetion
              className="text-center"
              text={[
                { title: "Is your website optimized for speed?" },
                {
                  paragaph:
                    "Want to improve your website's user experience and rankings by increasing its speed? Muscled is always ready to help you. We provide three different website speed optimization service packages that can assist your website in loading at top speeds. Some of the benefits of using our services include a lower bounce rate and increased time on the page.",
                },
                {
                  paragaph:
                    "Besides this, conversions and even revenue will increase year over year.",
                },
                {
                  paragaph:
                    "We understand that sometimes you want to speak directly to the website. Contact us to speak with an expert.",
                },
              ]}
            />
            <Typogrphy sm className="text-center">
              {" "}
            </Typogrphy>
          </FlexColumn>
          <aside
            style={{
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(.jpg)",
            }}
          ></aside>
        </FlexRow>
      </FlexColumn>
      {/* End Speed */}

      {/* Testimonials */}
      <FlexRow
        className="px-[100px] py-[80px] h-[626px] bg-black text-white"
        height={626}
      >
        <FlexColumn className="justify-between flex-1" height={400}>
          <HeroScetion
            text={[
              {
                paragaph: `"Muscled has gone above and beyond to make me happy. So far, after a few months, I have already seen significant improvement in rankings and conversions , and they have also greatly improved the speed of my site.”`,
              },
              { subTitle: "Sara Feldstein" },
              { bold: "Barumba" },
            ]}
          />
          <Buttons
            title="See Our Clients’ Testimonials"
            className="bg-red w-[376px]"
          />
        </FlexColumn>
        <FlexColumn className="justify-center flex-1">
          <video
            src="https://www.youtube.com/watch?v=dFgzHOX84xQ"
            width={"80%"}
            height={"90%"}
            className="z-10 bg-white"
          />
        </FlexColumn>
      </FlexRow>
      {/* End Testimonials */}

      {/* Optimization Services */}
      <FlexColumn className="px-[100px] py-[40px] items-center">
        <HeroScetion
          text={[
            { title: "Muscled provides Site Speed Optimization Services" },
            {
              paragaph:
                "To view additional website speed optimization plans, swipe to the right on the table below.",
            },
          ]}
        />
        <div className="border-t shadow-sm  border-x rounded-[10px] overflow-hidden mt-11">
          {TotalInitialProject.map((item: any, idx: number) => {
            return idx == 0 ? (
              <TableOfServices key={idx} data={item} bold />
            ) : (
              <TableOfServices key={idx} data={item} />
            );
          })}
        </div>

        <div className="border-t shadow-sm  border-x rounded-[10px] overflow-hidden mt-11">
          {SpeedScore.map((item: any, idx: number) => {
            return idx == 0 ? (
              <TableOfServices key={idx} data={item} bold />
            ) : (
              <TableOfServices key={idx} data={item} />
            );
          })}
        </div>
      </FlexColumn>
      {/* End Optimization Services */}

      {/* Page and Speed */}
      <FlexRow className="px-[100px] py-10 items-start!">
        <FlexColumn className="w-[740px] mr-[40px]">
          {/* pass data of text as an array */}
          <HeroScetion text={differenceBetweenPages} />
        </FlexColumn>

        {/* The difference & Table */}
        <TableOfContent content={dataOfContent} height={600} />
      </FlexRow>
      {/* End Page and Speed */}

      {/* End Page and Speed */}
      <FlexColumn className="px-[100px] py-10">
        {/* pass data of text as an array */}
        <HeroScetion text={optimizationServices} className="w-[700px]" />
      </FlexColumn>
      {/* End Page and Speed */}

      {/* End The Advantages */}
      <FlexColumn className="px-[100px] py-10">
        {/* pass data of text as an array */}
        <HeroScetion
          text={TheAdvantagesOfSiteSpeedOptimization}
          className="w-[700px]"
        />
      </FlexColumn>
      {/* End The Advantages */}

      {/* End Four Factors */}
      <FlexColumn className="px-[100px] py-10">
        {/* pass data of text as an array */}
        <HeroScetion text={FourFactors} className="w-[700px]" />
      </FlexColumn>
      {/* End Four Factors */}

      {/* End website Optimization Tools */}
      <FlexColumn className="px-[100px] py-10">
        {/* pass data of text as an array */}
        <HeroScetion text={websiteOptimizationTools} className="w-[700px]" />
      </FlexColumn>
      {/* End website Optimization Tools */}

      {/* End website Require Assistance */}
      <FlexColumn className="px-[100px] py-10">
        {/* pass data of text as an array */}
        <HeroScetion text={websiteRequireAssistance} className="w-[700px]" />
      </FlexColumn>
      {/* End website Require Assistance */}

      {/* End How Much DoesIt Cost */}
      <FlexColumn className="px-[100px] py-10">
        {/* pass data of text as an array */}
        <HeroScetion text={HowMuchDoesItCost} className="w-[700px]" />
      </FlexColumn>
      {/* End How Much DoesIt Cost */}

      {/* End Muscled Is a Full Service */}
      <FlexColumn className="px-[100px] py-10">
        {/* pass data of text as an array */}
        <HeroScetion text={MuscledIsaFullService} className="w-[700px]" />
      </FlexColumn>
      {/* End Muscled Is a Full Service */}

      {/* End Begin Right Away */}
      <FlexColumn className="px-[100px] py-10">
        {/* pass data of text as an array */}
        <HeroScetion text={BeginRightAway} className="w-[700px]" />
      </FlexColumn>
      {/* End Begin Right Away */}

      {/* cartes */}
      <FlexRow className="px-[80px] py-10 justify-between">
        <CardServices
          services={[
            "Website Optimization Services",
            "SEO Speed Optimization Pricing",
            "SEO Audit",
            "Convertion Rate Optimization",
          ]}
        />
        <CardServices
          services={[
            "Digital Marketing Services",
            "SEO Service Packages",
            "PPC",
            "Website SEO Copywriting",
            "All Internet Marketing Services",
          ]}
        />
        <CardServices
          services={[
            "SEO Design Services",
            "SEO Web Design Company",
            "Web Video Production",
          ]}
        />
      </FlexRow>
      {/* End cartes */}

      {/* discover */}
      <FlexColumn className=" bg-red">
        <FlexRow className="pl-[100px]">
          {/* left side */}
          <FlexColumn className="w-[842px] py-[80px] pr-[80px]">
            <FlexRow className="mb-12">
              <Roket fontSize={150} />
              <FlexColumn>
                <Typogrphy xs className="text-white">
                  We've driven over
                </Typogrphy>
                <FlexRow>
                  {"666666".split("").map((item: string, idx: number) => (
                    <Typogrphy
                      key={idx}
                      md
                      bolder
                      className="w-[66px] h-[78px] p-[20px] m-[5px] text-red rounded-md bg-gradient-to-b  from-white to-[#CBDDFF]"
                    >
                      {item}
                    </Typogrphy>
                  ))}
                </FlexRow>
                <Typogrphy xs className="text-white">
                  leads for clients.
                </Typogrphy>
              </FlexColumn>
            </FlexRow>

            <Typogrphy xs className="text-white">
              Discover how we can help your business grow
            </Typogrphy>

            <FlexRow className="mt-[20px] w-[658px] py-[12px] px-[20px] bg-[#fff6] mb-4 rounded-md ">
              <InputForm
                className="flex-1 w-[404px] text-black bg-[#fff0] placeholder:text-black"
                value={value}
                placeholder="Enter Your Website Link"
                onChange={setValue}
              />
              <Buttons title="Send Proposal" height="h-[50px]" />
            </FlexRow>
          </FlexColumn>

          {/* right side */}
          <FlexColumn className="w-[600px] pr-[100px] bg-red-50 text-white px-[15px] py-[80px]">
            <Typogrphy
              sm
              className="leading-10 text-center letter-spacing:tracking-tighter ;"
            >
              MUSCLED has been a pleasure to work with on our SEO needs and I
              look forward to working with them on future projects.
            </Typogrphy>
            <FlexColumn className="text-right">
              <Typogrphy sm className=" mt-9">
                Owner
              </Typogrphy>
              <Typogrphy xs className="mt-3 ">
                ARIZONA GARAGE DOOR SUPPLIER
              </Typogrphy>
              <FlexRow className="justify-end mt-5">
                <Arrow fontSize={22} opacity={0.5} className="rotate-180" />
                <span className="w-3" />
                <Arrow fontSize={20} />
              </FlexRow>
            </FlexColumn>
          </FlexColumn>
        </FlexRow>

        {/* contact */}
        <FlexRow className="-mt-10 text-white rounded-tl-[60px] rounded-tr-[60px] bg-red-90 px-[100px] py-[40px] items-center">
          <FlexRow className="w-[842px]">
            <ContactPhoto fontSize={120} />
            <FlexColumn className="ml-7">
              <Typogrphy xs className="mb-4">
                Ready to speak with a marketing expert? Give us a ring
              </Typogrphy>
              <Typogrphy md>508-504-9466</Typogrphy>
            </FlexColumn>
          </FlexRow>

          <FlexRow className="justify-between w-[600px]">
            <div>
              <Typogrphy xs>1.6 million</Typogrphy>
              <Typogrphy fontSize={12}>Hours of expertise</Typogrphy>
            </div>

            <div>
              <Typogrphy xs>450+</Typogrphy>
              <Typogrphy fontSize={12}>Digital Marketing</Typogrphy>
              <Typogrphy fontSize={12}>Masters On Staff</Typogrphy>
            </div>

            <div>
              <Typogrphy xs>1,128</Typogrphy>
              <Typogrphy fontSize={12}>Website Launched</Typogrphy>
            </div>
          </FlexRow>
        </FlexRow>
      </FlexColumn>
      {/* End discover */}
    </FlexColumn>
  );
};

export default Home;
