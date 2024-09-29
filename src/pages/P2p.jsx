import React from 'react';


function P2p() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex flex-col md:flex-row justify-between items-center bg-black pt-20 px-4 md:px-14">
        <div className="flex flex-col px-4 md:px-16 my-auto text-center md:text-left">
          <div className="text-2xl md:text-4xl font-semibold text-white py-4 leading-[40px] md:leading-[52px]">
            Trade Smarter Together: The{" "}
            <span className="text-green-600">P2P</span>
            <br />
            Trading Revolution Begins.
          </div>
        </div>
        <img src="/img/other-img/p2pp.png" alt="" className="w-full md:w-auto" />
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center px-4 md:px-10 py-5 text-sm text-center bg-black shadow-[0px_0px_1px_rgba(24,29,32,1)] text-neutral-400">
        <div className="flex flex-wrap gap-4 justify-center md:justify-between items-center w-full">
          <div className="flex gap-2 md:gap-5 text-base font-medium text-white border border-green-600 rounded">
            <div className="px-4 py-2 bg-green-600 rounded">Buy</div>
            <div className="py-2">Sell</div>
          </div>
          <div className="text-blue-600 bg-blue-600 bg-opacity-20 rounded px-4 py-2.5">BTC</div>
          <div className="py-2">BNB</div>
          <div className="py-2">TRX</div>
          <div className="py-2">ETH</div>
          <div className="py-2">USDT</div>
          <div className="py-2">SOL</div>
          <div className="py-2">XRP</div>
          <div className="py-2">USDC</div>
          <div className="py-2">ADA</div>
          <div className="py-2">DOGE</div>
          <div className="py-2">AVAX</div>
          <div className="py-2">SHIB</div>
          <div className="py-2">TON</div>
          <div className="py-2">DOT</div>
          <div className="py-2">LINK</div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between bg-black px-4 md:px-20 gap-4 md:gap-6 text-base text-neutral-400 text-opacity-80">
        <div className="px-4 py-5 text-center md:text-left border border-opacity-20 border-white rounded">Amount</div>
        <div className="flex flex-col justify-center p-px rounded-lg border border-opacity-10 border-black">
          <div className="flex gap-5 justify-between px-4 md:px-5 py-5 rounded border border-opacity-20 border-white">
            <div>All Currency</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e046baf5d70bf09f1095823601e9d0565e0217782bbeeb2839db5ebca325a0d8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
              className="object-contain w-4 aspect-square"
              alt="Currency"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-px rounded-lg border border-opacity-10 border-black">
          <div className="flex gap-5 justify-between px-4 md:px-5 py-5 rounded border border-opacity-20 border-white">
            <div>All Payments</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e046baf5d70bf09f1095823601e9d0565e0217782bbeeb2839db5ebca325a0d8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
              className="object-contain w-4 aspect-square"
              alt="Payments"
            />
          </div>
        </div>
        <div className="flex flex-col justify-center p-px rounded-lg border border-opacity-10 border-black">
          <div className="flex gap-5 justify-between px-4 md:px-5 py-5 rounded border border-opacity-20 border-white">
            <div>All Region</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/e046baf5d70bf09f1095823601e9d0565e0217782bbeeb2839db5ebca325a0d8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
              className="object-contain w-4 aspect-square"
              alt="Region"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="flex flex-col md:flex-row justify-between bg-black py-10 px-4 md:px-16">
          <div className="px-4 py-5 text-base text-neutral-400">Advertiser</div>
          <div className="px-4 py-5 text-base text-neutral-400">Price</div>
          <div className="px-4 py-5 text-base text-neutral-400">Limit/Available</div>
          <div className="px-4 py-5 text-base text-neutral-400">Payment Window</div>
          <div className="px-4 py-5 text-base text-neutral-400">Payment Method</div>
          <div className="flex items-center px-4 py-5">
            <div className="text-base text-neutral-400">Trade</div>
            <div className="text-xs text-green-500">(0% Fee)</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center px-4 md:px-20 py-10 md:py-36 w-full text-xs text-center text-gray-500 bg-black">
          <div className="flex flex-col mb-2 w-[71px]">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6e1631787f1fe8cfa5173ecebba7dc65e4eb555c65bf791113992908db8c4b53?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e1631787f1fe8cfa5173ecebba7dc65e4eb555c65bf791113992908db8c4b53?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e1631787f1fe8cfa5173ecebba7dc65e4eb555c65bf791113992908db8c4b53?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e1631787f1fe8cfa5173ecebba7dc65e4eb555c65bf791113992908db8c4b53?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e1631787f1fe8cfa5173ecebba7dc65e4eb555c65bf791113992908db8c4b53?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6e1631787f1fe8cfa5173ecebba7dc65e4eb555c65bf791113992908db8c4b53?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e1631787f1fe8cfa5173ecebba7dc65e4eb555c65bf791113992908db8c4b53?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
              alt="P2P"
              className="w-20"
            />
          </div>
          <div className="text-base">
            The peer-to-peer (P2P) trading platform is for users to trade directly
            with each other. P2P trading allows users to trade without the need for a
            centralized exchange. Users can post their ads, choose their preferred
            trading partners, and complete transactions with the flexibility of
            multiple payment methods.
          </div>
        </div>
      </div>


    </div>
  );
}

export default P2p;
