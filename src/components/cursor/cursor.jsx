import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import './cursor.css';

export default function Cursor({ stickyElement }) {

    const cursorSize = 64;
    const mouse = {
        x: useMotionValue(0),
        y: useMotionValue(0)
    }



    const smoothOptions = { damping: 40, stiffness: 500, mass: 0.5 }
    const smoothMouse = {
        x: useSpring(mouse.x, smoothOptions),
        y: useSpring(mouse.y, smoothOptions)
    }



    const manageMouseMove = e => {
        const { clientX, clientY } = e;
        mouse.x.set(clientX - cursorSize / 2);
        mouse.y.set(clientY - cursorSize / 2);
    }



    useEffect(() => {
        window.addEventListener("mousemove", manageMouseMove);
        return () => {
            window.removeEventListener("mousemove", manageMouseMove)
        }
    }, [])

    return (
        <div>
            <motion.div className='cursor'
                style={{ left: smoothMouse.x, top: smoothMouse.y }}
                animate={{ width: cursorSize, height: cursorSize }}>
            </motion.div>
        </div>
    )
}