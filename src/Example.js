import * as React from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

export const Example = () => {
  return (
    <div className="example-container">
      {/* Objeto Arrastável no Lado Esquerdo */}
      <DraggableObject x={-250} y={0} dragConstraints={{ top: -300, bottom: 300, left: -300, right: -200 }} />

      {/* Objeto Arrastável no Meio */}
      <DraggableObject x={0} y={0} dragConstraints={{ top: -300, bottom: 300, left: -50, right: 50 }} />

      {/* Objeto Arrastável no Lado Direito */}
      <DraggableObject x={250} y={0} dragConstraints={{ top: -300, bottom: 300, left: 200, right: 200 }} />
    </div>
  );
};

const DraggableObject = ({ x, y, dragConstraints }) => {
  const xValue = useMotionValue(x);
  const yValue = useMotionValue(y);

  const yInput = [-100, 0, 100];
  const background = useTransform(yValue, yInput, [
    "linear-gradient(180deg, #ff008c 0%, rgb(211, 9, 225) 100%)",
    "linear-gradient(180deg, #7700ff 0%, rgb(68, 0, 255) 100%)",
    "linear-gradient(180deg, rgb(230, 255, 0) 0%, rgb(3, 209, 0) 100%)"
  ]);

  const color = useTransform(yValue, yInput, [
    "rgb(211, 9, 225)",
    "rgb(68, 0, 255)",
    "rgb(3, 209, 0)"
  ]);

  const tickPath = useTransform(yValue, [10, 100], [0, 1]);
  const crossPathA = useTransform(yValue, [-0, -55], [0, 1]);
  const crossPathB = useTransform(yValue, [-0, -100], [0, 1]);

  return (
    <motion.div className="box" style={{ x: xValue, y: yValue }} drag dragConstraints={dragConstraints}>
      <svg className="progress-icon" viewBox="0 0 50 50">
        <motion.path
          fill="none"
          strokeWidth="5"
          stroke={color}
          d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
          style={{ translateX: 5, translateY: 5 }}
        />
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M14,26 L 22,33 L 35,16"
          strokeDasharray="0 1"
          style={{ pathLength: tickPath }}
        />
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M17,17 L33,33"
          strokeDasharray="0 1"
          style={{ pathLength: crossPathA }}
        />
        <motion.path
          fill="none"
          strokeWidth="2"
          stroke={color}
          d="M33,17 L17,33"
          strokeDasharray="0 1"
          style={{ pathLength: crossPathB }}
        />
      </svg>
    </motion.div>
  );
};
