import { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

const allSkills = [
  "C++", "Python", "JavaScript", "TypeScript", "SQL",
  "React.js", "Next.js", "Node.js", "Express.js", "MongoDB",
  "LangChain", "RAG", "Vector DBs", "Multi-agent",
  "Docker", "Git", "AWS", "Firebase",
  "DSA", "OOP", "DBMS", "Networks",
];

function SphereCloud() {
  const groupRef = useRef<THREE.Group>(null!);

  const points = useMemo(() => {
    return allSkills.map((skill, i) => {
      const phi = Math.acos(-1 + (2 * i) / allSkills.length);
      const theta = Math.sqrt(allSkills.length * Math.PI) * phi;
      const r = 2.2;
      return [
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi),
      ] as [number, number, number];
    });
  }, []);

  useFrame((_, delta) => {
    groupRef.current.rotation.y += delta * 0.15;
    groupRef.current.rotation.x += delta * 0.05;
  });

  return (
    <group ref={groupRef}>
      {/* Center wireframe */}
      <mesh>
        <icosahedronGeometry args={[0.4, 1]} />
        <meshStandardMaterial
          color="#2dd4bf"
          wireframe
          transparent
          opacity={0.3}
          emissive="#2dd4bf"
          emissiveIntensity={0.3}
        />
      </mesh>

      {/* Orbiting rings */}
      <mesh rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[2.2, 0.005, 8, 64]} />
        <meshStandardMaterial color="#2dd4bf" transparent opacity={0.15} emissive="#2dd4bf" emissiveIntensity={0.3} />
      </mesh>
      <mesh rotation={[0, Math.PI / 3, Math.PI / 6]}>
        <torusGeometry args={[2.2, 0.005, 8, 64]} />
        <meshStandardMaterial color="#a855f7" transparent opacity={0.1} emissive="#a855f7" emissiveIntensity={0.3} />
      </mesh>

      {/* Skill dots */}
      {points.map((pos, i) => (
        <mesh key={allSkills[i]} position={pos}>
          <sphereGeometry args={[0.06, 8, 8]} />
          <meshStandardMaterial
            color="#2dd4bf"
            emissive="#2dd4bf"
            emissiveIntensity={0.5}
          />
        </mesh>
      ))}
    </group>
  );
}

export default function SkillsSphere() {
  return (
    <div className="w-full h-[400px] sm:h-[500px]">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 50 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
        style={{ background: "transparent" }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={0.6} color="#2dd4bf" />
        <pointLight position={[-5, -5, 3]} intensity={0.3} color="#a855f7" />
        <Suspense fallback={null}>
          <SphereCloud />
        </Suspense>
      </Canvas>
    </div>
  );
}
