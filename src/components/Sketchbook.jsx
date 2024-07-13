import React, { useRef, useState } from "react";
import HTMLFlipBook from "react-pageflip";


const romanticQuotes = [
  {
    text: "Halooo Cantik ❤️",
    img: "assets/img/img1.png",
  },
  {
    text: "Aku cuma mau bilang kalo kamu itu lucu, dan aku suka itu",
    img: "assets/img/img2.png",
  },
  {
    text: "Kamu tahu gak, setiap kali kamu tersenyum, dunia seakan berhenti sejenak untuk menikmati keindahannya.",
    img: "assets/img/img3.png",
  },
  {
    text: "Ada banyak hal yang bisa membuatku bahagia, tapi hanya satu yang benar-benar membuatku merasa sempurna, yaitu kamu.",
    img: "assets/img/img6.png",
  },
  {
    text: "Aku suka bukan karena siapa dirimu, tapi karena siapa aku saat bersamamu",
    img: "assets/img/img4.png",
  },
  {
    text: "Jangan pergi ya cantik 😊",
    img: "assets/img/img5.png",
  },

  // Tambahkan lebih banyak kata-kata romantis dan foto
];

function Sketchbook() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const handlePlayAudio = () => {
    if (audioRef.current && !isPlaying) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="bg-white p-6 rounded-lg shadow-md" onClick={handlePlayAudio}>
      <h1 className="text-3xl font-bold mb-4 text-center">
        For <span className="text-pink-400">You</span>{" "}
      </h1>
      <HTMLFlipBook width={300} height={400} className="flipbook">
        {romanticQuotes.map((quote, index) => (
          <div key={index} className="page bg-pink-100 p-4 rounded-lg">
            <img
              src={quote.img}
              alt="Romantic"
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <p className="text-lg font-semibold text-gray-800">{quote.text}</p>
          </div>
        ))}
      </HTMLFlipBook>
      <audio ref={audioRef} src="./assets/audio/Bersamamu.mp3" autoPlay loop />
    </div>
  );
}

export default Sketchbook;
