"use client";

import { motion } from "framer-motion";
import React from "react";

type ComponentType<P> = React.ComponentType<P>;

const transition = <P extends object>(OriginalComponent: ComponentType<P>) => {
  const TransitionComponent = (props: P) => {
    return (
      <>
        <OriginalComponent {...props} />
        <motion.div
          className="slide-in"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
      </>
    );
  };

  TransitionComponent.displayName = `WithTransition(${
    OriginalComponent.displayName || OriginalComponent.name || "Component"
  })`;

  return TransitionComponent;
};

export default transition;
