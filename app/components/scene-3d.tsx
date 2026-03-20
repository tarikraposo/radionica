"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  useGLTF,
  Environment,
  Float,
  PresentationControls,
} from "@react-three/drei";
import { useScroll, useTransform, motion } from "framer-motion";
import * as THREE from "three";

function Model() {
  const { scene } = useGLTF("/models/mesa.glb");
  const meshRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-0.2, 0.2]}
        azimuth={[-0.5, 0.5]}
        config={{ mass: 2, tension: 400 }}
        snap={{ mass: 4, tension: 300 }}
      >
        <group ref={meshRef} scale={1.2} rotation={[0.4, 0, 0]}>
          <primitive object={scene} />
        </group>
      </PresentationControls>
    </Float>
  );
}

function FallbackGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x =
        Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.6}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.3, 128, 32]} />
        <meshStandardMaterial
          color="#c9a227"
          metalness={0.9}
          roughness={0.1}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 10, 5]} intensity={1} color="#ffffff" />
      <directionalLight
        position={[-10, -10, -5]}
        intensity={0.5}
        color="#a8c5e8"
      />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={1}
        color="#fff5e6"
      />
      <Environment preset="studio" />
      <Suspense fallback={<FallbackGeometry />}>
        <Model />
      </Suspense>
    </>
  );
}

export function Scene3D() {
  const { scrollYProgress } = useScroll();

  // Ajuste de movimento vertical: começa centralizado e sobe levemente
  const y = useTransform(scrollYProgress, [0, 0.4], ["0%", "-10%"]);

  // Escala: mantém presença visual forte nas duas primeiras seções
  const scale = useTransform(scrollYProgress, [0, 0.3, 0.6], [1.1, 1, 0.8]);

  // Opacidade: visível na Section 1 e 2, começa a sumir na Section 3
  const opacity = useTransform(scrollYProgress, [0, 0.5, 0.8], [1, 1, 0]);

  return (
    <motion.div
      className="fixed inset-0 z-10 pointer-events-none"
      style={{ y, scale, opacity }}
    >
      <div className="absolute inset-0 pointer-events-auto">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 45 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: "high-performance",
          }}
          style={{ background: "transparent" }}
        >
          <Scene />
        </Canvas>
      </div>
    </motion.div>
  );
}
