import { getWixClient } from '@app/hooks/useWixClientServer';
import { WixMediaImage } from '@app/components/Image/WixMediaImage';
import testIds from '@app/utils/test-ids';
import CopyButton from '@app/components/CopyButton/CopyButton';

export default async function Prompts() {
  const wixClient = await getWixClient();
  const { items } = await wixClient.items.query('PromptsTemplates').find();

  return (
    <div className="relative">
      <div className="w-full h-[400px] relative">
        <WixMediaImage
          media="https://static.wixstatic.com/media/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg/v1/fill/w_1920,h_492,al_b,q_85,usm_0.66_1.00_0.01,enc_auto/0b340f_d146a1cff38b4503ae5e6ccc9aa86368~mv2_d_5184_3456_s_4_2.jpg"
          alt="projects"
          sizes="100vw"
          objectFit="cover"
          disableZoom={true}
        />
      </div>
      <div className="max-w-7xl mx-auto mt-[-120px] relative bg-dark-surface px-8 sm:px-20 shadow-xl">
        <h1
          className="text-center py-8 font-site text-dark-text"
          data-testid={testIds.PROJECTS_PAGE.HEADER}
        >
          Prompt Templates
        </h1>
        <p className="pt-6 max-w-3xl text-sm text-center mx-auto text-dark-text">
          Explore our curated collection of AI prompt templates. Click the copy button to use any prompt in your projects.
        </p>
        <div
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 grid-flow-row mt-10"
          data-testid={testIds.PROJECTS_PAGE.PROJECT_LIST}
        >
          {items!.map((item) => (
            <div key={item._id} className="p-4 relative group">
              <div className="sm:w-[370px] h-[320px] relative rounded-lg overflow-hidden">
                <WixMediaImage
                  media={item.exampleImage}
                  alt={item.category}
                  objectFit="cover"
                />
              </div>
              <div className="bg-dark-card sm:mt-[-50px] border-t-4 relative mx-6 px-4 py-4 border-purple-site shadow-lg rounded-b-lg">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm text-dark-text flex-1">{item.promptText}</p>
                  <CopyButton text={item.promptText || ''} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
