import { HeroVideoDialog } from "../../ui/hero-video-dialog";

const DialogVideo = () => {
  return (
    <>
      <div>
        <div className="relative">
          <HeroVideoDialog
            className=""
            animationStyle="from-center"
            videoSrc="https://www.youtube.com/embed/qh3NGpYRG3I?si=4rb-zSdDkVK9qxxb"
            thumbnailSrc="https://startup-template-sage.vercel.app/hero-light.png"
            thumbnailAlt="Hero Video"
          />
        </div>
        
      </div>
    </>
  );
};

export default DialogVideo;
