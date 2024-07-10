"use client";
import React, { useState } from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/Template";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { chatSession } from "@/utils/AiModel";
import { db } from "@/utils/db";
import { AiModel } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const ContentCreation: React.FC<PROPS> = (props) => {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => {
    return item.slug === props.params["template-slug"];
  });
  const [loading , setLoading] = useState(false);
  const[aiOutput,setAiOutput]=useState<string>('');
  const {user}=useUser()
  const GenratingContent = async(formData: any) => {
    setLoading(true)
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const FinalAiPrompt = JSON.stringify(formData)+","+selectedPrompt;
    const result = await chatSession.sendMessage(FinalAiPrompt);
    console.log(result.response.text());
    setAiOutput(result?.response.text());
    setLoading(false);
    await saveDb(formData,selectedTemplate?.slug,result?.response.text())
  };
  const saveDb =async(formData:any,slug:any,aiOutput:string)=>{
    const result = await db.insert(AiModel).values({
      formData:formData,
      templateSlug:slug,
      aiResponse:aiOutput,
      createdBy:user?.primaryEmailAddress?.emailAddress,
      createdAt:moment().format('DD/MM/yyyy')
    })
  }

  if (!selectedTemplate) {
    console.warn(
      `Template with slug '${props.params["template-slug"]}' not found.`
    );
  }

  return (
    <div className="p-10">
      {" "}
      <Link href={"/dashboard"} >
        <Button>
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-5">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={(v: any) => GenratingContent(v)}
          loading = {loading}
        />
        <div className="col-span-2">
          <OutputSection aiOutput = {aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
