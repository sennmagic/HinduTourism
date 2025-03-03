import React from "react";
import HeaderBanner from "@/components/organisms/HeaderBanner";
const TermsAndConditions = () => {
  return (
    <>
    <HeaderBanner backgroundImage={"/images/tchero.svg"} title={"Terms and Conditions"} subtitle={"Travel safe and happy"} subtitleColor="white"/>
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">T&Cs</h2>
        <p className="text-gray-700">The Hindu Tourism P. Ltd. recommends that you should review all terms and conditions of our company. Details of the terms of the booking contract are listed below. Be sure to read them carefully. A legally required contract is concluded immediately after booking a trip, and we accept it. After submitting a reservation form or completing one online, you or someone booking the trip agrees to accept all terms. It means that you are well informed about relevant information and general information about the trip. You also confirm that you have provided complete and accurate information on the reservation form.</p>
      </section>
      
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Packing Prices</h2>
        <p className="text-gray-700">The package cost is the cost stated for one of the trips, and all cost inclusions and exclusions are listed in the travel offer. These package prices are mainly based on land costs, airfares, and exchange rates. We try not to increase travel prices, but sometimes the price increase is beyond its control. We have a right to change the costs of your tour at any time without notice, including the departure date. The changes can be due to various reasons, e.g., B. Exchange rate fluctuations, fuel price increases, airfare, airport fees, seasonal price changes, etc.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">Booking and Payment</h2>
        <p className="text-gray-700">To reserve your package, you must pay 25% of the total cost of the trip when booking the package. Please note that 25% of the total cost of the trip paid during the reservation is non-refundable. The amount must be paid to us 30 days before travel days. You can pay the remaining amount in cash or by bank transfer. We have the right to cancel your reservation without notice and a deposit refund if you do not pay before this date. </p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">4.minute</h2>
        <p className="text-gray-700">Payments must be made in accordance with the agreed-upon terms. Failure to pay may result in service suspension.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">5. Prohibited Activities</h2>
        <p className="text-gray-700">Users are prohibited from engaging in illegal activities, spamming, hacking, or any behavior that violates our policies.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">6. Termination of Service</h2>
        <p className="text-gray-700">We reserve the right to suspend or terminate accounts that violate these terms without prior notice.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">7. Limitation of Liability</h2>
        <p className="text-gray-700">We are not liable for any damages or losses resulting from the use of our services.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">8. Changes to Terms</h2>
        <p className="text-gray-700">We reserve the right to modify these terms at any time. Continued use of our services implies acceptance of the changes.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">9. Governing Law</h2>
        <p className="text-gray-700">These terms are governed by the laws of the applicable jurisdiction.</p>
      </section>

      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-2">10. Contact Information</h2>
        <p className="text-gray-700">If you have any questions about these Terms and Conditions, please contact us at support@example.com.</p>
      </section>
    </div>
    
    
    </>
  );
};

export default TermsAndConditions;
