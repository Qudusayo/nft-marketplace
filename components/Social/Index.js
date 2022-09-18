import { SiDiscord, SiTwitter, SiInstagram, SiTarget } from "react-icons/si";

export default function Social() {
  return (
    <div className="flex justify-around align-middle bg-[#0404050A] rounded-2xl w-11/12 m-auto py-12 px-4 flex-col">
      <Icon Icon={SiTwitter} name="Twitter" tag="@meta_angels" className="mb-14" />
      <Icon Icon={SiInstagram} name="Instagram" tag="@metaangelsnft" className="mb-14" />
      <Icon Icon={SiDiscord} name="Discord" tag="metaangels" className="mb-3" />
    </div>
  );
}

function Icon({ Icon, name, tag, className }) {
  return (
    <div className={`flex align-middle ml-10 ${className}`}>
      <Icon size={55} fill="rgb(8, 8, 154)" />
      <div className="ml-5">
        <span className="block font-medium text-sm text-[#626262] mb-1">{name}</span>
        <span className="block font-semibold text-lg">{tag}</span>
      </div>
    </div>
  );
}
