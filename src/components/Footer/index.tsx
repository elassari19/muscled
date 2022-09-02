/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react-hooks/rules-of-hooks */
import { InputForm, Typogrphy, Buttons } from "components";
import { FlexColumn, FlexRow } from "layout";
import { NextPage } from "next";
import {
  Arrow,
  Business,
  ContactPhoto,
  Honor,
  Millenials,
  Places,
  Premier,
  Roket,
} from "public";
import FlatList from "flatlist-react";
import React, { useState } from "react";
import { company, knowledgeBase, resources, servises } from "constants/";

const index: NextPage = () => {
  const [value, setValue] = useState<string>("");
  return (
    <FlexColumn className="bg-black-10">
      {/* discover */}
      <FlexColumn className=" bg-red">
        <FlexRow className="md:pl-[100px]">
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
          <FlexColumn className="max-w-[600px] w-auto pr-[100px] bg-red-50 text-white px-[15px] py-[80px]">
            <Typogrphy
              sm
              className="leading-10 text-center letter-spacing:tracking-tighter ;"
            >
              MUSCLED has been a pleasure to work with on our SEO needs and I
              look forward to working with them on future projects.
            </Typogrphy>
            <FlexColumn className="text-right">
              <Typogrphy xs extraBold className=" mt-9">
                Owner
              </Typogrphy>
              <Typogrphy className="mt-3 text-sm">
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
        <FlexRow className="flex-wrap md:flex-nowrap -mt-10 text-white rounded-tl-[60px] rounded-tr-[60px] bg-red-90 md:px-[100px] py-[40px] items-center">
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
      <FlexRow className="md:px-[100px] text-white py-[80px] justify-between">
        <FlexColumn>
          <FlatList
            renderItem={(item: string, idx: number) => (
              <Typogrphy
                key={idx}
                onClick={() => console.log(item)}
                xs={idx != 0}
                sm={idx == 0}
                bold={idx == 0}
                className={`my-2 cursor-pointer ${
                  idx != 0 && "text-gray-400 text-sm"
                }  hover:text-white`}
              >
                {item}
              </Typogrphy>
            )}
            list={servises}
          />
        </FlexColumn>

        <FlexColumn>
          <FlatList
            renderItem={(item: string, idx: number) => (
              <Typogrphy
                key={idx}
                onClick={() => console.log(item)}
                xs={idx != 0}
                sm={idx == 0}
                bold={idx == 0}
                className={`my-2 cursor-pointer ${
                  idx != 0 && "text-gray-400 text-sm"
                }  hover:text-white`}
              >
                {item}
              </Typogrphy>
            )}
            list={knowledgeBase}
          />
        </FlexColumn>

        <FlexColumn>
          <FlatList
            renderItem={(item: string, idx: number) => (
              <Typogrphy
                key={idx}
                onClick={() => console.log(item)}
                xs={idx != 0}
                sm={idx == 0}
                bold={idx == 0}
                className={`my-2 cursor-pointer ${
                  idx != 0 && "text-gray-400 text-sm"
                }  hover:text-white`}
              >
                {item}
              </Typogrphy>
            )}
            list={company}
          />
        </FlexColumn>

        <FlexColumn>
          <FlatList
            renderItem={(item: string, idx: number) => (
              <Typogrphy
                key={idx}
                onClick={() => console.log(item)}
                xs={idx != 0}
                sm={idx == 0}
                bold={idx == 0}
                className={`my-2 cursor-pointer ${
                  idx != 0 && "text-gray-400 text-sm"
                }  hover:text-white`}
              >
                {item}
              </Typogrphy>
            )}
            list={resources}
          />
        </FlexColumn>

        <FlexColumn className="items-end">
          <Typogrphy className="py-2 text-sm text-gray-400">
            REVENUE DRIVEN FOR OUR CLIENTS
          </Typogrphy>
          <Typogrphy className="py-2" md>
            $3,021,182,299
          </Typogrphy>
        </FlexColumn>
      </FlexRow>

      <div className="mx-[80px] h-[1px] bg-gray-400" />

      <FlexRow className="px-[100px] py-[80px] text-gray-400 items-center justify-between">
        <div>
          <Typogrphy className="mb-3 text-sm">
            WebFX® 1995-2022 | Celebrating 25+ Years of Digital Marketing
            Excellence
          </Typogrphy>
          <Typogrphy className="text-sm">
            Call Toll Free: 508-504-9466 Privacy & Terms of Use Sitemap
          </Typogrphy>
        </div>
        <FlexRow className="items-center justify-between">
          <Places fontSize={100} className="mx-4" />
          <Premier fontSize={60} className="mx-4" />
          <Honor fontSize={60} className="mx-4" />
          <Millenials fontSize={100} className="mx-4" />
          <Business fontSize={100} className="mx-4" />
        </FlexRow>
      </FlexRow>
    </FlexColumn>
  );
};

export default index;
