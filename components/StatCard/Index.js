export default function StatCard() {
  return (
    <div className="flex justify-around items-center bg-[#0404050A] rounded-2xl w-11/12 m-auto my-28 mt-0 py-24 px-4">
      <StatData value="Stats" />
      <StatData title="from" value="0.053 ETH" />
      <StatData title="items" value="10.2K" />
      <StatData title="Owners" value="5.1K" />
      <StatData title="Volume" value="3K ETH" />
    </div>
  );
}

function StatData({ title, value }) {
  return (
    <div>
      <span className="text-primary block font-semibold text-center">
        {title}
      </span>
      <span
        className={`block font-bold text-4xl ${
          !!!title && "text-5xl self-baseline mt-4"
        } text-center leading-relaxed`}
      >
        {value}
      </span>
    </div>
  );
}
