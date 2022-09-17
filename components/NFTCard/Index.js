export default function NFTCard({ img, name, price, bid }) {
  return (
    <div className="w-[17.5rem] bg-tetiaryLight cursor-pointer rounded-lg p-2">
      <div>
        <img src={img} alt={name} className="rounded-lg" />
      </div>
      <h2 className="my-4 font-semibold font-Inter ml-3">{name}</h2>
      <div className="bg-tetiaryLight flex p-3 rounded-lg">
        <div className="flex-1 font-medium text-sm">
          <span className="text-primary block">Mirrored</span>
          <span>{price}</span>
        </div>
        <div className="flex-1 font-medium text-sm">
          <span className="text-primary block">Highest bid</span>
          <span>{bid}</span>
        </div>
      </div>
    </div>
  );
}
