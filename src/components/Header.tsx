export const Header = () => {
  return (
    <header className="mb-16 max-w-3xl min-[768px]:mb-24">
      <h1 className="mb-4 text-3xl min-[768px]:mb-6 min-[768px]:text-4xl min-[1024px]:text-5xl">
        Katarina Bluu
      </h1>
      <div className="flex flex-col text-balance text-sm font-light text-gray-600 min-[768px]:text-base">
        <span>
          <span
            className="font-bold"
          >
            Карина
          </span>{' '}
          <span className="font-mono">(кор. 카리나, яп. カリナ)</span> - южнокорейская певица, рэпер и танцор
          компании <span className="italic">SM Entertainment</span>. Она является лидером женской группы <span className="italic">aespa</span> и
          участницей проектной женской группы <span className="italic">GOT the beat</span>.
        </span>
      </div>
    </header>
  );
};
