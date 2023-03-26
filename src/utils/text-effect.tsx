import { useEffect, useRef } from "react";
import gsap, { TimelineMax } from "gsap";
import { TextPlugin, EasePack } from "gsap/all";

gsap.registerPlugin(TextPlugin, EasePack);

interface Props {
  text: string;
}

const MachineGun: React.FC<Props> = ({ text }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current!;
    const words = text.split(" ");
    const wordCount = words.length;
    const _sentenceEndExp = /(\.|\?|!)$/g;
    let time = 0;

    const tl = gsap.timeline({ delay: 0.6, repeat: 0, repeatDelay: 4 });

    for (let i = 0; i < wordCount; i++) {
      const word = words[i];
      const isSentenceEnd = _sentenceEndExp.test(word);
      const element = document.createElement("h3");
      element.textContent = word;
      container.appendChild(element);
      let duration = Math.max(0.5, word.length * 0.08);
      if (isSentenceEnd) {
        duration += 0.6;
      }
      gsap.set(element, { autoAlpha: 0, scale: 0, z: 0.01 });
      tl.to(element, duration, { scale: 1.2, ease: "slow(0.25, 0.9)" }, time)
        .to(element, duration, {
          autoAlpha: 1,
          ease: "slow(0.25, 0.9, true)",
        }, time);
      time += duration - 0.05;
      if (isSentenceEnd) {
        time += 0.6;
      }
    }

    return () => {
      tl.kill();
      container.innerHTML = "";
    };
  }, [text]);

  return <div ref={containerRef} />;
};

export default MachineGun;
