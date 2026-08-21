import React from 'react';
import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { useSectionData } from '../store/useCMSStore';
import { useSEO } from '../hooks/useSEO';

export function PrivacyPolicy() {
  useSEO(
    'privacy-policy',
    'Privacy Policy - Encotec Energy (India)',
    'Official Privacy Policy of Encotec Energy (India) Pvt. Ltd. Learn about our personal data processing, data subject rights, cookies, and regulatory compliance.'
  );

  const { data } = useSectionData<any>('privacy-policy', 'PrivacyContent');

  const headline = data?.headline || 'Privacy Policy';
  const contentBlocks = data?.contentBlocks;

  return (
    <div className="min-h-screen bg-white text-neutral-800 flex flex-col font-sans selection:bg-brand-pink selection:text-white">
      <Navigation variant="light" />

      {/* Hero / Header Section matching original website with wave design */}
      <section className="relative bg-[#e9ecef] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="text-xs md:text-sm text-neutral-500 font-medium mb-4">
            <Link to="/" className="hover:text-brand-pink transition-colors">Start</Link>
            <span className="mx-2">/</span>
            <span className="text-neutral-700">{headline}</span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-neutral-800 tracking-tight leading-tight">
            {headline}
          </h1>
        </div>

        {/* Bottom Decorative Wave Shape */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none pointer-events-none">
          <svg
            className="relative block w-full h-10 md:h-16 text-white"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 C150,90 350,-40 500,45 C650,130 900,10 1200,50 L1200,120 L0,120 Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </section>

      {/* Main Content Area */}
      <main className="flex-grow py-12 md:py-16 bg-white">
        <div className="max-w-3xl lg:max-w-4xl mx-auto px-6 lg:px-8 leading-relaxed text-neutral-700 text-sm md:text-base space-y-10">
          {Array.isArray(contentBlocks) && contentBlocks.length > 0 ? (
            <div className="space-y-8">
              {contentBlocks.map((block: any, idx: number) => {
                if (block.type === 'heading') {
                  return (
                    <h2
                      key={idx}
                      className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pt-6 pb-2 border-b border-neutral-200"
                    >
                      {block.text}
                    </h2>
                  );
                }
                if (block.type === 'quote') {
                  return (
                    <blockquote
                      key={idx}
                      className="p-6 my-6 bg-neutral-50 border-l-4 border-brand-pink rounded-r-xl text-neutral-800 font-medium whitespace-pre-line shadow-sm"
                    >
                      {block.text}
                    </blockquote>
                  );
                }
                if (block.type === 'list' && Array.isArray(block.items)) {
                  return (
                    <ul key={idx} className="space-y-3 my-4 list-disc pl-6 text-neutral-700">
                      {block.items.map((item: string, i: number) => (
                        <li key={i} className="leading-relaxed">
                          {item}
                        </li>
                      ))}
                    </ul>
                  );
                }
                if (block.type === 'image' && (block.image || block.url || block.text)) {
                  return (
                    <div key={idx} className="my-6 overflow-hidden rounded-2xl border border-neutral-200 shadow-sm">
                      <img
                        src={block.image || block.url || block.text}
                        alt="Policy illustration"
                        className="w-full h-auto object-cover max-h-[500px]"
                      />
                    </div>
                  );
                }
                return (
                  <p key={idx} className="my-3 leading-relaxed whitespace-pre-line">
                    {block.text}
                  </p>
                );
              })}
            </div>
          ) : (
            <div className="space-y-10">
              <section className="space-y-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  General Information
                </h2>
                <p className="text-base text-neutral-700 leading-relaxed">
                  Below we inform you about the collection of personal data when using our website <span className="font-medium text-neutral-900">www.encotecenergy.com</span>.
                </p>
                <ol className="list-decimal pl-6 space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base">
                  <li>
                    The term <strong>“personal data”</strong>, with reference to the definition in Art. 4 No. 1 of Regulation (EU) 2016/679 (hereinafter referred to as: “Basic Data Protection Regulation” or “DSGVO” for short), means all data that can be related to you personally. This includes, for example, name, address, e-mail addresses and user behaviour. With regard to the other terms, in particular the terms “processing”, “responsible party”, “processor” and “consent”, we refer you to the legal data protection definitions of Art. 4 DSGVO.
                  </li>
                  <li>
                    We process personal data as a matter of principle only to the extent necessary to provide a functioning website and the content and services offered by us. The processing of personal data is only carried out regularly if you have given us your consent within the meaning of Art. 6 para. 1 lit. a) DSGVO or if the processing is permitted by statutory provisions, in particular by one of the legal bases specified in Art. 6 para. 1 lit. b) to lit. f) DSGVO.
                  </li>
                  <li>
                    Your personal data will be deleted or blocked as soon as the purpose of storage no longer applies. Storage may also take place if this is provided for by national or European regulations to which we are subject. In this case, the data will be blocked or deleted when the storage period prescribed in the respective regulations has expired. The latter shall not apply if further storage of the data is necessary for the conclusion or performance of a contract.
                  </li>
                  <li>
                    If we wish to use contracted service providers for individual functions on our website or use your data for advertising purposes, we will inform you below in detail about the respective processes.
                  </li>
                </ol>
              </section>

              <section className="space-y-4 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  Responsible Office
                </h2>
                <p className="text-neutral-700 text-sm md:text-base">
                  The person responsible within the meaning of Art. 4 No. 7 DSGVO, the other data protection laws applicable in the member states of the European Union and other regulations with provisions of data protection law character:
                </p>
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200 text-neutral-800 space-y-2">
                  <p className="font-bold text-lg text-neutral-900">Encotec Energy (India) Pvt. Ltd.</p>
                  <p className="text-sm text-neutral-600">
                    legally represented by the managing directors Arun Kumar Sarna, Rajeev Ahuja, Dr. Ralf Gilgen
                  </p>
                  <p className="pt-2 text-neutral-700">
                    C-85, Sector-63<br />
                    Noida-201 301<br />
                    Uttar Pradesh<br />
                    India
                  </p>
                  <div className="pt-2 text-sm text-neutral-600 space-y-1">
                    <p><strong>Phone:</strong> +91 120 4155612</p>
                    <p><strong>Fax:</strong> +91 120 4540611</p>
                    <p><strong>Email:</strong> <a href="mailto:rajeev.ahuja@encotecenergy.com" className="text-brand-pink hover:underline">rajeev.ahuja@encotecenergy.com</a></p>
                  </div>
                </div>
              </section>

              <section className="space-y-4 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  Data Protection Officer
                </h2>
                <p className="text-neutral-700 text-sm md:text-base">
                  You can contact our data protection officer at the following address:
                </p>
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200 text-neutral-800 space-y-1">
                  <p className="font-bold text-neutral-900">Rajeev Ahuja</p>
                  <p className="text-neutral-700">Encotec Energy (India) Pvt. Ltd.</p>
                  <p className="text-neutral-600">C-85, Sector-63</p>
                  <p className="text-neutral-600">Noida-201 301</p>
                  <p className="text-neutral-600">Uttar Pradesh, India</p>
                  <p className="pt-2 text-sm"><strong>Phone:</strong> +91 120 4155612</p>
                  <p className="text-sm"><strong>Email:</strong> <a href="mailto:rajeev.ahuja@encotecenergy.com" className="text-brand-pink hover:underline">rajeev.ahuja@encotecenergy.com</a></p>
                </div>
              </section>

              <section className="space-y-4 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  Your Rights
                </h2>
                <p className="text-neutral-700 text-sm md:text-base">
                  You have the following rights with regard to your personal data:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-neutral-700 text-sm md:text-base">
                  <li>the right to information,</li>
                  <li>the right to rectification and erasure,</li>
                  <li>the right to limit the processing,</li>
                  <li>the right to object to the processing,</li>
                  <li>the right to data portability.</li>
                </ul>
                <p className="text-neutral-600 text-sm">
                  You also have the right to complain to a data protection supervisory authority about the processing of your personal data by us.
                </p>
              </section>

              <section className="space-y-4 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  Processing of personal data when using our website for information purposes
                </h2>
                <ol className="list-decimal pl-6 space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base">
                  <li>
                    If you access our website without registering or otherwise providing us with information (“Informational Use”), we only collect the personal data that your web browser sends to our server. If you wish to view our website, we collect the following data which is technically necessary for us to enable you to view our website and to guarantee stability and security:
                    <ul className="list-disc pl-6 my-2 space-y-1 text-sm text-neutral-600 font-mono">
                      <li>– Browser type and browser version</li>
                      <li>– Used operating system</li>
                      <li>– Referrer URL</li>
                      <li>– Hostname of the accessing computer</li>
                      <li>– Time of the server request</li>
                      <li>– IP address</li>
                    </ul>
                    The aforementioned data is also stored in so-called log files on our servers. Not affected by this are your IP address or other data that enable the data to be allocated to you. These data will not be stored together with other personal data of yours.
                  </li>
                  <li>
                    The collection and temporary storage of the IP address is necessary to enable the delivery of our website to your terminal device. For this purpose, your IP address must be stored for the duration of your visit to our website. The storage of the above-mentioned data in log files serves to ensure the functionality and optimisation of our website as well as to ensure the security of our information technology systems. These data are not evaluated for marketing purposes. Our legitimate interest in data processing lies in the aforementioned purposes. The legal basis for the collection and temporary storage of the aforementioned data and log files is Art. 6 Para. 1 S. 1 lit. f) DSGVO.
                  </li>
                  <li>
                    The above data for the provision of our website will be deleted when the respective session has ended. The data in log files will be deleted at the latest after seven days. We will only store your data for statistical purposes if we have previously deleted or altered your IP address and it is no longer possible to assign the data to you. The collection of the above data for the provision of our website and the storage of this data in log files is mandatory for the operation of our website. There is no possibility to object.
                  </li>
                </ol>
              </section>

              <section className="space-y-4 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  Processing of personal data by cookies
                </h2>
                <ol className="list-decimal pl-6 space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base">
                  <li>
                    We use so-called cookies on our website. Cookies are small text files that are stored on the storage medium of your terminal device, for example on a hard disk, and through which certain information flows to us as the location that sets the cookie. Cookies cannot execute programs or transmit viruses to your end device. This website uses the following types of cookies, the scope and function of which are explained below.
                  </li>
                </ol>

                <div className="space-y-4 pt-2">
                  <p className="font-bold text-neutral-900">(a) Cookies stored on your web browser:</p>
                  <ul className="list-disc pl-6 space-y-2 text-neutral-700 text-sm md:text-base">
                    <li>
                      <strong>Transient Cookies:</strong> These cookies are automatically deleted when you close your web browser. These include in particular session cookies. They store a so-called session ID, which can be used to assign various requests from your web browser to the joint session. This makes it possible to recognise your terminal device when you return to our website. Session cookies are deleted as soon as you log out or close your web browser.
                    </li>
                    <li>
                      <strong>Persistent cookies:</strong> These cookies are automatically deleted after a specified period, which may vary depending on the cookie. You can delete these cookies at any time in the settings of your web browser.
                    </li>
                  </ul>

                  <p className="font-bold text-neutral-900 pt-2">(b) This website also uses cookies that are stored independently of your web browser:</p>
                  <ul className="list-disc pl-6 space-y-2 text-neutral-700 text-sm md:text-base">
                    <li>
                      <strong>Flash cookies:</strong> These are not recorded by your web browser but by the Flash plug-in and are therefore stored independently of your web browser. They do not have an automatic expiration date.
                    </li>
                    <li>
                      <strong>HTML5 storage objects:</strong> These store required data independently of your web browser on your end device without an automatic expiration date.
                    </li>
                  </ul>

                  <p className="font-bold text-neutral-900 pt-2">(c) The following data and information are stored in the cookies:</p>
                  <ul className="list-disc pl-6 space-y-1 text-sm text-neutral-600">
                    <li>– Language settings</li>
                    <li>– Information about the number of hits on our website and use of individual functions on our website</li>
                  </ul>
                </div>

                <ol start={2} className="list-decimal pl-6 space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base pt-4">
                  <li>
                    The processing of personal data by the aforementioned cookies serves to make the offer of our website more user-friendly and effective for you. Some functions of our website cannot be offered without the use of these cookies. In particular, some functions of our website require that your web browser can be identified even after a page change. If you have an account, we use cookies to identify you for subsequent visits. This prevents you from having to log in each time you visit our website. The data processed by cookies, which are necessary for the provision of the functions of our website, are not used to create user profiles. If cookies are used for analysis purposes, they are used to improve the quality and user-friendliness of our website, its content and functions. They enable us to track how the website is used, what features are used and how often. This enables us to continually improve our services. Our legitimate interest in data processing lies in the aforementioned purposes. The legal basis is Art. 6 Para. 1 S. 1 lit. f) DSGVO.
                  </li>
                  <li>
                    The aforementioned cookies are stored on your terminal device and transmitted to our server by it. You can therefore configure the processing of data and information using cookies yourself. You can configure your web browser settings to reject third-party cookies or cookies, for example. In this context, we would like to point out that you may then not be able to use all the functions of our website properly. If you want to prevent the processing of data by Flash cookies, you must make the appropriate settings in your Flash Player or install an add-on, e.g. for the web browser Google Chrome the add-on “Adobe Flash Killer Cookie” or for the web browser Firefox the add-on “Better Privacy”. If you want to prevent the use of HTML5 storage objects, you must use your web browser in private mode – if available. In addition, we recommend regular manual deletion of cookies and your browser history.
                  </li>
                </ol>
              </section>

              <section className="space-y-4 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  Further functions and offers of our website
                </h2>
                <ol className="list-decimal pl-6 space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base">
                  <li>
                    In addition to the aforementioned informational use of our website, we offer various services that you can use if you are interested. For this purpose, it is usually necessary to provide further personal data. We need this data to provide the respective service. The aforementioned data processing principles apply.
                  </li>
                  <li>
                    To some extent, we use external service providers who have been carefully selected and commissioned by us to process this data. These service providers are bound by our instructions and are regularly checked by us.
                  </li>
                  <li>
                    Insofar as personal data is passed on to third parties in the course of services which we offer jointly with partners, you can find more detailed information in the descriptions of the individual services.
                  </li>
                  <li>
                    If these third parties are domiciled in a country outside the European Economic Area, you can find more detailed information about the consequences of this circumstance in the descriptions of the individual services.
                  </li>
                </ol>
              </section>

              <section className="space-y-4 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  Objection or revocation against the processing of your data
                </h2>
                <ol className="list-decimal pl-6 space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base">
                  <li>
                    You can revoke your consent to the processing of your data at any time. The revocation affects the permissibility of the processing of your personal data after its pronunciation to us.
                  </li>
                  <li>
                    As far as the processing of your personal data is concerned, you can lodge an objection against the processing if this processing is based on a weighing of interests. In this context, we ask you to explain the reasons why you object to the processing of your personal data by us, which arise from your particular situation. In the event that your objection is justified, we will examine the situation. We will then either not process your personal data any further, adapt the further data processing if necessary or cite compelling reasons worthy of protection why we process your personal data further.
                  </li>
                  <li>
                    You can also object at any time to the processing of your personal data for the purpose of advertising and data analysis.
                  </li>
                  <li>
                    Please send your revocation or objection to our contact data mentioned above.
                  </li>
                </ol>
              </section>

              <section className="space-y-4 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  How to contact us
                </h2>
                <ol className="list-decimal pl-6 space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base">
                  <li>
                    If you contact us by e-mail, the personal data you send us with your e-mail will be stored. The data will only be used to answer your questions. The data will not be passed on to third parties.
                  </li>
                  <li>
                    The processing of the above personal data is used solely to process your enquiries. Our legitimate interest in the processing of the data also lies in the above-mentioned purposes. If you have given us your consent, the legal basis for processing this data is Art. 6 Para. 1 S. 1 lit. a) DSGVO. Furthermore, the legal basis for the processing of this data, in particular in the event that you send us the data by e-mail, is Art. 6 Para. 1 S. 1 lit. f) DSGVO. If you wish to work towards the conclusion of a contract through your e-mail, Art. 6 para. 1 sentence 1 lit. b) DSGVO constitutes an additional legal basis.
                  </li>
                  <li>
                    The data will be deleted as soon as they are no longer required to achieve the purpose for which they were collected. This is the case when we have finally processed your enquiries.
                  </li>
                  <li>
                    You can revoke your consent to the processing of your personal data at any time. You can object to the storage of your personal data at any time. We would like to point out that in this case your request cannot be processed any further. You can declare your revocation or objection by sending an e-mail to the e-mail address given in the imprint.
                  </li>
                </ol>
              </section>

              <section className="space-y-4 pt-6">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  Processing of personal data in connection with applications
                </h2>
                <ol className="list-decimal pl-6 space-y-4 text-neutral-700 leading-relaxed text-sm md:text-base">
                  <li>
                    If you wish to apply for a job advertised by us, you must provide personal data. This data may include personal data such as first name, surname, address, date of birth, contact data such as telephone number or e-mail address as well as data relating to your academic and/or professional career such as grades. Data, the specification of which is absolutely necessary for the execution of the application procedure, either result from the respective job advertisement or are otherwise marked as such. The provision of further data is voluntary. If you send us your application (e.g. by e-mail), you agree to the processing of your data for the purpose of carrying out the application procedure. The data will not be passed on to third parties. Insofar as we provide you with the possibility of an online application and you use this separately provided online application procedure for the transmission of your application, separate data protection provisions apply, which you can view at any time on the website with the online application form.
                  </li>
                  <li>
                    The processing of personal data serves solely to process your application and to carry out the application procedure. If you have given us your consent, the legal basis for processing this data is Art. 6 Para. 1 S. 1 lit. a) DSGVO. Otherwise, the legal basis for processing this data is § 26 BDSG-neu and Art. 6 Para. 1 S. 1 lit. b) DSGVO.
                  </li>
                  <li>
                    The data are deleted as soon as they are no longer required for the purpose of their collection. In the event that the provider of the job advertisement for which you are applying informs us that the application procedure has been completed, we will delete your data immediately, otherwise after six months at the latest. A deletion will not take place if further processing and storage of your personal data is necessary in individual cases for the assertion, exercise or defence of legal claims. In this case, we have a legitimate interest in the further processing and storage of your personal data. The legal basis is Art. 6 Para. 1 S. 1 lit. f) DSGVO. A deletion does not take place even if we are obliged by law to further store your personal data.
                  </li>
                  <li>
                    You can revoke any consent given to us at any time. In particular, you may withdraw your application at any time. You should only provide us with the personal data necessary for participation in the application process and its implementation. There is no legal or contractual obligation to provide data. However, we would like to point out that we cannot carry out the application procedure without this data and cannot consider your application. You can have the data stored about you changed at any time. You can declare your revocation by sending an e-mail to the e-mail address given in the imprint.
                  </li>
                </ol>
              </section>

              <section className="space-y-4 pt-6 border-t border-neutral-200">
                <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 tracking-tight pb-2 border-b border-neutral-200">
                  EU Whistleblower Directive & Compliance
                </h2>
                <p className="text-neutral-700 text-sm md:text-base leading-relaxed">
                  The EU’s Whistleblower Directive protects whistleblowers when they uncover legal violations by companies (e.g., public procurement, environmental protection, health, safety, consumer protection, or data protection).
                </p>
                <p className="text-neutral-700 text-sm md:text-base">
                  To report your concerns or suspicions freely, please contact us in writing (including anonymously) at the following address:
                </p>
                <div className="p-6 bg-neutral-50 rounded-xl border border-neutral-200 text-neutral-800 space-y-1 font-medium">
                  <p className="text-neutral-500 text-xs uppercase tracking-wider font-semibold">personal / confidential / locked</p>
                  <p className="font-bold text-neutral-900">Legal Counsel / Compliance Officer</p>
                  <p className="text-neutral-900 font-bold">Encotec Energy (India) Pvt. Ltd.</p>
                  <p>C-85, Sector-63</p>
                  <p>Noida-201 301</p>
                  <p>Uttar Pradesh, India</p>
                </div>
                <p className="text-sm text-neutral-600">
                  We will treat your request confidentially and process data in strict compliance with applicable statutory data protection regulations.
                </p>
              </section>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
