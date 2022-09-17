import { SiDiscord, SiTwitter, SiInstagram, SiTarget } from "react-icons/si";

export default function Social() {
  return (
    <div className="flex justify-around align-middle bg-[#0404050A] rounded w-11/12 m-auto py-24 px-4">
      <Icon Icon={SiTwitter} name="Twitter" tag="@meta_angels" />
      <Icon Icon={SiInstagram} name="Instagram" tag="@metaangelsnft" />
      <Icon Icon={SiDiscord} name="Discord" tag="metaangelsnft" />
    </div>
  );
}

function Icon({ Icon, name, tag }) {
  return (
    <div className="flex align-middle">
      <Icon size={50} fill="rgb(8, 8, 154)" />
      <div className="ml-5">
        <span className="block font-medium text-sm text-[#626262]">{name}</span>
        <span className="block font-semibold text-lg">{tag}</span>
      </div>
    </div>
  );
}
