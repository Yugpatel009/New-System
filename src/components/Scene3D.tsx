import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Float, Environment } from '@react-three/drei';
import * as THREE from 'three';

interface Scene3DProps {
  activeSection: string;
}

const RotatingCube = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.2;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={[2, 0, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#00ffff" 
          wireframe 
          transparent 
          opacity={0.6}
        />
      </mesh>
    </Float>
  );
};

const FloatingRings = () => {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.z = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={groupRef} position={[-2, 0, 0]}>
      {[...Array(3)].map((_, i) => (
        <mesh key={i} rotation={[0, 0, (i * Math.PI) / 3]}>
          <torusGeometry args={[1 + i * 0.3, 0.05, 16, 100]} />
          <meshStandardMaterial 
            color={i === 0 ? "#00ffff" : i === 1 ? "#8b5cf6" : "#ec4899"} 
            transparent 
            opacity={0.7}
          />
        </mesh>
      ))}
    </group>
  );
};

const ParticleField = () => {
  const pointsRef = useRef<THREE.Points>(null);
  const particleCount = 1000;

  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);

  for (let i = 0; i < particleCount; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 20;

    const color = new THREE.Color();
    color.setHSL(Math.random() * 0.2 + 0.5, 1, 0.5);
    colors[i * 3] = color.r;
    colors[i * 3 + 1] = color.g;
    colors[i * 3 + 2] = color.b;
  }

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={particleCount}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          array={colors}
          count={particleCount}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial 
        size={0.05} 
        vertexColors 
        transparent 
        opacity={0.6}
        sizeAttenuation={true}
      />
    </points>
  );
};

const CameraController = ({ activeSection }: { activeSection: string }) => {
  const { camera } = useThree();

  useEffect(() => {
    const positions = {
      home: [0, 0, 8],
      about: [3, 2, 6],
      projects: [-3, 1, 7],
      skills: [2, -2, 5],
      contact: [0, 3, 6]
    };

    const targetPosition = positions[activeSection as keyof typeof positions] || positions.home;
    
    // Smooth camera transition
    const currentPosition = camera.position.clone();
    const targetPos = new THREE.Vector3(...targetPosition);
    
    const animate = () => {
      currentPosition.lerp(targetPos, 0.05);
      camera.position.copy(currentPosition);
      
      if (currentPosition.distanceTo(targetPos) > 0.1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [activeSection, camera]);

  return null;
};

const Scene3D: React.FC<Scene3DProps> = ({ activeSection }) => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
      >
        <CameraController activeSection={activeSection} />
        
        {/* Lighting */}
        <ambientLight intensity={0.3} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
        
        {/* 3D Objects */}
        <RotatingCube />
        <FloatingRings />
        <ParticleField />
        
        {/* Environment */}
        <Environment preset="night" />
        
        {/* Controls (disabled for automatic camera movement) */}
        <OrbitControls
          enabled={false}
          enablePan={false}
          enableZoom={false}
          enableRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default Scene3D;