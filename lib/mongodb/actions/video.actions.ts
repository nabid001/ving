"use server";

import { connectToDatabase } from "..";
import Video from "../models/video.model";

type CreateVideoProps = {
  title: string;
  videoUrl: string;
};

export const createVideo = async ({ title, videoUrl }: CreateVideoProps) => {
  try {
    await connectToDatabase();

    const newVideo = Video.create({
      title,
      videoUrl,
    });

    return JSON.parse(JSON.stringify(newVideo));
  } catch (error) {
    console.log(error);
  }
};

export const getVideos = async () => {
  try {
    connectToDatabase();

    const videos = await Video.find({});

    return JSON.parse(JSON.stringify(videos));
  } catch (error) {
    console.log(error);
  }
};
