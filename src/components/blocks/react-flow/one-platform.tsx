import { ReactFlow, ReactFlowProvider } from "@xyflow/react";
import React from "react";
import MainHeadingWithSpan from "@/components/ui/headings/heading-with-span";

import "@xyflow/react/dist/style.css";

const initialNodes = [
  { id: "1", position: { x: 0, y: 0 }, data: { label: "1" } },
  { id: "2", position: { x: 0, y: 100 }, data: { label: "2" } },
];
const initialEdges = [{ id: "e1-2", source: "1", target: "2" }];

const OnePlatformData = () => {
  return (
    <ReactFlowProvider>
      <div className="px-[70px] mx-auto py-10">
        {/* Image Section */}
        <div className="w-full items-center justify-between z-[-1] ">
          <MainHeadingWithSpan firstText="" specialText="ff" lastText="" />
        </div>
        <section className="w-screen h-[80vh] border border-red-600 bg-white">
          <ReactFlow
            nodes={initialNodes}
            edges={initialEdges}
            panOnDrag={false}
            nodesDraggable={false}
            zoomOnDoubleClick={false}
            zoomOnPinch={false}
            zoomOnScroll={false}
          />
        </section>
        {/* Text Section */}
      </div>
    </ReactFlowProvider>
  );
};

export default OnePlatformData;
