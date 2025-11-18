import './footer.css';
import { Logo } from '@app/components/Logo/Logo';
import testIds from '@app/utils/test-ids';

const Footer = () => (
  <footer
    className="m-h-56 leading-7 sm:p-14 font-site bg-dark-surface border-t-2 border-dark-border"
    data-testid={testIds.LAYOUT.FOOTER}
  >
    <div className="flex flex-col sm:flex-row">
      <div className="basis-2/3 bg-purple-site text-white p-14 sm:pl-44">
        <h2 className="text-2xl sm:text-3xl font-bold">GET IN TOUCH</h2>
        <div className="flex flex-col sm:flex-row text-sm font-helvetica">
          <div className="basis-1/3 border-b border-white pb-4">
            <p className="mt-10">
              Have questions about our prompt templates? We&apos;re here to help you get the most out of AI tools.
            </p>
            <p className="mt-10">Template ID: AIPT-2025</p>
          </div>
          <div className="basis-1/3"></div>
          <div className="basis-1/2 border-b border-white pb-4">
            <p className="mt-10">
              AI Prompt Library
              <br /> Online Platform
            </p>
            <p className="mt-10">Available 24/7</p>
          </div>
        </div>
        <h3 className="text-4xl mt-10">prompts@aitools.com</h3>
      </div>
      <div className="basis-1/3 bg-dark-card p-14 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-dark-text">STAY UPDATED</h2>
        <p className="mt-6 text-dark-text">Get notified about new prompt templates</p>
        <input
          type="email"
          className="my-6 w-3/4 block mx-auto bg-dark-surface border-0 border-b border-purple-site text-dark-text placeholder-dark-text/50"
          placeholder="Email Address"
        />
        <a href="#" className="text-purple-400 hover:text-purple-300 py-6 font-site transition-colors">
          Subscribe Now
        </a>
      </div>
    </div>
    <div className="mx-auto text-center sm:text-xs mt-6">
      <Logo />
      <p className="font-default mb-10 text-dark-text">
        © 2025 AI Prompt Templates. Powered by AI
      </p>
    </div>
  </footer>
);

export default Footer;
