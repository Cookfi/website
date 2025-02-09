export function TechSection() {
  return (
    <section className="px-5 py-16 sm:py-20 md:px-0">
      <div className="mx-auto max-w-2xl lg:max-w-4xl">
        <span className="text-left font-heading font-bold italic text-primary">
          Using The Latest AI Framework
        </span>
        <h2 className="text-left text-3xl font-bold tracking-tight text-white sm:text-4xl">
          the tech behind CookFi
        </h2>

        <div className="mt-10 space-y-12">
          {/* Architecture */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-primary">Powered by ElizaOS</h3>
            <p className="mb-4 text-gray-300">
              Our AI-powered autonomous trading system is built on ElizaOS, built with React and
              Typescript. We use Prompt Chaining pattern for intelligent decision making. The system
              processes multiple data streams to make informed trading decisions.
            </p>
            <div className="pl-6">
              <ul className="list-disc space-y-2 text-gray-300">
                <li>Real-time token data collection from multiple sources</li>
                <li>AI-driven analysis for BUY, SELL, or HOLD decisions</li>
                <li>
                  Automated execution on Base (via Coinbase SDK) and Solana (via Solana Agent Kit)
                </li>
              </ul>
            </div>
          </div>

          {/* Core Components */}
          <div>
            <h3 className="mb-4 text-xl font-semibold text-primary">Integrated Data Streams</h3>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-800/50 p-4 shadow-sm">
                  <h4 className="font-medium text-white">Market Data</h4>
                  <p className="text-gray-300">
                    DexScreener integration for token metrics and Moralis for trending tokens
                  </p>
                </div>
                <div className="rounded-lg bg-gray-800/50 p-4 shadow-sm">
                  <h4 className="font-medium text-white">Social Signals</h4>
                  <p className="text-gray-300">
                    Cookie3 plugin for real-time X post analysis and sentiment tracking
                  </p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-gray-800/50 p-4 shadow-sm">
                  <h4 className="font-medium text-white">Wallet Analysis</h4>
                  <p className="text-gray-300">
                    TopWallets tracking for influencer trading patterns and trend analysis
                  </p>
                </div>
                <div className="rounded-lg bg-gray-800/50 p-4 shadow-sm">
                  <h4 className="font-medium text-white">Chain Integration</h4>
                  <p className="text-gray-300">
                    Live deployment on Base and Solana mainnets with Coinbase SDK integration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
