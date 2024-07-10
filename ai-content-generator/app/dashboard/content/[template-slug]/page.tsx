"use client";
import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/Template";
import Templates from "@/app/(data)/Templates";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface PROPS {
  params: {
    "template-slug": string;
  };
}

const ContentCreation: React.FC<PROPS> = (props) => {
  const selectedTemplate: TEMPLATE | undefined = Templates?.find((item) => {
    return item.slug === props.params["template-slug"];
  });
  const GenratingContent = (formData: any) => {};

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
        />
        <div className="col-span-2">
          <OutputSection />
        </div>
      </div>
    </div>
  );
};

export default ContentCreation;
