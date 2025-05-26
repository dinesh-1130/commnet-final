import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function SkyParticles() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        fullScreen: { enable: false }, // Important: not full screen
        background: {
          color: "transparent"
        },
        particles: {
          number: {
            value: 30,
            density: {
              enable: true,
              area: 800
            }
          },
          color: {
            value: "#0284c7" // Tailwind sky-600
          },
          shape: {
            type: "circle"
          },
          opacity: {
            value: 0.5
          },
          size: {
            value: { min: 3, max: 6 }
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "bounce"
            }
          }
        },
        detectRetina: true
      }}
    />
  );
}
