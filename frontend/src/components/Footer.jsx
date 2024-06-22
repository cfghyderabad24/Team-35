import React from 'react';

function Footer() {
  return (
    <div className=" mx-auto p-4 bg-stone-700 ">
      <div className="grid grid-cols-4 gap-4 mr-9">
        <div className="flex flex-col items-center">
          <img src="https://www.cry.org/wp-content/themes/cry/images/most-trusted-ngo-in-india.webp" alt="Power of Trust" className="w-24 h-24" />
          <p className="mt-2 text-center text-white text-sm">Most trusted NGO in India</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://www.cry.org/wp-content/themes/cry/images/the-elders-one-of-the-top-100-non-profits-in-the-world.webp" alt="The Elders" className="w-24 h-24" />
          <p className="mt-2 text-center text-white text-sm">One of the top 100 non-profits in the world</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://www.cry.org/wp-content/themes/cry/images/guide-star-india-gold-trusted-for-transparency-accountability.webp" alt="GuideStarIndia" className="w-24 h-24" />
          <p className="mt-2 text-center text-white text-sm">Trusted for transparency and accountability</p>
        </div>
        <div className="flex flex-col items-center">
          <img src="https://www.cry.org/wp-content/themes/cry/images/great-place-to-work-certified.webp" alt="Great Place To Work" className="w-24 h-24" />
          <p className="mt-2 text-center text-white text-sm">Recognised for a high performing work culture</p>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-5 mt-15 ml-20">
        <div>
          <h2 className="text-xl text-white font-bold">Who We Are?</h2>
          <ul className="list-disc mt-4 ml-6 text-white">
            <li>About Us</li>
            <li>Why Children?</li>
            <li>Our Impact</li>
            <li>Our Approach</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-white font-bold">What We Do?</h2>
          <ul className="list-disc mt-4 ml-6 text-white">
            <li>Child</li>
            <li>Education</li>
            <li>Child Health & Nutrition</li>
            <li>Stop Child Labour</li>
            <li>Support Girl Child</li>
            <li>Education</li>
            <li>Stop Child Marriage</li>
            <li>Prevent Child Trafficking</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-white font-bold">Our Campaigns</h2>
          <ul className="list-disc mt-4 ml-6 text-white">
            <li>Yellow Fellow</li>
            <li>Poori Padhai</li>
            <li>Desh Ki Bhalai</li>
            <li>Let's Talk About Periods</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-white font-bold">Get Involved</h2>
          <ul className="list-disc mt-4 ml-6 text-white">
            <li>Volunteering</li>
            <li>Corporate Partners</li>
            <li>Careers</li>
          </ul>
        </div>
        <div>
          <h2 className="text-xl text-white font-bold">How To Contribute?</h2>
          <ul className="list-disc mt-4 ml-6 text-white">
            <li>Online</li>
            <li>Donations</li>
            <li>Legacy Giving</li>
            <li>Tax Exemption</li>
            <li>Donations</li>
            <li>FAQs</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;