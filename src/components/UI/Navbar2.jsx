import React from 'react'

function Navbar2() {
  return (
    <div>
        
    <div className="flex flex-col justify-center items-center px-16 py-4 text-white bg-black max-md:px-5">
      <div className="flex flex-wrap gap-5 justify-between max-w-full w-[1296px]">
        <div className="flex gap-10 items-center my-auto text-base max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e86ce72bd5ab8d9994bb2669eb2913fff21eade15dfb5656b58186058b74bcbe?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86ce72bd5ab8d9994bb2669eb2913fff21eade15dfb5656b58186058b74bcbe?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86ce72bd5ab8d9994bb2669eb2913fff21eade15dfb5656b58186058b74bcbe?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86ce72bd5ab8d9994bb2669eb2913fff21eade15dfb5656b58186058b74bcbe?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86ce72bd5ab8d9994bb2669eb2913fff21eade15dfb5656b58186058b74bcbe?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86ce72bd5ab8d9994bb2669eb2913fff21eade15dfb5656b58186058b74bcbe?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86ce72bd5ab8d9994bb2669eb2913fff21eade15dfb5656b58186058b74bcbe?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e86ce72bd5ab8d9994bb2669eb2913fff21eade15dfb5656b58186058b74bcbe?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
            className="object-contain shrink-0 self-stretch max-w-full aspect-[5.88] w-[200px]"
          />
          <div className="self-stretch my-auto">Market</div>
          <div className="self-stretch my-auto">Trade</div>
          <div className="self-stretch my-auto basis-auto">Crypto Currency</div>
          <div className="self-stretch my-auto">About</div>
          <div className="self-stretch my-auto">Contact</div>
        </div>
        <div className="flex gap-5 items-center">
          <div className="grow self-stretch my-auto text-base">Login</div>
          <div className="self-stretch px-6 py-3 my-auto text-sm font-light leading-none text-center bg-blue-600 rounded-lg border border-blue-600 border-solid max-md:px-5">
            Sign up
          </div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/54043613d1a6402aee8c465279e0700eb42035254b3de8d27561d63694f09553?placeholderIfAbsent=true&apiKey=f417b8c00fe14582a1a201b8017683ae"
            className="object-contain shrink-0 self-stretch w-10 rounded-3xl aspect-square"
          />
        </div>
      </div>
    </div>
  
    </div>
  )
}

export default Navbar2;