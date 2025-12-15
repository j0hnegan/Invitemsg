export default function Button() {
  return (
    <div className="bg-[#032e15] relative rounded-[6px] size-full" data-name="button">
      <div aria-hidden="true" className="absolute border border-[#05df72] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[8px] py-[4px] relative size-full">
          <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#05df72] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
            Client’s first name
          </p>
        </div>
      </div>
    </div>
  );
}