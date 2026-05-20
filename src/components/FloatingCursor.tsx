"use client";

import { useEffect, useState } from "react";

export function FloatingCursor() {

  const [position,setPosition]=
  useState({
    x:0,
    y:0
  });

  const [active,setActive]=
  useState(false);

  useEffect(()=>{

    const moveCursor=
    (
      e:MouseEvent
    )=>{

      setPosition({

        x:e.clientX,

        y:e.clientY

      });

    };

    const down=()=>{

      setActive(true);

    };

    const up=()=>{

      setActive(false);

    };

    window.addEventListener(
      "mousemove",
      moveCursor
    );

    window.addEventListener(
      "mousedown",
      down
    );

    window.addEventListener(
      "mouseup",
      up
    );

    return()=>{

      window.removeEventListener(
        "mousemove",
        moveCursor
      );

      window.removeEventListener(
        "mousedown",
        down
      );

      window.removeEventListener(
        "mouseup",
        up
      );

    };

  },[]);

  return(

    <div

      className={`
      custom-cursor
      ${active?"active":""}
      `}

      style={{

        left:position.x,

        top:position.y

      }}

    />

  );

}
