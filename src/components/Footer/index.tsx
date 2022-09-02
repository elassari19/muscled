import { FlatList, Typogrphy } from "components";
import { FlexColumn, FlexRow } from "layout";
import { NextPage } from "next";
import { Business, Honor, Millenials, Places, Premier } from "public";
import React from "react";

const index: NextPage = () => {
  return (
    <FlexColumn className="bg-black-10">
      <FlexRow className="md:px-[100px] text-white py-[80px] justify-between">
        <FlatList
          items={[
            "Services",
            "Digital Marketing Services",
            "SEO Services",
            "PPC Services",
            "Web Design Services",
            "Social Media Services",
            "Digital Advertising Services",
            "Content Marketing Services",
          ]}
        />
        <FlatList
          items={[
            "Knowledge Base",
            "Digital Marketing",
            "Content Marketing",
            "Social Media",
            "Web Design ",
            "SEO",
            "PPC",
            "Amazon",
          ]}
        />
        <FlatList
          items={[
            "Company",
            "Digital Marketing Agency",
            "SEO Agency",
            "PPC Agency",
            "Content Marketing Agency",
            "Social Media Agency",
            "Web Design Agency",
            "Industries We Serve",
          ]}
        />
        <FlatList
          items={[
            "Resources",
            "About Us",
            "Contact Us",
            "Careers",
            "Phishing Scam Alert",
            "Locations",
            "Community Impact",
            "Tools",
          ]}
        />
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
