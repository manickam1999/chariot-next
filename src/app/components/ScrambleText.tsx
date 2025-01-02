import React, { useEffect, useRef } from "react";

interface QueueItem {
  from: string;
  to: string;
  start: number;
  end: number;
  char?: string;
}

interface TextScrambleProps {
  phrases: string[];
  className: string;
}

class TextScramble {
  private el: HTMLDivElement;
  private chars: string;
  private frameRequest: number | null;
  private frame: number;
  private queue: QueueItem[];
  private resolve: () => void;

  constructor(el: HTMLDivElement) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.frameRequest = null;
    this.frame = 0;
    this.queue = [];
    this.resolve = () => {};
    this.update = this.update.bind(this);
  }

  setText(newText: string): Promise<void> {
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise<void>((resolve) => (this.resolve = resolve));

    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 40);
      const end = start + Math.floor(Math.random() * 40);
      this.queue.push({ from, to, start, end });
    }

    cancelAnimationFrame(this.frameRequest!);
    this.frame = 0;
    this.update();
    return promise;
  }

  update(): void {
    let output = "";
    let complete = 0;

    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];

      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }

    this.el.innerHTML = output;

    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar(): string {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

const TextScrambleComponent: React.FC<TextScrambleProps> = ({
  phrases,
  className,
}) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (el) {
      const fx = new TextScramble(el);
      let counter = 0;

      const next = (): void => {
        const speed = 30; // Adjust the speed (higher value means slower)
        const delayOnLastWord = 700; // Set delay on the last word in milliseconds

        if (counter === phrases.length - 1) {
          setTimeout(() => {
            fx.setText(phrases[counter]);
          }, delayOnLastWord);
        } else {
          fx.setText(phrases[counter]).then(() => {
            setTimeout(() => {
              counter = (counter + 1) % phrases.length;
              next();
            }, speed);
          });
        }
      };

      next();
    }
  }, [phrases]);

  return <div ref={textRef} className={className}></div>;
};

export default TextScrambleComponent;
