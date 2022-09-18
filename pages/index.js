import { Button } from "../components/Button/Index";
import NFTCard from "../components/NFTCard/Index";
import Social from "../components/Social/Index";
import StatCard from "../components/StatCard/Index";
import { RiSearchLine } from "react-icons/ri";

export default function Home() {
  return (
    <div className="container">
      <div className=" bg-[url('https://rarible.mypinata.cloud/ipfs/QmaVsRhqtrgSGrj1ftTVy3WRp3yFDWY8f6QSVxifsx9Q8R')] bg-center bg-cover min-h-screen">
        <nav className="flex items-center justify-between py-5 px-8 pl-24 pb-0">
          <h2 className="font-bold hidden">Meta Angels</h2>
          <div className="border py-2 px-4 rounded-full flex items-center justify-between w-4/12 bg-tetiary cursor-pointer hidden">
            <span>Search by Meta Angels</span>
            <RiSearchLine className="rotate-90" />
          </div>
          <Button
            title={
              <span>
                Connect <span className="hidden">Wallet</span>
              </span>
            }
            className="ml-auto text-sm"
          />
        </nav>

        <div className="flex items-center w-11/12 m-auto bg-center pt-14 flex-col-reverse">
          <div>
            <h2 className="font-semibold text-4xl my-0 text-center mt-8">
              Meta Angels
            </h2>
            <div>
              <span className="font-normal w-4/6 inline-block text-xl text-[#04040599] my-4 text-center w-full m-auto">
                10,000 unique Meta Angels, each a membership card to our
                engaged, valuable community.{" "}
                <span className="text-primary">Read more</span>
              </span>
              <div className="mt-4 text-center mb-[6em]">
                <Button title="List Your Meta Angels" type="primary" />
                <Button title="Explore" className="ml-4" />
              </div>
            </div>
          </div>
          <div className="border w-2/5 h-[400px] rounded-2xl bg-shaded-repo bg-center bg-100% transition-all hover:bg-105% ease-in-out duration-300 text-white font-semibold text-[1.75em] p-8 pb-7 cursor-pointer flex items-end shadow-[rgba(0_0_0_0.2)_0px_10px_15px_-1px,_rgba(0_0_0_0.11)_0px_4px_6px_-2px] w-[100%]  h-[22.2rem]">
            Meta Angels #7281
          </div>
        </div>
      </div>

      <StatCard />

      <div className="text-center">
        <h2 className="font-semibold text-4xl text-[2rem] leading-[2.5rem]">
          Why list on Meta Angels?
        </h2>
        <p className="font-normal leading-[1.9rem] text-[1.35rem] text-[#04040599] m-auto my-6 w-11/12">
          Listing your NFT on the Meta Angels marketplace means lower fees on
          your transaction than other platforms, while still contributing 0.5%
          of the sale to the community wallet to fund Angel Grants. We call that
          a win-win.
        </p>
        <Button title="List Your Meta Angels" type="primary" />
      </div>

      <div className="my-28 mb-24">
        <h2 className="text-center  text-4xl font-semibold  leading-[3rem]">
          Explore <span className="text-primary block">Recently Listed</span>
        </h2>
        <div className="mt-12 m-auto w-11/12 flex flex-wrap gap-4 gap-y-10 gap-y-7">
          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8739.jpeg"
            name="Meta Angels #8739"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmVY71TwVfYqZ5iDLSa48SpV9qTVnh1wUcVPPjcFJvau4Y/7477.jpeg"
            name="Meta Angels #7477"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmY4ptX6ZwVXdKtQTmZQ7vBF2t3qGWhY3H4XVm5Bhwf2hh/2624.jpeg"
            name="Meta Angels #2624"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/7254.jpeg"
            name="Meta Angels #7254"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmPeYZJnGTooUk9zq2ATmXMnEXaYc3ms5zvBS4vkBKNmVK/8589.jpeg"
            name="Meta Angels #8589"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9349.jpeg"
            name="Meta Angels #9349"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/7063.jpeg"
            name="Meta Angels #7063"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmUr84TazuX13sxC3bfzsVeDw89Y6Gr8QShmJHErL3fUMi/3380.jpeg"
            name="Meta Angels #3380"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmcBvE4UpAVgb4aKxDZkSqomuwdZAkACCkf1kZ5tWGjyrr/4039.jpeg"
            name="Meta Angels #4039"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmfQdFyuFjm6gZ8VkUocFBVgsfY6zwxHD6gubNSecNtKS1/9865.jpeg"
            name="Meta Angels #9865"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmVnguCRdx6J5WC6RXBB9pTbqamh5pBFnFMAcq4V6UkTCT/6989.jpeg"
            name="Meta Angels #6989"
            price="0.03 ETH"
            bid="0 RARI"
          />

          <NFTCard
            img="https://metaangelsnft.mypinata.cloud/ipfs/QmY6VFETjT1bTr13DXCtV2XcYJXqyqEEtdkL1XoEvtNB4Q/4606.jpeg"
            name="Meta Angels #4606"
            price="0.03 ETH"
            bid="0 RARI"
          />
        </div>
        <Button
          title="Explore Meta Angels"
          type="primary"
          className="block m-auto mt-10"
        />
      </div>
      <Social />
      <footer className="my-16 mb-0 p-8 pt-0 border-t flex justify-between items-center flex-col text-txtLight text-sm">
        <span  className="pb-4">© Meta Angels 2022</span>
        <div className="flex flex-col text-center">
          <span className="pb-4">Terms</span>
          <span className="inline-block md:ml-6 ml-0">Built by Qudusayo</span>
        </div>
      </footer>
    </div>
  );
}

// rgb(0 0 0 / 20%) 0px 10px 15px -1px, rgb(0 0 0 / 11%) 0px 4px 6px -2px;
