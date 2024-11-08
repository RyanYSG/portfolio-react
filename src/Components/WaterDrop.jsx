import anime from 'animejs';

const WaterDrop = () => {
  return (
    <div className="z-0 absolute w-[75vw] xl:w-[25vw] xl:right-[35%] right-[5%] overflow-hidden  place-content-center">
      <DotGrid />
    </div>
  );
};

const GRID_WIDTH = 30;
const GRID_HEIGHT = 20;

const DotGrid = () => {
  const handleDotClick = (e) => {
    anime({
      targets: '.dot-point',
      scale: [
        { value: 1.35, easing: 'easeOutSine', duration: 250 },
        { value: 1, easing: 'easeInOutQuad', duration: 500 },
      ],
      translateY: [
        { value: -30, easing: 'easeOutSine', duration: 250 },
        { value: 0, easing: 'easeInOutQuad', duration: 500 },
      ],
      opacity: [
        { value: 1, easing: 'easeOutSine', duration: 250 },
        { value: 0.5, easing: 'easeInOutQuad', duration: 500 },
      ],
      delay: anime.stagger(100, {
        grid: [GRID_WIDTH, GRID_HEIGHT],
        from: e.target.dataset.index,
      }),
    });
  };

  const dots = [];
  let index = 0;

  for (let i = 0; i < GRID_WIDTH; i++) {
    for (let j = 0; j < GRID_HEIGHT; j++) {
      dots.push(
        <div
          onClick={handleDotClick}
          className="group cursor-crosshair rounded-full p-2 transition-colors hover:bg-pink-500"
          data-index={index}
          key={`${i}-${j}`}
        >
          <div
            className="dot-point h-2 w-2 rounded-full bg-gradient-to-b from-pink-700 to-pink-400 opacity-50 group-hover:from-indigo-600 group-hover:to-white"
            data-index={index}
          />
        </div>
      );
      index++;
    }
  }

  return (
    <div
      style={{ gridTemplateColumns: `repeat(${GRID_WIDTH}, 1fr)` }}
      className="grid w-fit"
    >
      {dots}
    </div>
  );
};

export default WaterDrop;
