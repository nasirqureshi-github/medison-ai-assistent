"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#0C0C1D] text-gray-300 py-10 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-10">
        {/* Logo */}
        <div className="">
           <Image src="/assets/images/f-logo.png" alt="Madison Meds" width={120} height={120}/>
        </div>


        {/* Learn */}
        <div>
          <h3 className="text-white font-semibold mb-4">Learn</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Weightloss</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-4">Support</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Contact Us</a></li>
            <li><a href="#" className="hover:text-white">Mobile Terms Or Services</a></li>
            <li><a href="#" className="hover:text-white">Shipping and Returns</a></li>
            <li><a href="#" className="hover:text-white">Terms and Conditions</a></li>
            <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Telehealth Consent and Open Payments</a></li>
            <li><a href="#" className="hover:text-white">Consumer Health Data Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white">Privacy Choices</a></li>
          </ul>
        </div>

        {/* Medication */}
        <div>
          <h3 className="text-white font-semibold mb-4">Medication</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Semagluide</a></li>
            <li><a href="#" className="hover:text-white">Trizepatide</a></li>
            <li><a href="#" className="hover:text-white">Czemipc</a></li>
            <li><a href="#" className="hover:text-white">Wegavy</a></li>
            <li><a href="#" className="hover:text-white">Mounjaro</a></li>
            <li><a href="#" className="hover:text-white">Zepbound</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-4">Contact</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-white">Professionals</a></li>
            <li><a href="#" className="hover:text-white">Providers</a></li>
            <li><a href="#" className="hover:text-white">Partner Pharmacies</a></li>
          </ul>
        </div>
         
         {/* logo right */}
         <div>
          <Image src="/assets/images/right-logo.png" alt="Madison Meds" width={120} height={120}/>
        </div>
      </div>


      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-500 mt-10">
        © {new Date().getFullYear()} Madison Meds. All rights reserved.
      </div>
    </footer>
  );
}
