import React from "react";
import {
  FiCode,
  FiUsers,
  FiShield,
  FiZap,
  FiGitBranch,
  FiCloud,
} from "react-icons/fi";

const HeroStat = ({ value, label }) => (
  <div>
    <p className="text-3xl md:text-4xl font-bold text-white">{value}</p>
    <p className="text-sm text-gray-400">{label}</p>
  </div>
);

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-[#111115] p-6 rounded-lg border border-gray-800">
    <div className="flex items-center justify-center w-12 h-12 bg-purple-900/50 rounded-lg mb-4 border border-purple-700">
      {icon}
    </div>
    <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const StatCard = ({ value, label }) => (
  <div className="text-center bg-[#111115] p-8 rounded-lg border border-gray-800">
    <h3 className="text-4xl md:text-5xl font-bold text-purple-400">{value}</h3>
    <p className="text-gray-400 mt-2">{label}</p>
  </div>
);

const CodeMockup = ({ lines }) => (
  <div className="bg-[#0D1117] border border-gray-700 rounded-lg p-4 font-mono text-sm shadow-2xl shadow-purple-900/20">
    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-700">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <div className="text-xs px-2 py-0.5 rounded bg-green-500/20 text-green-400">
        JavaScript
      </div>
    </div>
    <pre>
      {lines.map((line, index) => (
        <code
          key={index}
          className="block whitespace-pre-wrap"
          dangerouslySetInnerHTML={{ __html: line }}
        ></code>
      ))}
    </pre>
  </div>
);

export default function HomePage() {
  return (
    <div className="text-white min-h-screen font-sans p-8">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="grid md:grid-cols-2 gap-12 items-center mb-24 md:mb-32">
          <div className="text-center md:text-left">
            <span className="flex items-center justify-center gap-2 w-56 bg-[#1F1F1F] text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4 ">
              <div className="bg-green-600 w-1.5 h-1.5 rounded-full animate-[pulse-green_2s_infinite]"></div>
              AI-Powered Development
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Build faster with{" "}
              <span className="text-purple-400">Artificial Intelligence</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-xl mx-auto md:mx-0 mb-8">
              Our AI-powered development environment helps you write code, debug
              issues, and deploy your applications at lightspeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
                Get Started
              </button>
              <button className="bg-transparent border border-gray-600 hover:bg-gray-800 text-gray-300 font-bold py-3 px-8 rounded-lg transition-colors">
                View Demo
              </button>
            </div>
            <div className="flex justify-center md:justify-start gap-8 mt-12">
              <HeroStat value="500K+" label="Active Users" />
              <HeroStat value="25.0M+" label="Lines of Code" />
              <HeroStat value="99.9%" label="Uptime" />
            </div>
          </div>
          <div>
            <CodeMockup
              lines={[
                `<span class="text-blue-400">import</span> { <span class="text-orange-400">createApi</span> } <span class="text-blue-400">from</span> <span class="text-yellow-400">'@coderia/ai'</span>;`,
                ``,
                `<span class="text-purple-400">const</span> <span class="text-green-400">api</span> = <span class="text-yellow-400">createApi</span>({`,
                `  <span class="text-orange-400">apiKey</span>: <span class="text-yellow-400">'YOUR_API_KEY'</span>`,
                `});`,
                ``,
                `<span class="text-blue-400">async</span> <span class="text-purple-400">function</span> <span class="text-green-400">generateComponent</span>() {`,
                `  <span class="text-purple-400">const</span> <span class="text-orange-400">code</span> = <span class="text-blue-400">await</span> api.generate(<span class="text-yellow-400">'A React button'</span>);`,
                `  console.log(code);`,
                `}`,
              ]}
            />
          </div>
        </section>

        <section className="mb-24 md:mb-32">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold">Built for modern development</h2>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mt-4">
              Every feature is designed to improve your development workflow
              with simplicity and performance.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<FiCode className="text-purple-400 text-2xl" />}
              title="AI Code Assistant"
              description="Generate, refactor, and debug your code with our context-aware AI assistant."
            />
            <FeatureCard
              icon={<FiUsers className="text-purple-400 text-2xl" />}
              title="Real-time Collaboration"
              description="Work with your team in a shared workspace with live editing and cursors."
            />
            <FeatureCard
              icon={<FiShield className="text-purple-400 text-2xl" />}
              title="Security First"
              description="Automated vulnerability scanning and dependency analysis to keep your code secure."
            />
            <FeatureCard
              icon={<FiZap className="text-purple-400 text-2xl" />}
              title="Lightning Fast"
              description="Experience instant startup times and a highly optimized, low-latency interface."
            />
            <FeatureCard
              icon={<FiGitBranch className="text-purple-400 text-2xl" />}
              title="Git Integration"
              description="Seamlessly connect your Git repositories and manage your workflow in one place."
            />
            <FeatureCard
              icon={<FiCloud className="text-purple-400 text-2xl" />}
              title="Cloud Deploy"
              description="Deploy your applications to any cloud provider with a single command."
            />
          </div>
        </section>

        <section className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-24 md:mb-32">
          <StatCard value="40K" label="Projects Created" />
          <StatCard value="2.0M" label="Deployments" />
          <StatCard value="12K" label="Companies" />
          <StatCard value="99.9%" label="Uptime SLA" />
        </section>

        <section className="text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to build something amazing?
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
            Join thousands of developers and start building your next great idea
            on Coderia today.
          </p>
          <div className="flex justify-center items-center gap-4">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors">
              Start Building
            </button>
            <a
              href="#"
              className="text-purple-400 font-semibold hover:text-purple-300"
              style={{
                borderRadius: "12px",
                transition: "all 0.3s ease",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                padding: "12px 15px",
              }}
            >
              or contact sales
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
