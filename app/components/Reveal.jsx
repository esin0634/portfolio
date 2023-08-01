// import { useEffect, useRef } from "react";
// import { motion, useInView, useAnimation } from "framer-motion";

// interface Props {
//     children: JSX.Element;
//     width?: "fit content" |"100%"
// }


// export const Reveal = ({ children, width="fit-content"}: Props) => {
//     return(
//         <div style={{position: "relative", width, overflow:"hidden"}}>
//             <div>{children}</div>
//         </div>
//     )
// }
"use client"
import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

export const Reveal = ({ children, width = "fit-content" }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)

    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView){
            mainControls.start("visible")
            slideControls.start("visible")
        }
          // eslint-disable-next-line react-hooks/exhaustive-deps

    },[isInView])

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
        <motion.div
            variants={{
                hidden : {opacity:0, y:75},
                visible : {opacity:1, y:0}
            }}
            initial="hidden"
            animate={mainControls}
            transition={{duration:0.5, delay: 0.5}}
        >
                {children}
        </motion.div>
        <motion.div
            variants={{
                hidden: {left: "0"},
                visible: {left: "100%" }
            }}
            initial="hidden"
            animate={slideControls}
            transition={{duration:0.5, ease:"easeIn"}}
            style={{
                position:"absolute",
                top:4,
                bottom:4,
                left:0,
                right:0,
                background: "rgba(168, 2, 245, 1)",
                zIndex: 20,
            }}

        />
        
    </div>
  );
};


