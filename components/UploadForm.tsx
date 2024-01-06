"use client";

import { CldUploadButton, CldVideoPlayer } from "next-cloudinary";
import Image from "next/image";
import { useState } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "./ui/textarea";
import { createVideo } from "@/lib/mongodb/actions/video.actions";
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
});

const UploadForm = () => {
  const [files, setFiles] = useState("");

  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    await createVideo({
      title: data.title,
      videoUrl: files,
    });

    router.push("/");
  }

  return (
    <div className=" grid h-[80%] w-[95%] grid-cols-[auto_1fr] content-center gap-3 bg-gray-50 p-3 shadow-md">
      <div className="overflow-hidden">
        <div className=" relative flex h-[500px] w-[400px] items-center justify-center rounded-lg bg-gray-200">
          {files ? (
            <video
              src={files}
              width={400}
              height={300}
              className="p-3"
              autoPlay
              muted
              loop
              controls
            />
          ) : (
            <CldUploadButton
              uploadPreset="qm3ijpzr"
              onUpload={(result) => {
                setFiles(result?.info?.url);
              }}
            />
          )}
        </div>
      </div>
      <div className="p-3">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-2/3 space-y-6"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Textarea placeholder="add title" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default UploadForm;
