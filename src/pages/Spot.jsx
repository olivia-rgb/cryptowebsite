import React from 'react'

function Spot() {

  const items = [
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfec072265108ddffda4a519788cdda6759b67f7a91ba40f5b89678b34f36da4',
    pairName: 'BTC_USDT',
    price: '62,742.3215',
    change1h: '3.45%',
    change24h: '1.70%',
    marketcap: '1,238,198,508,090.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66742aa1fb60771775ca1b34ef1991a626812cd3f4df6aded45ae10baa0bc20f',
    pairName: 'BTC_USD',
    price: '62,749.4531',
    change1h: '3.25%',
    change24h: '1.63%',
    marketcap: '1,238,339,246,742.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfec072265108ddffda4a519788cdda6759b67f7a91ba40f5b89678b34f36da4',
    pairName: 'BTC_USDC',
    price: '62,742.3215',
    change1h: '3.45%',
    change24h: '1.70%',
    marketcap: '1,238,198,508,090.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66742aa1fb60771775ca1b34ef1991a626812cd3f4df6aded45ae10baa0bc20f',
    pairName: 'BTC_AUD',
    price: '62,749.4531',
    change1h: '3.25%',
    change24h: '1.63%',
    marketcap: '1,238,339,246,742.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfec072265108ddffda4a519788cdda6759b67f7a91ba40f5b89678b34f36da4',
    pairName: 'BTC_EUR',
    price: '62,742.3215',
    change1h: '3.45%',
    change24h: '1.70%',
    marketcap: '1,238,198,508,090.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66742aa1fb60771775ca1b34ef1991a626812cd3f4df6aded45ae10baa0bc20f',
    pairName: 'BTC_GDP',
    price: '62,749.4531',
    change1h: '3.25%',
    change24h: '1.63%',
    marketcap: '1,238,339,246,742.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfec072265108ddffda4a519788cdda6759b67f7a91ba40f5b89678b34f36da4',
    pairName: 'BTC_ETH',
    price: '62,742.3215',
    change1h: '3.45%',
    change24h: '1.70%',
    marketcap: '1,238,198,508,090.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66742aa1fb60771775ca1b34ef1991a626812cd3f4df6aded45ae10baa0bc20f',
    pairName: 'LTC_EUR',
    price: '62,749.4531',
    change1h: '3.25%',
    change24h: '1.63%',
    marketcap: '1,238,339,246,742.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfec072265108ddffda4a519788cdda6759b67f7a91ba40f5b89678b34f36da4',
    pairName: 'ETH_EUR',
    price: '62,742.3215',
    change1h: '3.45%',
    change24h: '1.70%',
    marketcap: '1,238,198,508,090.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66742aa1fb60771775ca1b34ef1991a626812cd3f4df6aded45ae10baa0bc20f',
    pairName: 'USDT_EUR',
    price: '62,749.4531',
    change1h: '3.25%',
    change24h: '1.63%',
    marketcap: '1,238,339,246,742.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfec072265108ddffda4a519788cdda6759b67f7a91ba40f5b89678b34f36da4',
    pairName: 'BNB_EUR',
    price: '62,742.3215',
    change1h: '3.45%',
    change24h: '1.70%',
    marketcap: '1,238,198,508,090.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66742aa1fb60771775ca1b34ef1991a626812cd3f4df6aded45ae10baa0bc20f',
    pairName: 'ADA_EUR',
    price: '62,749.4531',
    change1h: '3.25%',
    change24h: '1.63%',
    marketcap: '1,238,339,246,742.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfec072265108ddffda4a519788cdda6759b67f7a91ba40f5b89678b34f36da4',
    pairName: 'DODGE_EUR',
    price: '62,742.3215',
    change1h: '3.45%',
    change24h: '1.70%',
    marketcap: '1,238,198,508,090.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66742aa1fb60771775ca1b34ef1991a626812cd3f4df6aded45ae10baa0bc20f',
    pairName: 'SOL_EUR',
    price: '62,749.4531',
    change1h: '3.25%',
    change24h: '1.63%',
    marketcap: '1,238,339,246,742.0000',
  },  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfec072265108ddffda4a519788cdda6759b67f7a91ba40f5b89678b34f36da4',
    pairName: 'BTC_USDT',
    price: '62,742.3215',
    change1h: '3.45%',
    change24h: '1.70%',
    marketcap: '1,238,198,508,090.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66742aa1fb60771775ca1b34ef1991a626812cd3f4df6aded45ae10baa0bc20f',
    pairName: 'BTC_USD',
    price: '62,749.4531',
    change1h: '3.25%',
    change24h: '1.63%',
    marketcap: '1,238,339,246,742.0000',
  },  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfec072265108ddffda4a519788cdda6759b67f7a91ba40f5b89678b34f36da4',
    pairName: 'BTC_USDT',
    price: '62,742.3215',
    change1h: '3.45%',
    change24h: '1.70%',
    marketcap: '1,238,198,508,090.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66742aa1fb60771775ca1b34ef1991a626812cd3f4df6aded45ae10baa0bc20f',
    pairName: 'BTC_USD',
    price: '62,749.4531',
    change1h: '3.25%',
    change24h: '1.63%',
    marketcap: '1,238,339,246,742.0000',
  },  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/dfec072265108ddffda4a519788cdda6759b67f7a91ba40f5b89678b34f36da4',
    pairName: 'BTC_USDT',
    price: '62,742.3215',
    change1h: '3.45%',
    change24h: '1.70%',
    marketcap: '1,238,198,508,090.0000',
  },
  {
    pairImage1: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f6e6adc75421099ece75d31a9d3f3a2f6e816b7226a9abd65250687c11073110',
    pairImage2: 'https://cdn.builder.io/api/v1/image/assets/TEMP/66742aa1fb60771775ca1b34ef1991a626812cd3f4df6aded45ae10baa0bc20f',
    pairName: 'MATIC_USD',
    price: '62,749.4531',
    change1h: '3.25%',
    change24h: '1.63%',
    marketcap: '1,238,339,246,742.0000',
  },
];

  return (
    <div>
     <Navbar />   
    <div className="flex flex-col justify-center items-center px-20 py-32 bg-zinc-900 max-md:px-5">
      <div className="flex flex-col items-start max-w-full w-[1296px]">
        <div className="text-2xl font-semibold leading-tight text-white">
          Markets Overview
        </div>
        <div className="mt-5 text-base text-neutral-400">
          Explore your favorite coin pair on Fidelity Expert Coin
        </div>
        <div className="self-stretch mt-12 w-full max-md:mt-10 max-md:max-w-full">
          <div className="flex gap-5 justify-center items-center max-md:flex-col">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col items-center py-6 pr-20 pl-5 w-full bg-black rounded-xl max-md:pr-5 max-md:mt-6">
                <div className="self-start text-sm font-medium leading-tight text-white text-opacity-70">
                  Top Exchanges Coin
                </div>
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0448ec867fe66d7b559ffc8989ee274d31456426696a6aef4daa3858221ba58d?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0448ec867fe66d7b559ffc8989ee274d31456426696a6aef4daa3858221ba58d?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0448ec867fe66d7b559ffc8989ee274d31456426696a6aef4daa3858221ba58d?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0448ec867fe66d7b559ffc8989ee274d31456426696a6aef4daa3858221ba58d?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0448ec867fe66d7b559ffc8989ee274d31456426696a6aef4daa3858221ba58d?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0448ec867fe66d7b559ffc8989ee274d31456426696a6aef4daa3858221ba58d?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0448ec867fe66d7b559ffc8989ee274d31456426696a6aef4daa3858221ba58d?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0448ec867fe66d7b559ffc8989ee274d31456426696a6aef4daa3858221ba58d?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
                  className="object-contain mt-5 aspect-square w-[60px]"
                />
                <div className="mt-1.5 text-xs text-center text-neutral-400">
                  No coin found
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="px-6 py-6 w-full bg-black rounded-xl max-md:pr-5 max-md:mt-6">
                <div className="flex gap-5 ">
                  <div className="flex flex-col w-[41%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start w-full text-sm font-medium text-neutral-400 max-md:mt-10">
                      <div className="self-stretch leading-tight text-white text-opacity-70">
                        Highlight Coin
                      </div>
                      <div className="flex gap-2.5 mt-6 whitespace-nowrap">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
                          className="object-contain shrink-0 rounded-xl aspect-square w-[25px]"
                        />
                        <div className="my-auto">BTC</div>
                      </div>
                      <div className="flex gap-2.5 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
                          className="object-contain shrink-0 rounded-xl aspect-square w-[25px]"
                        />
                        <div className="my-auto">ETH</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[41%] max-md:mt-14 max-md:w-full">
                    <div className="flex flex-col mt-11 text-sm text-red-500 whitespace-nowrap max-md:mt-10">
                      <div>$62,682.6055</div>
                      <div className="mt-7 max-md:mr-1.5">$3,027.8116</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[18%] max-md:mt-14 max-md:w-full">
                    <div className="flex flex-col mt-11 text-sm text-red-500 whitespace-nowrap max-md:mt-10">
                      <div>3.45%</div>
                      <div className="mt-7">3.79%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:mt-14 max-md:w-full">
              <div className="grow px-6 py-6 w-full bg-black rounded-xl max-md:pr-5 max-md:mt-6">
                <div className="flex gap-5 ">
                  <div className="flex flex-col w-[36%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col items-start w-full text-sm font-medium text-neutral-400 max-md:mt-10">
                      <div className="leading-tight text-white text-opacity-70">
                        New Coin
                      </div>
                      <div className="flex gap-2.5 mt-7 whitespace-nowrap">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/53ce641a1af15572310a13ba1f6390d52704b75f3aff2412ec9df92861d86062?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
                          className="object-contain shrink-0 rounded-xl aspect-square w-[25px]"
                        />
                        <div className="my-auto">BTC</div>
                      </div>
                      <div className="flex gap-2.5 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ca84954925d42824ae729cfcfd46363c4847591290cf1fd374273fc9bc21b493?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
                          className="object-contain shrink-0 rounded-xl aspect-square w-[25px]"
                        />
                        <div className="my-auto">ETH</div>
                      </div>
                      <div className="flex gap-2.5 self-stretch mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/37ec92fd4a0cdd279700e0fe33de66be11452953fa6f70c2750cccbe2cc0184e?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/37ec92fd4a0cdd279700e0fe33de66be11452953fa6f70c2750cccbe2cc0184e?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37ec92fd4a0cdd279700e0fe33de66be11452953fa6f70c2750cccbe2cc0184e?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/37ec92fd4a0cdd279700e0fe33de66be11452953fa6f70c2750cccbe2cc0184e?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/37ec92fd4a0cdd279700e0fe33de66be11452953fa6f70c2750cccbe2cc0184e?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/37ec92fd4a0cdd279700e0fe33de66be11452953fa6f70c2750cccbe2cc0184e?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/37ec92fd4a0cdd279700e0fe33de66be11452953fa6f70c2750cccbe2cc0184e?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/37ec92fd4a0cdd279700e0fe33de66be11452953fa6f70c2750cccbe2cc0184e?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
                          className="object-contain shrink-0 rounded-xl aspect-square w-[25px]"
                        />
                        <div className="my-auto">USDT</div>
                      </div>
                      <div className="flex gap-2.5 mt-4 whitespace-nowrap">
                        <img
                          loading="lazy"
                          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/0361de16b385efce459b1347b575107b9aa1275253573bfd1164ed87506a91c8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/0361de16b385efce459b1347b575107b9aa1275253573bfd1164ed87506a91c8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0361de16b385efce459b1347b575107b9aa1275253573bfd1164ed87506a91c8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/0361de16b385efce459b1347b575107b9aa1275253573bfd1164ed87506a91c8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/0361de16b385efce459b1347b575107b9aa1275253573bfd1164ed87506a91c8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/0361de16b385efce459b1347b575107b9aa1275253573bfd1164ed87506a91c8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/0361de16b385efce459b1347b575107b9aa1275253573bfd1164ed87506a91c8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/0361de16b385efce459b1347b575107b9aa1275253573bfd1164ed87506a91c8?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
                          className="object-contain shrink-0 rounded-xl aspect-square w-[25px]"
                        />
                        <div className="my-auto">BNB</div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-[44%] max-md:mt-10 max-md:w-full">
                    <div className="flex flex-col mt-11 text-sm text-red-500 whitespace-nowrap max-md:mt-10">
                      <div>$62,682.6055</div>
                      <div className="mt-5 max-md:mr-1.5 max-md:ml-1.5">
                        $3,027.8116
                      </div>
                      <div className="self-center mt-5">$0.9990</div>
                      <div className="self-center mt-5">$557.5287</div>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 w-1/5 max-md:mt-10 max-md:w-full">
                    <div className="flex flex-col mt-11 text-sm text-red-500 whitespace-nowrap max-md:mt-10">
                      <div>3.45%</div>
                      <div className="mt-5">3.79%</div>
                      <div className="mt-5">0.08%</div>
                      <div className="mt-5">2.84%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  
    <div className="flex overflow-hidden flex-col items-center bg-black text-white">
      <div className="flex flex-wrap gap-10 w-full max-w-[1296px] max-md:max-w-full">
        <div className="flex flex-1 gap-5 items-center my-auto text-lg font-light text-center text-neutral-400">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b9a04c6774e49b6f9901a815a512044d9a85a2a582bdb2d8fe8e773bab9c8c1f?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a04c6774e49b6f9901a815a512044d9a85a2a582bdb2d8fe8e773bab9c8c1f?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a04c6774e49b6f9901a815a512044d9a85a2a582bdb2d8fe8e773bab9c8c1f?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a04c6774e49b6f9901a815a512044d9a85a2a582bdb2d8fe8e773bab9c8c1f?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a04c6774e49b6f9901a815a512044d9a85a2a582bdb2d8fe8e773bab9c8c1f?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a04c6774e49b6f9901a815a512044d9a85a2a582bdb2d8fe8e773bab9c8c1f?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a04c6774e49b6f9901a815a512044d9a85a2a582bdb2d8fe8e773bab9c8c1f?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b9a04c6774e49b6f9901a815a512044d9a85a2a582bdb2d8fe8e773bab9c8c1f?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
            className="object-contain shrink-0 self-stretch rounded-lg aspect-[1.93] w-[83px]"
          />
          <div className="flex gap-1.5 self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/68d375759822cc8c95099fd0e95bc986be0ea1f4e8c484577accf643ec8f10ec?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
              className="object-contain shrink-0 self-start aspect-square w-[18px]"
            />
            <div> Crypto</div>
          </div>
          <div className="flex gap-2 self-stretch my-auto">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/84280438ba05f5aa3894ebf7fcb7921fc1ef595bd9199bd517fba0f1a2b5fef5?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
              className="object-contain shrink-0 aspect-square w-[18px]"
            />
            <div> Fiat</div>
          </div>
        </div>
        <div className="flex flex-1 gap-2.5 px-4 py-5 text-base bg-black rounded-md border border-solid border-zinc-900 text-neutral-400 text-opacity-80">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/beea0e03d78a5226ebc1a2b1ce9090adb7000490f8f136266f81c52d337cb79e?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
            className="object-contain shrink-0 w-4 aspect-square"
          />
          <div className="basis-auto">Search here ...</div>
        </div>
      </div>

      
      <div className="flex flex-col w-full overflow-x-auto">
      {/* Header Row */}
      <div className="flex flex-wrap mt-10 text-base text-neutral-400 bg-gray-900">
        <div className="flex-1 px-5 py-5 bg-black text-center">Pair</div>
        <div className="flex-1 px-5 py-5 bg-black text-center">Price</div>
        <div className="flex-1 px-5 py-5 bg-black text-center">1h Change</div>
        <div className="flex-1 px-5 py-5 bg-black text-center">24h Change</div>
        <div className="flex-1 px-5 py-5 bg-black text-center">Marketcap</div>
      </div>

      {/* Data Rows */}
      {items.map((item, index) => (
        <div key={index} className="flex flex-wrap border-t border-zinc-900 px-2 border-opacity-70">
          <div className="flex-1 px-4 py-6 border-t border-zinc-900 border-opacity-70 flex justify-center items-center">
            <div className="flex flex-col items-center gap-2">
              <div className="flex items-center gap-2">
                <img
                  loading="lazy"
                  src={item.pairImage1}
                  className="object-contain rounded-2xl aspect-square w-8 h-8"
                  alt="Pair Image 1"
                />
                <img
                  loading="lazy"
                  src={item.pairImage2}
                  className="object-contain rounded-2xl aspect-square w-8 h-8"
                  alt="Pair Image 2"
                />
                <div className="text-base font-medium leading-tight text-white text-opacity-70">
                {item.pairName}
              </div>
              </div>
              
            </div>
          </div>
          <div className="flex-1 px-4 py-6 text-sm font-medium text-red-500 border-t border-zinc-900 border-opacity-70 text-center">
            {item.price}
          </div>
          <div className="flex-1 px-4 py-6 text-sm font-medium text-red-500 border-t border-zinc-900 border-opacity-70 text-center">
            {item.change1h}
          </div>
          <div className="flex-1 px-4 py-6 text-sm font-medium text-red-500 border-t border-zinc-900 border-opacity-70 text-center">
            {item.change24h}
          </div>
          <div className="flex-1 px-4 py-6 text-sm font-medium text-white text-opacity-70 border-t border-zinc-900 border-opacity-70 text-center">
            {item.marketcap}
          </div>
        </div>
      ))}
    </div>
  
  
</div>


  
    </div>
  )
}

export default Spot