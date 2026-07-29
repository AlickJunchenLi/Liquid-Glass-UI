import {
  CSSProperties, 
  PointerEvent as ReactPointerEvent, 
  useEffect, 
  useRef, 
  useState, 
} from "react";

import "./liquid-selector.css";

type SelectorTarget = {
  x: number; 
  y: number;
  width: number;
  height: number;
};

const items = ["Explore", "Design", "Build", "Launch"];

export function LiquidSelectorDemo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<Array<HTMLButtonElement | null>>([]);

  const targetRef = useRef<SelectorTarget>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const currentRef = useRef<SelectorTarget>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });

  const [activeIndex, setActiveIndex] = useState(0);
  const [selectorStyle, setSelectorStyle] = useState<CSSProperties>({
    opacity: 0,
  });

  function measureItem(index: number, immediate = false) {
    const container = containerRef.current;
    const item = itemRefs.current[index];

    const targetRef = useRef<SelectorTarget>({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });

    const currentRef = useRef<SelectorTarget>({
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    });

    
  }
}