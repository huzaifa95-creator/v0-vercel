function TermsPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Terms and Conditions</h2>

      <div className="bg-dark-gray border border-light-gray rounded-lg p-6 space-y-6">
        <div>
          <h3 className="text-xl font-bold text-primary mb-4">1. Acceptance of Terms</h3>
          <p className="text-gray-300 leading-relaxed">
            By accessing and using Xsm Market, you accept and agree to be bound by the terms and provision of this
            agreement. If you do not agree to abide by the above, please do not use this service.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">2. Platform Services</h3>
          <p className="text-gray-300 leading-relaxed mb-3">
            Xsm Market provides a marketplace platform for buying and selling YouTube channels. Our services include:
          </p>
          <ul className="text-gray-300 space-y-2 ml-6">
            <li>• Channel listing and discovery services</li>
            <li>• Secure escrow transaction processing</li>
            <li>• Admin-facilitated channel transfers</li>
            <li>• User communication tools</li>
            <li>• Dispute resolution services</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">3. Transaction Process</h3>
          <p className="text-gray-300 leading-relaxed mb-3">All transactions on Xsm Market follow a secure process:</p>
          <ul className="text-gray-300 space-y-2 ml-6">
            <li>• Buyer pays 7.5% service fee to initiate transaction</li>
            <li>• Seller transfers channel ownership to admin escrow</li>
            <li>• Admin verifies channel transfer and buyer payment</li>
            <li>• Channel is transferred to buyer upon confirmation</li>
            <li>• Seller receives payment minus applicable fees</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">4. User Responsibilities</h3>
          <p className="text-gray-300 leading-relaxed mb-3">Users agree to:</p>
          <ul className="text-gray-300 space-y-2 ml-6">
            <li>• Provide accurate and truthful information</li>
            <li>• Comply with YouTube's Terms of Service</li>
            <li>• Not engage in fraudulent or deceptive practices</li>
            <li>• Maintain confidentiality of account credentials</li>
            <li>• Report any suspicious activity to administrators</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">5. Fees and Payments</h3>
          <p className="text-gray-300 leading-relaxed">
            Xsm Market charges a 7.5% service fee on all transactions. This fee covers escrow services, admin
            facilitation, and platform maintenance. Additional fees may apply for premium listings or expedited
            services.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">6. Dispute Resolution</h3>
          <p className="text-gray-300 leading-relaxed">
            In case of disputes, Xsm Market will mediate between parties to reach a fair resolution. Our decision in
            dispute matters is final and binding. Users agree to cooperate fully in any dispute resolution process.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">7. Limitation of Liability</h3>
          <p className="text-gray-300 leading-relaxed">
            Xsm Market shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            resulting from your use of the platform. Our liability is limited to the amount of fees paid for the
            specific transaction in question.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-primary mb-4">8. Modifications</h3>
          <p className="text-gray-300 leading-relaxed">
            Xsm Market reserves the right to modify these terms at any time. Users will be notified of significant
            changes, and continued use of the platform constitutes acceptance of modified terms.
          </p>
        </div>

        <div className="bg-medium-gray rounded-lg p-4 mt-8">
          <p className="text-sm text-gray-400 text-center">
            Last updated: December 2024. For questions about these terms, please contact our support team.
          </p>
        </div>
      </div>
    </div>
  )
}

export default TermsPage
