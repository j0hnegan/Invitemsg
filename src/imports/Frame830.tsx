function Button() {
  return (
    <div className="bg-[rgba(0,0,0,0.2)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.15)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Client’s first name
      </p>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[rgba(0,44,34,0.5)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,188,125,0.4)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[12px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        Client’s full name
      </p>
    </div>
  );
}

function Button2() {
  return (
    <div className="bg-[rgba(55,42,172,0.2)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#a3b3ff] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Coach’s first name
      </p>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[rgba(138,1,148,0.4)] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border border-[rgba(237,106,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#ed6aff] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Coach’s full name
      </p>
    </div>
  );
}

function Button4() {
  return (
    <div className="bg-[#191386] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-[0.666px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#7f79ec] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Organization name
      </p>
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#191386] content-stretch flex items-center justify-center px-[8px] py-[4px] relative rounded-[6px] shrink-0" data-name="button">
      <div aria-hidden="true" className="absolute border-[0.666px] border-[rgba(255,255,255,0.1)] border-solid inset-0 pointer-events-none rounded-[6px]" />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#7f79ec] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Coach’s booking link
      </p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-start flex flex-wrap gap-[6px] items-start relative shrink-0 w-full">
      <Button />
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
      <Button5 />
    </div>
  );
}

export default function Frame() {
  return (
    <div className="bg-[#36363a] relative rounded-[12px] size-full">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative size-full">
          <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-none">Personalize</p>
          </div>
          <Frame1 />
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
    </div>
  );
}