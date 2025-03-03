
import React from 'react';
import InfoHeader from '@/components/atoms/TextHeadings/InfoHeader';
import TextHeader from '@/components/atoms/TextHeadings/Header';
import ContactForm from '@/components/organisms/Forms/Contactform';
import Faq from '@/components/organisms/FAQ';
import Image from 'next/image';
import Contactinfo from '@/components/organisms/Contactinfo';
import Breadcrumb from '@/components/atoms/BreadCrumb';

const Contact = () => {
  return (
    <>
      <Breadcrumb currentnavlink={'Contact'} />
      <main className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-6">
          {/* Contact Content Section */}
          <div className="grid md:grid-cols-2 gap-12 mb-24">
            {/* Left Column - Contact Information */}
            <div className="space-y-8">
              <InfoHeader text="CONTACT" className="mb-6" />
              <TextHeader 
                text="We’d love to help!" 
                align="start" 
                className="mb-4"
              />
              
              <p className="text-stone-800 text-lg leading-relaxed">
                We're just one click away to help you travel to the Holy Sanctuaries in Nepal. 
                Fill in the form to share more details about your travel destinations or your 
                favorite Hindu pilgrimage. Either way, we’d love to talk.
              </p>

              <Contactinfo className="my-8" />

              {/* Social Links */}
              <div className="flex gap-6">
               <a href="https://www.facebook.com/share/1BYpz3GZ9G/?mibextid=wwXIfr">
               <Image 
                  src="/images/facebookicon.svg" 
                  alt="Facebook" 
                  width={32}
                  height={32}
                  className="hover:opacity-75 transition-opacity"
                />
               </a>
               <a href="https://www.instagram.com/thehindutourism/">
               
               <Image 
                  src="/images/instaicon.svg" 
                  alt="Instagram" 
                  width={32}
                  height={32}
                  className="hover:opacity-75 transition-opacity"
                />
               </a>
             
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <ContactForm formTitle={''} secondaryButton={"Send Enquiry"} />
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-24">
          <iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.0039424666134!2d77.05220729999999!3d28.4191379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d2363688d01cf%3A0x78d636715d9fbf63!2sArcadia%20Market!5e0!3m2!1sen!2snp!4v1740742177281!5m2!1sen!2snp"
  width="100%"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  className="rounded-lg shadow-lg"
></iframe>
          </div>
        </div>

        {/* FAQ Section */}
        <Faq />
      </main>
    </>
  );
};

export default Contact;
