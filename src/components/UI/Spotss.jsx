import * as React from "react";

function Spot() {
return (
  <div className="flex flex-col md:flex-row pb-40 text-white bg-slate-950 w-full max-md:pb-24">
    <div className="flex relative flex-col items-end px-20 pt-64 pb-10 w-full min-h-[859px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
      <img
        loading="lazy"
        srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae0667fc93226cb3cd441ec09467359620e70cc962d4cf641bba2037fef6e4d8?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae0667fc93226cb3cd441ec09467359620e70cc962d4cf641bba2037fef6e4d8?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae0667fc93226cb3cd441ec09467359620e70cc962d4cf641bba2037fef6e4d8?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae0667fc93226cb3cd441ec09467359620e70cc962d4cf641bba2037fef6e4d8?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae0667fc93226cb3cd441ec09467359620e70cc962d4cf641bba2037fef6e4d8?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae0667fc93226cb3cd441ec09467359620e70cc962d4cf641bba2037fef6e4d8?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae0667fc93226cb3cd441ec09467359620e70cc962d4cf641bba2037fef6e4d8?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae0667fc93226cb3cd441ec09467359620e70cc962d4cf641bba2037fef6e4d8?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae"
        className="object-cover absolute inset-0 size-full"
      />
      <div className="flex relative flex-col items-start max-w-full w-[323px]">
        <div className="self-stretch text-5xl font-bold leading-[52px] max-md:text-4xl max-md:leading-10">
          Revolutionary
          <br />
          Spot Trader
        </div>
        <div className="mt-14 w-full text-xs leading-6 max-md:mt-10">
          Introducing our game-changing Revolutionary
          
          Spot Trader, a pioneering platform redefining
          
          the landscape of trading. With lightning-fast
          
          execution and real-time market access, it's
          
          designed to elevate your trading experience.
          
          Our platform seamlessly integrates advanced
          
          tools and expert insights, empowering you to
          
          make informed decisions. Stay ahead of the
          
          curve with our revolutionary features and
          
          unlock new possibilities in trading. Join us in
          
          shaping the future of trading with the
          
          Revolutionary Spot Trader
        </div>
        <div className="flex gap-5 px-12 py-6 mt-14 text-lg font-medium tracking-tight leading-none rounded-2xl text-slate-950 max-md:px-5 max-md:mt-10">
          <div>Start Now</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e437b2a56863a58020963da80f8298d9c9589b6d13540bb8c224cb13f51cfc33?apiKey=f417b8c00fe14582a1a201b8017683ae&&apiKey=f417b8c00fe14582a1a201b8017683ae"
            className="object-contain shrink-0 aspect-[1.44] w-[23px]"
          />
        </div>
      </div>
    </div>
  </div>
);
}

export default Spot;