function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">About Xsm Market</h2>

      <div className="space-y-8">
        <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary mb-4">Our Mission</h3>
          <p className="text-gray-300 leading-relaxed">
            Xsm Market is the premier marketplace for buying and selling established YouTube channels. We provide a
            secure, transparent platform that connects channel owners with serious buyers, ensuring safe transactions
            through our comprehensive escrow system.
          </p>
        </div>

        <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary mb-4">Why Choose Xsm Market?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-secondary mb-2">
                <i className="fas fa-shield-alt mr-2"></i>
                Secure Transactions
              </h4>
              <p className="text-gray-300 text-sm">
                Our escrow system ensures both buyers and sellers are protected throughout the transaction process.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">
                <i className="fas fa-user-check mr-2"></i>
                Verified Channels
              </h4>
              <p className="text-gray-300 text-sm">
                All channels are verified for authenticity and compliance before being listed on our platform.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">
                <i className="fas fa-headset mr-2"></i>
                24/7 Support
              </h4>
              <p className="text-gray-300 text-sm">
                Our dedicated support team is available around the clock to assist with any questions or issues.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-secondary mb-2">
                <i className="fas fa-chart-line mr-2"></i>
                Transparent Pricing
              </h4>
              <p className="text-gray-300 text-sm">
                Clear pricing with no hidden fees. Our 7.5% service fee covers all transaction costs.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary mb-4">How It Works</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="bg-primary text-dark rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                1
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">Browse & Select</h4>
                <p className="text-gray-300 text-sm">
                  Browse our curated selection of verified YouTube channels and find the perfect match for your needs.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-dark rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                2
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">Secure Payment</h4>
                <p className="text-gray-300 text-sm">
                  Pay the 7.5% service fee to initiate the secure transaction process through our escrow system.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-dark rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                3
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">Admin Facilitation</h4>
                <p className="text-gray-300 text-sm">
                  Our admin team facilitates the channel transfer, ensuring all parties fulfill their obligations.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="bg-primary text-dark rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">
                4
              </div>
              <div>
                <h4 className="font-semibold text-secondary mb-1">Complete Transfer</h4>
                <p className="text-gray-300 text-sm">
                  Once verified, the channel is transferred to the buyer and the seller receives their payment.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-dark-gray border border-light-gray rounded-lg p-6">
          <h3 className="text-xl font-bold text-primary mb-4">Our Commitment</h3>
          <p className="text-gray-300 leading-relaxed mb-4">
            At Xsm Market, we're committed to maintaining the highest standards of security, transparency, and customer
            service. Our platform is built on trust, and we work tirelessly to ensure every transaction is smooth and
            secure.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-semibold">Trusted Platform</span>
            <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-semibold">Secure Escrow</span>
            <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-semibold">Verified Channels</span>
            <span className="bg-primary text-dark px-3 py-1 rounded-full text-sm font-semibold">Expert Support</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage
