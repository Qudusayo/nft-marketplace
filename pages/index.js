import Button from "../components/Button";
import NFTCard from "../components/NFTCard";
import { BsChevronDown } from "react-icons/bs";

import styles from "./../styles/Home.module.scss";
import SocialCard from "../components/SocialCard";
import Footer from "../components/Footer";
import StatCard from "../components/StatCard/Index";
import Header from "../components/Header";

export default function Home() {
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
          <NFTCard
            image="https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8739.jpeg"
            name="Meta Angels #8739"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            image="https://metaangelsnft.mypinata.cloud/ipfs/QmY4ptX6ZwVXdKtQTmZQ7vBF2t3qGWhY3H4XVm5Bhwf2hh/2644.jpeg"
            name="Meta Angels #2644"
            price="0.03 ETH"
            bid="0 RARI"
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

          <NFTCard
            image="https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9349.jpeg"
            name="Meta Angels #9349"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            image="https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/7063.jpeg"
            name="Meta Angels #7063"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            image="https://metaangelsnft.mypinata.cloud/ipfs/QmUr84TazuX13sxC3bfzsVeDw89Y6Gr8QShmJHErL3fUMi/3380.jpeg"
            name="Meta Angels #3380"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            image="https://metaangelsnft.mypinata.cloud/ipfs/QmcBvE4UpAVgb4aKxDZkSqomuwdZAkACCkf1kZ5tWGjyrr/4039.jpeg"
            name="Meta Angels #4039"
            price="0.03 ETH"
            bid="0 RARI"
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
            image="https://metaangelsnft.mypinata.cloud/ipfs/QmY6VFETjT1bTr13DXCtV2XcYJXqyqEEtdkL1XoEvtNB4Q/4606.jpeg"
            name="Meta Angels #4606"
            price="0.03 ETH"
            bid="0 RARI"
          />
        </div>
        <Button title="Explore Meta Angels" className={styles.Button} />
      </div>
      <SocialCard />
      <Footer />
    </div>
  );
}
