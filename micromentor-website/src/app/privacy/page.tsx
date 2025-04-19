// src/app/privacy/page.tsx
import Layout from '@/components/layout/Layout';

export default function PrivacyPolicy() {
  return (
    <Layout>
      <div className="pt-32 pb-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Last updated: April 19, 2025</p>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 sm:p-8 md:p-10">
            <div className="prose dark:prose-invert max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Introduction & Scope</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                MicroMentor (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) is an AI-powered study companion application developed by Jack Neilan, a computer science university student. This Privacy Policy explains how we collect, use, and share information about you when you use our mobile application (the &quot;App&quot;) and website (together, the &quot;Services&quot;).
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Data We Collect</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We collect the following types of information:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Account Information:</strong> When you create an account, we collect your name, email address, and any other information you provide during the registration process.</li>
                <li><strong>Learning Data:</strong> We collect data about your interactions with the app, including chat conversations with AI mentors, quiz responses, flashcard usage, and learning progress to personalize your experience.</li>
                <li><strong>Device Information:</strong> We collect information about the device you use to access our Services, including device model, operating system, and unique device identifiers.</li>
                <li><strong>Usage Information:</strong> We collect information about how you use our Services, including crash reports, app features you access, and time spent on different areas of the app.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. How We Use Your Data</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li>Provide, maintain, and improve our Services, including creating personalized learning experiences</li>
                <li>Generate personalized quizzes and flashcards based on your learning data</li>
                <li>Track your progress and provide recommendations for study materials</li>
                <li>Communicate with you about our Services, including sending notifications about new features or updates</li>
                <li>Troubleshoot issues and fix bugs to improve the performance of our Services</li>
                <li>Protect the security of our Services and prevent fraud</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Data Sharing & Disclosure</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                We do not sell your personal information. We may share your information in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors who provide services on our behalf, such as hosting, data analysis, and customer service.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities (e.g., a court or government agency).</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of all or a portion of our assets, your information may be transferred as part of that transaction.</li>
                <li><strong>With Your Consent:</strong> We may share your information with third parties when you have given us your consent to do so.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Data Storage & Security</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Your data is stored on Firebase servers located in the US Central region. We implement appropriate technical and organizational measures to protect your personal information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, or access. Data is encrypted in transit and at rest. We retain your data for as long as your account is active or as needed to provide you with our Services. You can request deletion of your data at any time through the app settings or by contacting us.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. User Rights & Choices</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-300">
                You have several rights regarding your personal information:
              </p>
              <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700 dark:text-gray-300">
                <li><strong>Access and Correction:</strong> You can access and update your account information through the app settings.</li>
                <li><strong>Deletion:</strong> You can request deletion of your account and associated data through the app settings or by contacting us.</li>
                <li><strong>Data Export:</strong> You can request a copy of your data by contacting us.</li>
                <li><strong>Opt-Out:</strong> You can opt out of non-essential communications by updating your preferences in the app settings.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Children&apos;s Privacy</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Our Services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13. If we learn that we have collected personal information from a child under 13, we will promptly delete that information. If you believe we have collected personal information from a child under 13, please contact us.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. International Data Transfers</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                Your information may be transferred to, and processed in, countries other than the country in which you reside. These countries may have data protection laws that are different from the laws of your country. By using our Services, you consent to the transfer of your information to these countries.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Your California Privacy Rights</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                If you are a California resident, you have the right to request information about how we share certain categories of personal information with third parties. California residents also have the right to request access to and deletion of their personal information. To exercise these rights, please contact us using the information below.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Updates to This Policy</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                We may update this Privacy Policy from time to time. If we make material changes to this Privacy Policy, we will notify you through the app or by email. Your continued use of our Services after such notice constitutes your consent to the changes.
              </p>
              
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">11. Contact Us</h2>
              <p className="mb-6 text-gray-700 dark:text-gray-300">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
                <br /><br />
                Email: <a href="mailto:micromentor0@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">micromentor0@gmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}