"use client";

import axios from "axios";

import Heading from "@/components/heading";

import { Code } from "lucide-react";

import { useForm } from "react-hook-form";

import * as z from "zod";

import { fromSchema } from "./constants";

import { zodResolver } from "@hookform/resolvers/zod";

import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";

import { Input } from "@/components/ui/input";

import { Button } from "@/components/ui/button";

import { useRouter } from "next/navigation";

import { useState } from "react";

import { ChatCompletionRequestMessage } from "openai";

// import { currentUser } from "@clerk/nextjs";

import Empty from "@/components/empty";

import Loader from "@/components/loader";

import { cn } from "@/lib/utils";

import UserAvatar from "@/components/user-avatar";

import BotAvatar from "@/components/bot-avatar";
import ReactMarkdown from 'react-markDown';


export default function CodePage() {
  const router = useRouter();
  const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
  const form = useForm<z.infer<typeof fromSchema>>({
    resolver: zodResolver(fromSchema),
    defaultValues: {
      prompt: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof fromSchema>) => {
    try {
      const userMessage: ChatCompletionRequestMessage = {
        role: "user",
        content: values.prompt,
      };
      const newMessages = [...messages, userMessage];
      const response = await axios.post("/api/code", {
        messages: newMessages,
      });
      setMessages((current) => [...current, userMessage, response.data]);
      form.reset();
    } catch (error: any) {
      console.log(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <div>
      <Heading
        title="Code Generation"
        description="Generate code using descriptive text"
        icon={Code}
        iconColor="text-green-700"
        bgColor="bg-green-700/10"
      />

      <div className="px-4 lg:px-8 ">
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="rounded-lg border w-full p-4 px-3 md:px-6 focus-within:shadow-sm grid grid-cols-12 gap-2">
              <FormField
                name="prompt"
                render={({ field }) => (
                  <FormItem className="col-span-12 lg:col-span-10">
                    <FormControl className="m-0 p-0">
                      <Input
                        className="px-2 focus-visible:ring-2 ring-1 border-none ring-gray-100 focus-visible:ring-green-300 ring-offset-2 hover:ring-offset-green-200 font-mono text-gray-700"
                        disabled={isLoading}
                        placeholder="Simple toggle button using react hooks."
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button className="col-span-12 lg:col-span-2 sm:mt-5 lg:p-0 lg:m-0 bg-green-500 hover:bg-green-700">
                Make It Rain
              </Button>
            </form>
          </Form>
        </div>
        <div className="space-y-4 mt-4">
          {isLoading && (
            <div className="p-8 rounded-lg w-full flex items-center justify-center bg-muted ">
              <Loader />
            </div>
          )}
          {messages.length === 0 && !isLoading && (
            <Empty label="No conversation started." />
          )}
          <div className="flex flex-col-reverse gap-y-4">
            {messages.map((message) => (
              <div
              key={message.content}
              className={cn(
                'p-8 w-full flex items-start gap-x-4 rounded-lg sm:flex sm:flex-col ',
                message.role === "user" ? 'bg-white border border-gray-500/20 ' : ' bg-muted  '
                )}
              >
                <div >

                {message.role === 'user' ? <UserAvatar/> : <BotAvatar/>}
                </div>
                <ReactMarkdown components={{
                  pre: ({ node, ...props }) => (
                    <div className="overflow-auto w-full my-2 bg-black/10 p-2 rounded-lg">
                      <pre {...props} />
                    </div>
                  ),
                  code: ({ node, ...props }) => (
                    <code className="bg-black/10 rounded-lg p-1" {...props} />
                  )
                }} className="text-sm overflow-hidden leading-7 sm:w-full">
                  {message.content || ""}
                </ReactMarkdown>

              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
