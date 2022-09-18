export default function StatCard() {
  return (
    <div className="flex justify-around items-center bg-[#0404050A] rounded-2xl w-11/12 m-auto my-28 mt-0 mb-20 py-24 px-4 flex-row flex-wrap py-9">
      <StatData
        value="Stats"
        parentClassName="w-11/12 py-4"
        childClassName="font-bold text-[2rem] extra-loose"
      />
      <StatData
        title="From"
        value="0.055 ETH"
        parentClassName="w-1/2 py-2"
        childClassName="text-2xl"
      />
      <StatData
        title="Items"
        value="10.2K"
        parentClassName="w-1/2 py-2"
        childClassName="text-2xl"
      />
      <StatData
        title="Owners"
        value="5.1K"
        parentClassName="w-1/2 py-2"
        childClassName="text-2xl"
      />
      <StatData
        title="Volume"
        value="3K ETH"
        parentClassName="w-1/2 py-2"
        childClassName="text-2xl"
      />
    </div>
  );
}

function StatData({ title, value, parentClassName, childClassName }) {
  return (
    <div className={parentClassName}>
      <span className={`text-primary block font-medium text-center`}>
        {title}
      </span>
      <span
        className={`block font-semibold text-4xl text-center leading-relaxed ${childClassName}`}
      >
        {value}
      </span>
    </div>
  );
}

// ${
//   !!!title && "text-5xl self-baseline mt-4"
// }
