import {
  Drawer,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import React from "react";
import { Info } from "lucide-react";
import AboutUsTabs from "./AboutUsTabs";
import {useTranslations} from 'next-intl';

function AboutUsDrawer() {
  const t = useTranslations('AboutUs');
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <button>
          <Info size={18} color="#271832" />
        </button>
      </DrawerTrigger>
      <DrawerContent className="px-3 w-full">
        <div className="flex flex-col py-10">
          <DrawerTitle className="text-center pb-5">{t('drawer.title')}</DrawerTitle>
          <AboutUsTabs />
        </div>
      </DrawerContent>
    </Drawer>
  );
}

export default AboutUsDrawer;
