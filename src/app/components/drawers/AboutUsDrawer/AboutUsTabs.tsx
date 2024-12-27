import { ABOUT_US } from "@/app/constants/about";
import { Tabs, TabsTrigger, TabsContent, TabsList } from "@/components/ui/tabs";
import React from "react";

function AboutUsTabs() {
  return (
    <Tabs defaultValue={ABOUT_US[0].title}>
      <TabsList className="w-full">
        {ABOUT_US.map((item) => (
          <TabsTrigger value={item.title} key={item.title}>
            {item.title}
          </TabsTrigger>
        ))}
      </TabsList>
      {ABOUT_US.map((item) => (
        <TabsContent value={item.title}>{item.content}</TabsContent>
      ))}
    </Tabs>
  );
}

export default AboutUsTabs;
