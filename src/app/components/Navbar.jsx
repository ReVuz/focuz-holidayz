"use client";
import React, { useState } from "react";
import { Menu, MenuItem, ProductItem, HoveredLink } from "../tsx-components/Navbar-format";
import Image from "next/image";
import { cn } from "../lib/utils";

const Navbar = () => {
  const [active, setActive] = useState(null);

  return (
    <Menu setActive={setActive}>

      <MenuItem setActive={setActive} active={active} item="Home">
        {/* <div className="flex flex-col space-y-4 text-sm">
          <ProductItem
            title="Acme Rockets"
            description="Top-quality rockets for all your space needs"
            href="/products/rockets"
            src="/images/rocket.jpg"
          />
          <ProductItem
            title="Acme Jetpacks"
            description="Personal flight solutions for the modern age"
            href="/products/jetpacks"
            src="/images/jetpack.jpg"
          />
        </div> */}
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Tours">
        {/* <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/solutions/enterprise">Enterprise</HoveredLink>
          <HoveredLink href="/solutions/small-business">Small Business</HoveredLink>
          <HoveredLink href="/solutions/startups">Startups</HoveredLink>
        </div> */}
        <div className=" text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
                title="Kerala Tours"
                description="Discover Kerala's unique culture and history."
                href="Kerala"
                src="https://media.istockphoto.com/id/511119924/photo/tea-plantations-and-river-in-hills-kerala-india.jpg?s=612x612&w=0&k=20&c=pYHem1q8SIdCC7t7pv3s6QM1ZrmU3nkCoSaEQMg8vqg="
            />
            <ProductItem
            title="India Tours"
            description="Experience the spiritual bliss."
            href="India"
            src="/assets/India.jpg"
            />
            <ProductItem
            title="Honeymoon"
            description="Embark on a journey of love and romance."
            href="Honeymoon"
            src="/assets/Honeymoon.jpeg"
            />
            <ProductItem
            title="International"
            description="Book International packages for your loved ones or friends."
            href="International"
            src="/assets/Destination1.png"/>
        </div>
      </MenuItem>
      <MenuItem setActive={setActive} active={active} item="Cruise Packages">
        {/* <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/resources/blog">Blog</HoveredLink>
          <HoveredLink href="/resources/documentation">Documentation</HoveredLink>
          <HoveredLink href="/resources/support">Support</HoveredLink>
        </div> */}
      </MenuItem>
    <MenuItem setActive={setActive} active={active} item="Medical Tourism"></MenuItem>
      <MenuItem setActive={setActive} active={active} item="Contact Us">
        {/* <div className="flex flex-col space-y-4 text-sm">
          <HoveredLink href="/about/company">Company</HoveredLink>
          <HoveredLink href="/about/careers">Careers</HoveredLink>
          <HoveredLink href="/about/contact">Contact</HoveredLink>
        </div> */}
      </MenuItem>
    </Menu>
  );
};

export default Navbar;