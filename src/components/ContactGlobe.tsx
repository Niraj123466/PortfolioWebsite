import { useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function WireGlobe() {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.2;
  });

  return (
    <group ref={groupRef}>
      {/* Main wireframe sphere */}
      <mesh>
        <sphereGeometry args={[1.5, 24, 16]} />
        <meshStandardMaterial
          color="#2dd4bf"
          wireframe
          transparent
          opacity={0.15}
          emissive="#2dd4bf"
          emissiveIntensity={0.2}
        />
      </mesh>

      {/* Inner glow core */}
      <mesh>
        <sphereGeometry args={[0.3, 8, 8]} />
        <meshStandardMaterial
          color="#2dd4bf"
          emissive="#2dd4bf"
          emissiveIntensity={0.8}
          transparent
          opacity={0.6}
        />
      </mesh>

      {/* Latitude rings */}
      {[-0.8, 0, 0.8].map((y) => (
        <mesh key={y} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[Math.sqrt(1.5 * 1.5 - y * y), 0.008, 8, 48]} />
          <meshStandardMaterial
            color="#2dd4bf"
            transparent
            opacity={0.25}
            emissive="#2dd4bf"
            emissiveIntensity={0.4}
          />
        </mesh>
      ))}

      {/* Orbiting dot */}
      <mesh position={[1.5, 0, 0]}>
        <sphereGeometry args={[0.05, 8, 8]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#a855f7"
          emissiveIntensity={1}
        />
      </mesh>
    </group>
  );
}

export default function ContactGlobe() {
  return (
    <div className="w-full h-[280px] flex items-center justify-center">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.3} />
        <pointLight position={[3, 3, 3]} intensity={0.5} color="#2dd4bf" />
        <pointLight position={[-3, -2, 2]} intensity={0.3} color="#a855f7" />
        <Suspense fallback={null}>
          <WireGlobe />
        </Suspense>
      </Canvas>
    </div>
  );
}
