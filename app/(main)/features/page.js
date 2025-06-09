import React from "react";
import {
  FiCpu,
  FiTerminal,
  FiDatabase,
  FiGitBranch,
  FiBarChart2,
  FiUsers,
  FiLock,
  FiShield,
  FiFileText,
  FiZap,
  FiCode,
  FiBox,
  FiCheckCircle,
} from "react-icons/fi";
import { FaBug } from "react-icons/fa";

const StatCard = ({ value, label }) => (
  <div className="text-center">
    <h3 className="text-4xl md:text-5xl font-bold text-purple-400">{value}</h3>
    <p className="text-gray-400 mt-2">{label}</p>
  </div>
);

const ToolCard = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
    <div className="flex items-center justify-center w-12 h-12 bg-purple-900/50 rounded-lg mb-4 border border-purple-700">
      {icon}
    </div>
    <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const SecurityCard = ({ icon, title, description }) => (
  <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
    <div className="flex items-center justify-center w-12 h-12 bg-green-900/50 rounded-lg mb-4 border border-green-700">
      {icon}
    </div>
    <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
    <p className="text-gray-400 text-sm">{description}</p>
  </div>
);

const FeatureCard = ({
  icon,
  title,
  description,
  children,
  reverse = false,
}) => (
  <div
    className={`flex flex-col md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } gap-8 items-center`}
  >
    <div className="w-full md:w-1/2">
      <div className="flex items-center gap-4 mb-4">
        <div className="flex items-center justify-center w-12 h-12 bg-purple-900/50 rounded-lg border border-purple-700">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-400">{description}</p>
    </div>
    <div className="w-full md:w-1/2">{children}</div>
  </div>
);

const CodeMockup = ({ lines, lang, accentColor = "green" }) => (
  <div className="bg-[#0D1117] border border-gray-700 rounded-lg p-4 font-mono text-sm">
    <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-700">
      <div className="flex items-center gap-2">
        <span className="w-3 h-3 bg-red-500 rounded-full"></span>
        <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
        <span className="w-3 h-3 bg-green-500 rounded-full"></span>
      </div>
      <div
        className={`text-xs px-2 py-0.5 rounded ${
          accentColor === "green"
            ? "bg-green-500/20 text-green-400"
            : "bg-yellow-500/20 text-yellow-400"
        }`}
      >
        {lang}
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

export default function App() {
  return (
    <div className="text-white min-h-screen font-sans p-8">
      <div className="container mx-auto px-4 py-16 md:py-24">
        <section className="text-center mb-16 md:mb-24">
          <span className="m-auto flex items-center justify-center gap-2 w-44 bg-[#1F1F1F] text-gray-300 text-sm font-medium px-4 py-1.5 rounded-full mb-4 ">
            <div className="bg-green-600 w-1.5 h-1.5 rounded-full animate-[pulse-green_2s_infinite]"></div>
            Powerful Features
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Advanced Features Designed for Developers
          </h1>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Build, test, and deploy your applications faster with our suite of
            AI-powered tools and robust infrastructure.
          </p>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            AI-Powered Development
          </h2>
          <div className="space-y-16">
            <FeatureCard
              icon={<FiCode className="text-purple-400 text-2xl" />}
              title="AI Code Generation"
              description="Generate boilerplate code, functions, and even entire components with a simple prompt. Our AI understands your project context to provide relevant and accurate suggestions."
            >
              <CodeMockup
                lang="JavaScript"
                lines={[
                  '<span class="text-blue-400">function</span> <span class="text-green-400">createButton</span>(<span class="text-orange-400">text</span>) {',
                  '  <span class="text-purple-400">const</span> btn = document.createElement(<span class="text-yellow-400">\'button\'</span>);',
                  "  btn.textContent = text;",
                  '  <span class="text-blue-400">return</span> btn;',
                  "}",
                ]}
              />
            </FeatureCard>

            <FeatureCard
              icon={<FaBug className="text-purple-400 text-2xl" />}
              title="Smart Debugging"
              description="Identify and fix bugs in record time. Our AI analyzes your code, suggests potential fixes, and explains complex errors in plain English."
              reverse={true}
            >
              <div className="bg-[#0D1117] border border-gray-700 rounded-lg p-4">
                <div className="flex items-center pb-2 mb-2 border-b border-gray-700">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="bg-red-900/50 border border-red-700 p-3 rounded-md">
                  <p className="font-mono text-sm text-red-300">
                    TypeError: Cannot read properties of undefined (reading
                    'map')
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    AI Suggestion: Check if the 'users' array is initialized
                    before calling .map().
                  </p>
                </div>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={<FiBox className="text-purple-400 text-2xl" />}
              title="Project Assistance"
              description="From planning your architecture to choosing the right libraries, our AI acts as your co-pilot, providing insights and recommendations to streamline your development process."
            >
              <div className="bg-[#0D1117] border border-gray-700 rounded-lg p-4">
                <div className="flex items-center justify-between pb-2 mb-2 border-b border-gray-700">
                  <h4 className="text-white font-semibold">
                    Project Structure
                  </h4>
                  <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-0.5 rounded">
                    Analysis
                  </span>
                </div>
                <ul className="text-sm space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2 h-4 w-4" />{" "}
                    /components
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2 h-4 w-4" />{" "}
                    /pages/api
                  </li>
                  <li className="flex items-center">
                    <FiCheckCircle className="text-green-500 mr-2 h-4 w-4" />{" "}
                    /lib/utils.js
                  </li>
                </ul>
              </div>
            </FeatureCard>

            <FeatureCard
              icon={<FiZap className="text-purple-400 text-2xl" />}
              title="Automated Testing"
              description="Automatically generate unit tests, integration tests, and end-to-end tests for your application. Ensure code quality and prevent regressions with AI-powered test creation."
              reverse={true}
            >
              <CodeMockup
                lang="Jest"
                lines={[
                  '<span class="text-blue-400">test</span>(<span class="text-yellow-400">\'should create a button\'</span>, () => {',
                  '  <span class="text-purple-400">const</span> button = createButton(<span class="text-yellow-400">\'Click Me\'</span>);',
                  '  <span class="text-green-400">expect</span>(button.textContent).toBe(<span class="text-yellow-400">\'Click Me\'</span>);',
                  "});",
                ]}
              />
            </FeatureCard>
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Developer Tools
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ToolCard
              icon={<FiCpu className="text-purple-400 text-2xl" />}
              title="CI/CD Integration"
              description="Automate your build, test, and deployment pipeline with seamless integrations."
            />
            <ToolCard
              icon={<FiTerminal className="text-purple-400 text-2xl" />}
              title="Internal Tunnel"
              description="Expose your local development server to the internet for easy testing and sharing."
            />
            <ToolCard
              icon={<FiDatabase className="text-purple-400 text-2xl" />}
              title="Database Tools"
              description="Manage your data with an intuitive interface and powerful query builders."
            />
            <ToolCard
              icon={<FiGitBranch className="text-purple-400 text-2xl" />}
              title="Version Control"
              description="Integrated Git support for branching, merging, and reviewing code."
            />
            <ToolCard
              icon={<FiBarChart2 className="text-purple-400 text-2xl" />}
              title="Monitoring & Analytics"
              description="Track your application's performance and user behavior with real-time data."
            />
            <ToolCard
              icon={<FiUsers className="text-purple-400 text-2xl" />}
              title="Collaboration"
              description="Work with your team in a shared environment with real-time editing and comments."
            />
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Security & Compliance
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <SecurityCard
              icon={<FiLock className="text-green-400 text-2xl" />}
              title="Data-in-Rest Encryption"
              description="All your data is encrypted at rest using industry-standard AES-256."
            />
            <SecurityCard
              icon={<FiShield className="text-green-400 text-2xl" />}
              title="Firewall & WAF"
              description="Protect your applications from common threats and vulnerabilities."
            />
            <SecurityCard
              icon={<FiUsers className="text-green-400 text-2xl" />}
              title="Access Control"
              description="Fine-grained role-based access control (RBAC) to secure your resources."
            />
            <SecurityCard
              icon={<FiFileText className="text-green-400 text-2xl" />}
              title="Audit Logs"
              description="Keep a detailed record of all actions and events for compliance and security."
            />
          </div>
        </section>

        <section className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Performance & Reliability
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <StatCard value="99%" label="Uptime SLA" />
            <StatCard value="4ms" label="API Response" />
            <StatCard value="DDoS" label="Mitigation" />
            <StatCard value="24/7" label="Support" />
          </div>
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Building with Powerful Features
          </h2>
          <p className="text-lg text-gray-400 max-w-xl mx-auto mb-8">
            Join thousands of developers who are shipping faster and more
            reliably than ever before.
          </p>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg transition-colors duration-300 text-lg">
            Get Started
          </button>
        </section>
      </div>
    </div>
  );
}
