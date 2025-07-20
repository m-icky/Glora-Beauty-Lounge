import { useRef, useState } from "react";
import softMusic from "../assets/soft_music.mp3";

const BackgroundMusicWithPermission = () => {
  const audioRef = useRef(null);
  const [showPrompt, setShowPrompt] = useState(true);

  const handleEnableSound = () => {
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // optional: control volume
      audioRef.current.play().then(() => {
        setShowPrompt(false);
      }).catch((err) => {
        console.error("Autoplay failed:", err);
      });
    }
  };

  return (
    <>
      {showPrompt && (
        <div
          style={{
            position: "fixed",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            backgroundColor: "#fff5c4",
            border: "2px solid #ffd700",
            padding: "1.5rem 2rem",
            borderRadius: "1rem",
            boxShadow: "0 0 20px #FFD164",
            zIndex: 9999,
            textAlign: "center",
          }}
        >
          <p style={{ fontWeight: "bold", marginBottom: "1rem", color: "#FFD164" }}>Enable Pleasant Music?</p>
          <button
            onClick={handleEnableSound}
            style={{
              padding: "0.5rem 1.2rem",
              backgroundColor: "#FFD164",
              border: "none",
              borderRadius: "0.5rem",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "0.3s ease",
              boxShadow: "0 0 10px #FFD164",
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#222222")}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#FFD164")}
          >
            Enable Sound
          </button>
        </div>
      )}

      <audio ref={audioRef} src={softMusic} loop />
    </>
  );
};

export default BackgroundMusicWithPermission;
