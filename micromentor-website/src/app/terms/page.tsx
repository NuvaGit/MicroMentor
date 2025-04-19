// src/app/terms/page.tsx
import Layout from '@/components/layout/Layout';

export default function TermsOfService() {
  return (
    <Layout>
      <div className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Terms of Service</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Last updated: April 19, 2025</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8 md:p-10">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Agreement to Terms</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                By accessing or using the MicroMentor mobile application ("App") and website (together, the "Services"), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using the Services.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Description of Services</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                MicroMentor is an AI-powered study companion designed to help you learn faster and smarter. Our Services include chat interactions with AI mentors, personalized quizzes, flashcards, and curated educational videos. These Services are subject to change or termination at our discretion without notice.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. User Accounts</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Some features of our Services require you to create an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account. We reserve the right to terminate accounts, edit or remove content, and cancel orders at our sole discretion.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. User Conduct</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                When using our Services, you agree not to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Use the Services for any illegal purpose or in violation of any local, state, national, or international law</li>
                <li>Harass, abuse, or harm another person</li>
                <li>Impersonate or misrepresent your affiliation with any person or entity</li>
                <li>Interfere with or disrupt the Services or servers or networks connected to the Services</li>
                <li>Attempt to gain unauthorized access to any portion of the Services</li>
                <li>Use the Services to collect or store personal data about other users without their consent</li>
                <li>Use the Services in any manner that could disable, overburden, damage, or impair the site</li>
                <li>Use any robot, spider, or other automatic device to access the Services</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Intellectual Property</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                The Services and their entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by MicroMentor, its licensors, or other providers of such material and are protected by copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. User Content</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                When you submit, upload, or otherwise make available any content through our Services, you grant us a worldwide, non-exclusive, royalty-free license to use, copy, modify, create derivative works from, distribute, publicly display, and publicly perform such content for the purpose of providing and improving our Services. You represent and warrant that you have all rights necessary to grant these rights.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Disclaimers</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                THE SERVICES ARE PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. MICROMENTOR DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. MICROMENTOR DOES NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, OR THAT THE SERVICES OR THE SERVER THAT MAKES IT AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Limitation of Liability</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                IN NO EVENT SHALL MICROMENTOR, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS, BE LIABLE TO YOU FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE, OR CONSEQUENTIAL DAMAGES WHATSOEVER RESULTING FROM ANY (I) ERRORS, MISTAKES, OR INACCURACIES OF CONTENT, (II) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER, RESULTING FROM YOUR ACCESS TO AND USE OF OUR SERVICES, (III) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (IV) ANY INTERRUPTION OR CESSATION OF TRANSMISSION TO OR FROM OUR SERVICES, (V) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE, WHICH MAY BE TRANSMITTED TO OR THROUGH OUR SERVICES BY ANY THIRD PARTY, AND/OR (VI) ANY ERRORS OR OMISSIONS IN ANY CONTENT OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF YOUR USE OF ANY CONTENT POSTED, EMAILED, TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SERVICES, WHETHER BASED ON WARRANTY, CONTRACT, TORT, OR ANY OTHER LEGAL THEORY, AND WHETHER OR NOT THE COMPANY IS ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Indemnification</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                You agree to defend, indemnify, and hold harmless MicroMentor, its officers, directors, employees, and agents, from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including but not limited to attorney's fees) arising from: (i) your use of and access to the Services; (ii) your violation of any term of these Terms of Service; (iii) your violation of any third party right, including without limitation any copyright, property, or privacy right; or (iv) any claim that your content caused damage to a third party.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Governing Law</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                These Terms shall be governed and construed in accordance with the laws of the jurisdiction in which MicroMentor operates, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Changes to Terms</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will provide at least 30 days' notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion. By continuing to access or use our Services after any revisions become effective, you agree to be bound by the revised terms.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">12. Contact Us</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                If you have any questions about these Terms, please contact us at:<br /><br />
                Email: <a href="mailto:micromentor0@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">micromentor0@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}