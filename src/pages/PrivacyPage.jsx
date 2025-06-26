function PrivacyPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Privacy Policy</h2>

      <div className="bg-dark-gray border border-light-gray rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-primary mb-4">Information We Collect</h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            We collect information you provide directly to us, such as when you create an account, list a channel, or
            contact us for support.
          </p>
          <ul className="text-gray-300 space-y-2 ml-6">
            <li>• Account information (name, email, username)</li>
            <li>• Channel listing details and descriptions</li>
            <li>• Transaction and payment information</li>
            <li>• Communications and support requests</li>
            <li>• Usage data and analytics</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">How We Use Your Information</h3>
          <p className="text-gray-300 leading-relaxed mb-3">We use the information we collect to:</p>
          <ul className="text-gray-300 space-y-2 ml-6">
            <li>• Provide and maintain our services</li>
            <li>• Process transactions and payments</li>
            <li>• Communicate with you about your account</li>
            <li>• Improve our platform and user experience</li>
            <li>• Prevent fraud and ensure platform security</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">Information Sharing</h3>
          <p className="text-gray-300 leading-relaxed">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your
            consent, except as described in this policy. We may share information with trusted service providers who
            assist us in operating our platform.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">Data Security</h3>
          <p className="text-gray-300 leading-relaxed">
            We implement appropriate security measures to protect your personal information against unauthorized access,
            alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">Your Rights</h3>
          <p className="text-gray-300 leading-relaxed mb-3">You have the right to:</p>
          <ul className="text-gray-300 space-y-2 ml-6">
            <li>• Access and update your personal information</li>
            <li>• Request deletion of your account and data</li>
            <li>• Opt out of marketing communications</li>
            <li>• Request a copy of your data</li>
          </ul>
        </div>

        <div className="bg-medium-gray rounded-lg p-4 mt-8">
          <p className="text-sm text-gray-400 text-center">
            Last updated: December 2024. Contact us at privacy@xsmmarket.com for privacy-related questions.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPage
