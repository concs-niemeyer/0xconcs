import React, { useEffect, useRef } from 'react';

const LETTERS = [
  'a','b','c','d','e','f','g','h','i','j','k','l','m',
  'n','o','p','q','r','s','t','u','v','w','x','y','z',
  '0','1','2','3','4','5','6','7','8','9','$','+','-',
  '*','/','=','%','"','\'','#','&','_','(',')',',','.',
  ';',':','?','!','\\','|','{','}','<','>','[',']','^','~'
];

const SETTINGS = {
  COL_WIDTH: 20,
  COL_HEIGHT: 25,
  VELOCITY_PARAMS: { min: 4, max: 8 },
  CODE_LENGTH_PARAMS: { min: 20, max: 40 }
};

interface MatrixCode {
  open: boolean;
  position: { x: number; y: number };
  strength: number;
  velocity?: number;
  canvas?: HTMLCanvasElement;
}

const randomFromInterval = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const MatrixRain: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesCanvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const linesCanvas = linesCanvasRef.current;
    if (!canvas || !linesCanvas) return;

    const ctx = canvas.getContext('2d');
    const ctx2 = linesCanvas.getContext('2d');
    if (!ctx || !ctx2) return;

    let width = window.innerWidth;
    let height = window.innerHeight;

    canvas.width = width;
    canvas.height = height;
    linesCanvas.width = width;
    linesCanvas.height = height;

    const columns = Math.ceil(width / SETTINGS.COL_WIDTH);
    const codes: (MatrixCode | string)[][] = Array(columns)
      .fill(null)
      .map(() => [{
        open: true,
        position: { x: 0, y: 0 },
        strength: 0
      }]);

    const codesCounter = { current: 0 };

    const createScanLines = () => {
      ctx2.clearRect(0, 0, width, height);
      ctx2.beginPath();
      ctx2.lineWidth = 1;
      ctx2.strokeStyle = 'rgba(0, 0, 0, 0.7)';
      for (let y = 0; y < height; y += 5) {
        ctx2.moveTo(0, y);
        ctx2.lineTo(width, y);
      }

      ctx2.lineWidth = 0.15;
      ctx2.strokeStyle = 'rgba(255, 255, 255, 0.7)';
      for (let y = 1; y < height; y += 5) {
        ctx2.moveTo(0, y);
        ctx2.lineTo(width, y);
      }

      ctx2.stroke();
    };

    const createCanvii = (codes: (MatrixCode | string)[][], i: number) => {
      const codeLen = codes[i].length - 1;
      const canvHeight = codeLen * SETTINGS.COL_HEIGHT;
      const { strength = 1 } = codes[i][0] as MatrixCode;

      const newCanv = document.createElement('canvas');
      const newCtx = newCanv.getContext('2d');
      if (!newCtx) return;

      newCanv.width = SETTINGS.COL_WIDTH;
      newCanv.height = canvHeight;

      for (let j = 1; j < codeLen; j++) {
        const char = codes[i][j] as string;
        newCtx.font = '30px matrix-code';
        newCtx.globalCompositeOperation = 'source-over';

        if (j < 5) {
          newCtx.shadowColor = 'hsl(104, 79%, 74%)';
          newCtx.shadowBlur = 10;
          newCtx.fillStyle = `hsla(104, 79%, ${100 - j * 5}%, ${strength})`;
        } else if (j > codeLen - 4) {
          const fadeStrength = 1 - j / codeLen;
          newCtx.shadowBlur = 0;
          newCtx.fillStyle = `hsla(104, 79%, 74%, ${fadeStrength + 0.3})`;
        } else {
          newCtx.shadowBlur = 0;
          newCtx.fillStyle = `hsla(104, 79%, 74%, ${strength})`;
        }

        newCtx.fillText(char, 0, canvHeight - j * SETTINGS.COL_HEIGHT);
      }

      (codes[i][0] as MatrixCode).canvas = newCanv;
    };

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = 'source-over';

      for (let i = 0; i < columns; i++) {
        const code = codes[i][0] as MatrixCode;
        if (!code.canvas) continue;

        const y = code.position.y - code.canvas.height;
        ctx.drawImage(code.canvas, code.position.x, y, SETTINGS.COL_WIDTH, code.canvas.height);

        code.position.y += code.velocity || 0;

        if (y >= height) {
          code.position.y = 0;
        }
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    const assignColumn = (): number | false => {
      const col = randomFromInterval(0, columns - 1);
      if ((codes[col][0] as MatrixCode).open) {
        (codes[col][0] as MatrixCode).open = false;
        return col;
      }
      return false;
    };

    const createCode = () => {
      if (codesCounter.current >= columns) return;

      const col = assignColumn();
      if (col !== false) {
        const length = randomFromInterval(
          SETTINGS.CODE_LENGTH_PARAMS.min,
          SETTINGS.CODE_LENGTH_PARAMS.max
        );
        const velocity = Math.random() * (SETTINGS.VELOCITY_PARAMS.max - SETTINGS.VELOCITY_PARAMS.min) + SETTINGS.VELOCITY_PARAMS.min;

        const strength = velocity / SETTINGS.VELOCITY_PARAMS.max;

        (codes[col][0] as MatrixCode).position = {
          x: col * SETTINGS.COL_WIDTH,
          y: 0
        };
        (codes[col][0] as MatrixCode).velocity = velocity;
        (codes[col][0] as MatrixCode).strength = strength;

        for (let i = 1; i <= length; i++) {
          codes[col][i] = LETTERS[randomFromInterval(0, LETTERS.length - 1)];
        }

        createCanvii(codes, col);
        codesCounter.current++;
      }

      timeoutRef.current = setTimeout(createCode, randomFromInterval(0, 100));
    };

    createScanLines();
    createCode();
    draw();

    const handleResize = () => window.location.reload(); // simples e eficaz
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none" role="presentation" aria-hidden="true">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <canvas ref={linesCanvasRef} className="absolute inset-0 z-10" />
    </div>
  );
};

export default MatrixRain;
