import UploadForm from "@/components/UploadForm";
import { getVideos } from "@/lib/mongodb/actions/video.actions";
import Image from "next/image";

export default async function Home() {
  // const videos = await getVideos();

  return (
    <div className="">
      {/* {videos.map((vid: { vid: string; title: string; videoUrl: string }) => (
        <div className="flex flex-col items-center justify-center">
          <video
            controls
            src={vid.videoUrl}
            width={300}
            height={300}
            autoPlay
          />
          <h1>{vid.title}</h1>
        </div>
      ))} */}
      <h1>Hello World</h1>
    </div>
  );
}
