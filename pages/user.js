import Blockies from "react-blockies";
import {
  IoCopyOutline,
  IoSwapVertical,
  IoChevronDownOutline,
} from "react-icons/io5";
import { GrFormCheckmark } from "react-icons/gr";
import { useAccount } from "wagmi";
import MenuItem from "@mui/material/MenuItem";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import styles from "./../styles/User.module.scss";
import Button from "../components/Button/Button";
import NFTCard from "../components/NFTCard/NFTCard";
import { useEffect, useState } from "react";
import Options from "../components/Options/Options";

export default function User() {
  const { address, status } = useAccount();
  const [copyValue, setCopyValue] = useState("");
  const [anchorEl, setAnchorEl] = useState(null);
  const [filterType, setFilterType] = useState("rl");
  const [filterValues] = useState({
    rl: "Recently listed",
    hp: "Highest priced",
    lp: "Lowest priced",
  });
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const copyToClipboard = async (value) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopyValue("Copied!");
      setTimeout(() => setCopyValue(shortenAddress(address)), 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const shortenAddress = (add) =>
    !!add
      ? (
          add.slice(0, 5) +
          "..." +
          add.slice(add.length - 4, add.length)
        ).toLowerCase()
      : "";

  useEffect(() => setCopyValue(shortenAddress(address)), [address]);

  return (
    <div className={styles.User}>
      <Navbar />
      {status === "connected" && (
        <div className={styles.UserDetails}>
          <Blockies
            seed={"address" && address}
            size={18}
            scale={5}
            color="#dfe"
            bgColor="red"
            spotColor="#abc"
            className={styles.Blockie}
          />
          <div className={styles.UserDetailsInfo}>
            <h2>{shortenAddress(address)}</h2>
            <Button
              type={["secondary", "small"]}
              className={styles.copyButton}
              clickFunction={() => copyToClipboard(address)}
            >
              <span>{copyValue}</span>
              <IoCopyOutline />
            </Button>
          </div>
        </div>
      )}
      <div>
        <div className={styles.filter}>
          <div>
            <Button title={"My items"} type={["secondary", "small"]} />
            <Button title={"Activities"} type={["secondary", "small"]} />
          </div>
          <div>
            <div
              aria-controls={open ? "demo-positioned-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Button
                className={styles.ctrlButton}
                type={["secondary", "small"]}
              >
                <IoSwapVertical />
                <span>{filterValues[filterType]}</span>
                <IoChevronDownOutline />
              </Button>
            </div>
            <Options anchorEl={anchorEl} handleClose={handleClose}>
              {Object.keys(filterValues).map((value) => (
                <MenuItem
                  key={value}
                  className={styles.Menu}
                  onClick={() => {
                    setFilterType(value);
                    return handleClose();
                  }}
                >
                  <span>{filterValues[value]}</span>
                  {filterType === value && (
                    <GrFormCheckmark size={25} fill="rgb(8, 8, 154)" />
                  )}
                </MenuItem>
              ))}
            </Options>
          </div>
        </div>
        {true ? (
          <div className={styles.NoResult}>
            <h2>No results</h2>
            <p>You don&apos;t have any Meta Angels yet. Explore Meta Angels</p>
            <Button title={"Explore collections"} type={["small", "link"]} linkRoute={"/explore"} />
          </div>
        ) : (
          <div className={styles.NFTDisplayPreview}>
            <NFTCard
              image="https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8739.jpeg"
              name="Meta Angels #8739"
              price="0.03 ETH"
              bid="0 RARI"
              forSale={false}
            />

            <NFTCard
              image="https://metaangelsnft.mypinata.cloud/ipfs/QmY4ptX6ZwVXdKtQTmZQ7vBF2t3qGWhY3H4XVm5Bhwf2hh/2644.jpeg"
              name="Meta Angels #2644"
              price="0.03 ETH"
              bid="0 RARI"
              forSale={false}
            />

            <NFTCard
              image="https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg"
              name="Meta Angels #9865"
              price="0.03 ETH"
              bid="0 RARI"
            />

            <NFTCard
              image="https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg"
              name="Meta Angels #6989"
              price="0.03 ETH"
              bid="0 RARI"
            />

            <NFTCard
              image="https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8589.jpeg"
              name="Meta Angels #8589"
              price="0.03 ETH"
              bid="0 RARI"
            />
          </div>
        )}
      </div>
      <Footer activeSocial={true} />
    </div>
  );
}
