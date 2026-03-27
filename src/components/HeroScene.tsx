import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import * as THREE from "three";

function FloatingShape({
  geo,
  position,
  color,
  speed,
}: {
  geo: THREE.BufferGeometry;
  position: [number, number, number];
  color: string;
  speed: number;
}) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    ref.current.rotation.x += delta * speed * 0.5;
    ref.current.rotation.y += delta * speed;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={1.5}>
      <mesh ref={ref} position={position} geometry={geo}>
        <meshStandardMaterial
          color={color}
          wireframe
          transparent
          opacity={0.3}
          emissive={color}
          emissiveIntensity={0.15}
        />
      </mesh>
    </Float>
  );
}

function GlowRing() {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame((_, delta) => {
    ref.current.rotation.z += delta * 0.1;
  });
  return (
    <mesh ref={ref} position={[0, 0, -3]}>
      <torusGeometry args={[3.5, 0.02, 8, 64]} />
      <meshStandardMaterial
        color="#2dd4bf"
        emissive="#2dd4bf"
        emissiveIntensity={0.8}
        transparent
        opacity={0.2}
      />
    </mesh>
  );
}

function CameraRig() {
  const mouse = useRef([0, 0]);

  useMemo(() => {
    if (typeof window === "undefined") return;
    const handler = (e: MouseEvent) => {
      mouse.current[0] = (e.clientX / window.innerWidth - 0.5) * 2;
      mouse.current[1] = -(e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  useFrame(({ camera }) => {
    camera.position.x += (mouse.current[0] * 0.5 - camera.position.x) * 0.02;
    camera.position.y += (mouse.current[1] * 0.3 - camera.position.y) * 0.02;
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function Scene() {
  const geos = useMemo(
    () => ({
      ico: new THREE.IcosahedronGeometry(1, 0),
      torus: new THREE.TorusGeometry(0.8, 0.3, 8, 16),
      octa: new THREE.OctahedronGeometry(0.9, 0),
      dodeca: new THREE.DodecahedronGeometry(0.8, 0),
    }),
    []
  );

  return (
    <>
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.8} color="#2dd4bf" />
      <pointLight position={[-5, -3, 3]} intensity={0.4} color="#a855f7" />

      <Stars radius={50} depth={60} count={1500} factor={3} saturation={0} fade speed={0.5} />

      <FloatingShape geo={geos.ico} position={[-3.5, 1.5, -1]} color="#2dd4bf" speed={0.3} />
      <FloatingShape geo={geos.torus} position={[3.5, -1, -2]} color="#a855f7" speed={0.2} />
      <FloatingShape geo={geos.octa} position={[-2, -2, -1.5]} color="#2dd4bf" speed={0.4} />
      <FloatingShape geo={geos.dodeca} position={[2.5, 2, -2.5]} color="#a855f7" speed={0.25} />

      <GlowRing />
      <CameraRig />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0" style={{ zIndex: 1 }}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
