import Templates from '@/app/(data)/Templates';
import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';

export interface TEMPLATE {
  name: string;
  desc: string;
  category: string;
  icon: string;    
  aiPrompt: string;
  slug: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

interface TemplateProps {
  userSearchInput: string;
}

function Template({ userSearchInput }: TemplateProps) {
  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter(item =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates);
    }
  }, [userSearchInput]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={item.slug} {...item} />
        // Use a unique key, in this case `item.slug` assuming it's unique
      ))}
    </div>
  );
}

export default Template;
