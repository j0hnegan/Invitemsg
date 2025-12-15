export default function Frame() {
  return (
    <div className="bg-[#4d4d4d] relative rounded-[21px] size-full">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[8px] py-[6px] relative size-full">
          <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none">Personalize</p>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[21px]" />
    </div>
  );
}