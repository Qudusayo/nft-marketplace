import { BsChevronDown } from "react-icons/bs";

import Button from "../components/Button/Button";
import NFTCard from "../components/NFTCard/NFTCard";

import SocialCard from "../components/SocialCard/SocialCard";
import Footer from "../components/Footer/Footer";
import StatCard from "../components/StatCard/StatCard";
import Header from "../components/Header/Header";

import styles from "./../styles/Home.module.scss";
import { useEffect, useState } from "react";

export default function Home({ props }) {
  const [windowWidth, setWindowWidth] = useState(0);
  const [displayLimit, setDisplayLimit] = useState(4);
  const [recentlyListed, setRecentlyListed] = useState([]);

  useEffect(() => {
    console.log(windowWidth);
    if (windowWidth < 337) {
      setDisplayLimit(3);
    } else if (windowWidth < 691 && windowWidth > 336) {
      setDisplayLimit(6);
    } else if (windowWidth < 1144 && windowWidth > 690) {
      setDisplayLimit(9);
    } else {
      setDisplayLimit(12);
    }
  }, [windowWidth]);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    setRecentlyListed([
      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8739.jpeg",
        name: "Meta Angels #8739",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmY4ptX6ZwVXdKtQTmZQ7vBF2t3qGWhY3H4XVm5Bhwf2hh/2644.jpeg",
        name: "Meta Angels #2644",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg",
        name: "Meta Angels #9865",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg",
        name: "Meta Angels #6989",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8589.jpeg",
        name: "Meta Angels #8589",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9349.jpeg",
        name: "Meta Angels #9349",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/7063.jpeg",
        name: "Meta Angels #7063",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmUr84TazuX13sxC3bfzsVeDw89Y6Gr8QShmJHErL3fUMi/3380.jpeg",
        name: "Meta Angels #3380",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmcBvE4UpAVgb4aKxDZkSqomuwdZAkACCkf1kZ5tWGjyrr/4039.jpeg",
        name: "Meta Angels #4039",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg",
        name: "Meta Angels #9865",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg",
        name: "Meta Angels #6989",
        price: "0.03 ETH",
        bid: "0 RARI",
      },

      {
        image:
          "https://metaangelsnft.mypinata.cloud/ipfs/QmY6VFETjT1bTr13DXCtV2XcYJXqyqEEtdkL1XoEvtNB4Q/4606.jpeg",
        name: "Meta Angels #4606",
        price: "0.03 ETH",
        bid: "0 RARI",
      },
    ]);
    let handleResize = window.addEventListener("resize", (res) =>
      setWindowWidth(window.innerWidth)
    );

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={styles.Home}>
      <Header />
      <StatCard />
      <div className={styles.Reason}>
        <h1>Why list on Meta Angels?</h1>
        <p>
          Listing your NFT on the Meta Angels marketplace means lower fees on
          your transaction than other platforms, while still contributing 0.5%
          of the sale to the community wallet to fund Angel Grants. We call that
          a win-win.
        </p>
        <Button title="List Your Meta Angels" />
      </div>
      <div className={styles.NFTDisplay}>
        <h1>
          Explore{" "}
          <span>
            Recently Listed <BsChevronDown size={20} fill="rgb(8, 8, 154)" />
          </span>
        </h1>
        <div className={styles.NFTDisplayPreview}>
          {recentlyListed.slice(0, displayLimit).map((listedNft, index) => (
            <NFTCard
              key={index}
              image={listedNft.image}
              name={listedNft.name}
              price={listedNft.price}
              bid={listedNft.bid}
            />
          ))}
        </div>
        <Button
          title="Explore Meta Angels"
          type={["link"]}
          linkRoute={"/explore"}
          className={styles.Button}
        />
      </div>
      <SocialCard />
      <Footer />
    </div>
  );
}

// 0 - 336 - 1
// 337 - 690 - 2
// 691 - 1144 - 3
// 1144 - Above 4
