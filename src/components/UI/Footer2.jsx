import React from 'react'

function Footer2() {
  return (
    <div 
      className="flex flex-col w-full md:flex-row items-center justify-center p-4 md:py-10 bg-cover bg-center min-h-[300px]" 
      style={{ backgroundImage: 'url("/img/bg-img/bgc1.jpeg")' }}
    >
      <div className="flex flex-col items-center px-5 pt-16 w-full">
        <div className="flex flex-col max-w-full w-[1296px]">
          <div className="max-w-full w-[1251px]">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[45%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col text-base leading-6 text-neutral-400 max-md:mt-10 max-md:max-w-full">
                  <h2 className='font-bold text-white text-xl'>Fidelity Coin Experts</h2>
                  <div className="mt-6 max-md:max-w-full">
                    We're passionate about creating unforgettable moments. Our
                    <br />
                    platform provides a seamless and transparent trading
                    <br />
                    experience, with a range of exciting crypto and fiat currency
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[55%] max-md:ml-0 max-md:w-full">
                <div className="grow mt-1.5 max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 max-md:flex-col">
                    <div className="flex flex-col w-[35%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start text-base text-neutral-400 max-md:mt-10">
                        <div className="text-xl font-medium leading-tight text-white">
                          Quick Links
                        </div>
                        <div className="mt-12 max-md:mt-10">Trade</div>
                        <div className="mt-6">Market</div>
                        <div className="self-stretch mt-6">Crypto Currency</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[23%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col items-start text-base whitespace-nowrap text-neutral-400 max-md:mt-10">
                        <div className="self-stretch text-xl font-medium leading-tight text-white">
                          Company
                        </div>
                        <div className="mt-11 max-md:mt-10">Home</div>
                        <div className="mt-6">About</div>
                        <div className="mt-6">Contact</div>
                      </div>
                    </div>
                    <div className="flex flex-col ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                      <div className="flex flex-col grow items-start text-base text-neutral-400 max-md:mt-10">
                        <div className="text-xl font-medium leading-tight text-white">
                          Legal
                        </div>
                        <div className="self-stretch mt-11 max-md:mt-10">
                          Referral Agreement
                        </div>
                        <div className="mt-5">Terms of Service</div>
                        <div className="mt-6">Privacy Policy</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-5 justify-between py-4 mt-16 w-full border-t border-neutral-400 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-1 my-auto text-xs">
              <div className="grow text-neutral-400">© 2024 </div>
              <div className="flex gap-px">
                <div className="grow text-white">Fidelity</div>
                <div className="basis-auto text-neutral-400">
                  . All Rights Reserved
                </div>
              </div>
            </div>
            <div className="flex gap-2.5 text-base leading-none whitespace-nowrap text-neutral-400">
              <div className="overflow-hidden px-3 w-8 h-8 rounded-md bg-white bg-opacity-10">
                
              </div>
              <div className="overflow-hidden px-2 w-8 h-8 rounded-md bg-white bg-opacity-10">
                
              </div>
              <div className="overflow-hidden px-2.5 w-8 h-8 rounded-md bg-white bg-opacity-10">
                
              </div>
              <div className="overflow-hidden px-2 w-8 h-8 rounded-md bg-white bg-opacity-10">
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer2
