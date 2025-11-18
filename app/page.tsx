import { CarouselClient } from '@app/components/Carousel/Carousel';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';

export default function Home() {
  return (
    <div className="mx-auto relative sm:px-20 py-5">
      <div className="text-center w-full relative">
        <div className="absolute top-0 left-0 h-[200px] sm:h-[calc(100%-55px)] w-full bg-black opacity-50"></div>
        <video autoPlay muted loop className="w-full h-[200px] sm:h-fit">
          <source
            src="https://video.wixstatic.com/video/0b340f_b4aaabafff194cf6ac9ee5511f58099d/720p/mp4/file.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute top-[40px] right-[30px] sm:top-2/4 sm:left-2/4 text-white sm:translate-y-[-50%] sm:translate-x-[-50%] font-site">
          <h2 className="sm:text-4xl mb-4">FREE & ACCESSIBLE</h2>
          <h1 className="sm:text-[90px] sm:leading-[90px]">
            EDUCATION FOR ALL
          </h1>
        </div>
        <div className="flex flex-col sm:flex-row relative items-center bg-dark-surface mt-[-10px] sm:mt-[-55px] mx-auto max-w-xs sm:max-w-4xl border-t-4 border-purple-site font-site shadow-xl">
          <h3 className="flex-1 sm:text-3xl py-4 px-8 text-center sm:text-left text-dark-text">
            Discover AI Prompt Templates
          </h3>
          <a
            href="/prompts"
            className="btn-main sm:text-2xl sm:p-8 hover:bg-purple-700 w-fit"
          >
            EXPLORE
          </a>
        </div>
      </div>

      <div
        className="flex mt-12 sm:mt-32 sm:gap-12 flex-col sm:flex-row"
        data-testid={testIds.HOME_PAGE.HIGHLIGHTS}
      >
        <div className="basis-1/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_434,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-purple-site p-8 sm:w-60 relative bg-dark-surface sm:mt-[-300px] shadow-xl">
            <h3 className="text-2xl font-site text-dark-text">Prompt Library</h3>
            <p className="my-6 text-sm text-dark-text">
              Browse our extensive collection of AI prompt templates designed to help you create better content, code, and creative works. Each prompt is carefully crafted and ready to use.
            </p>
            <a
              href="/prompts"
              className="text-purple-400 hover:text-purple-300 py-6 font-site transition-colors"
              data-testid={testIds.HOME_PAGE.OUR_INITIATIVES_CTA}
            >
              Explore Prompts →
            </a>
          </div>
        </div>
        <div className="basis-2/3">
          <div className="h-[370px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg/v1/fill/w_615,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_c407b331d71449afa40b30f6efb200aa~mv2_d_5580_4160_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-purple-site p-8 sm:w-60 relative bg-dark-surface sm:ml-32 sm:mt-[-430px] shadow-xl">
            <h3 className="text-2xl font-site text-dark-text">Our Mission</h3>
            <p className="my-6 text-sm text-dark-text">
              We curate high-quality AI prompt templates to help creators, developers, and professionals unlock the full potential of AI tools. Our goal is to make AI more accessible and productive for everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row sm:mt-32 mb-12 sm:gap-12">
        <div className="basis-2/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg/v1/fill/w_682,h_568,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_0b4d1813105145bfa782ce1d7a379151~mv2_d_5760_3840_s_4_2.jpg"
              objectFit="cover"
              sizes="100vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-purple-site p-8 sm:w-60 relative bg-dark-surface sm:ml-44 sm:mt-[-230px] shadow-xl">
            <h3 className="text-2xl font-site text-dark-text">Latest Prompts</h3>
            <p className="my-6 text-sm text-dark-text">
              Check out our newest prompt templates and discover innovative ways to interact with AI tools.
            </p>
            <a href="/prompts" className="text-purple-400 hover:text-purple-300 py-6 font-site transition-colors">
              View All →
            </a>
          </div>
        </div>
        <div className="basis-1/3">
          <div className="h-[370px] sm:h-[470px] relative">
            <WixMediaImage
              media="https://static.wixstatic.com/media/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg/v1/fill/w_486,h_568,al_tr,q_80,usm_0.66_1.00_0.01,enc_auto/0b340f_a075ec7cf76b4b479b4b482e44a88c43~mv2_d_3840_5760_s_4_2.jpg"
              objectFit="cover"
              sizes="50vw"
              disableZoom={true}
            />
          </div>
          <div className="border-y-4 border-purple-site p-8 sm:w-60 relative bg-dark-surface sm:ml-32 sm:mt-[-530px] shadow-xl">
            <h3 className="text-2xl font-site text-dark-text">Get Started</h3>
            <p className="my-6 text-sm text-dark-text">
              Start exploring our prompt templates today. Simply click the copy button on any prompt to use it in your favorite AI tool.
            </p>
            <a href="/prompts" className="text-purple-400 hover:text-purple-300 py-6 font-site transition-colors">
              Browse Templates →
            </a>
          </div>
        </div>
      </div>
      <h2 className="text-3xl sm:text-5xl text-center mb-10 sm:mb-20 font-site text-dark-text">
        Our Collection
      </h2>
      <div className="flex flex-col sm:flex-row gap-8 sm:justify-between items-center font-site">
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] block sm:leading-[200px] text-purple-site">
            40K
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:right-0 sm:top-[190px] text-dark-text">
            Prompt
            <br />
            Templates
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            8K
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[50px] sm:left-[130px] bg-dark-bg text-dark-text px-2">
            Active
            <br />
            Users
          </span>
        </div>
        <div className="relative text-center sm:text-left">
          <span className="text-4xl sm:text-[200px] sm:leading-[200px] text-purple-site">
            120
          </span>
          <span className="border-t-4 block sm:inline-block border-purple-site text-xl sm:text-4xl sm:absolute sm:top-[130px] sm:left-[150px] bg-dark-bg text-dark-text px-2">
            Categories
          </span>
        </div>
      </div>
      <CarouselClient />
    </div>
  );
}
