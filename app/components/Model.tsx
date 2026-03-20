"use client";

import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import * as THREE from "three";

export default function Model() {
  const { scene } = useGLTF("/models/mesa.glb");
  const ref = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!ref.current) return;

    // rotação suave
    ref.current.rotation.y += 0.002;

    // leve movimento com scroll
    const scroll = window.scrollY;
    ref.current.position.y = -scroll * 0.001;
  });

  return <primitive ref={ref} object={scene} scale={1.5} />;
}
