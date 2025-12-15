function Frame() {
  return (
    <div className="bg-[#343434] relative rounded-[21px] shrink-0">
      <div className="content-stretch flex flex-col items-center justify-center overflow-clip px-[8px] py-[6px] relative rounded-[inherit]">
        <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-none">Personalize</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[21px]" />
    </div>
  );
}

function ListItem() {
  return (
    <div className="relative shrink-0 w-full" data-name="list item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
          <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            First Name
          </p>
        </div>
      </div>
    </div>
  );
}

function ListItem1() {
  return (
    <div className="relative shrink-0 w-full" data-name="list item">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex items-center px-[16px] py-[4px] relative w-full">
          <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic relative shrink-0 text-[#ff7161] text-[14px] text-nowrap tracking-[-0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            Delete Intake Form
          </p>
        </div>
      </div>
    </div>
  );
}

function Tab() {
  return (
    <div className="bg-[#343434] content-stretch flex flex-col items-start justify-center px-0 py-[12px] relative rounded-[8px] shrink-0" data-name="Tab">
      <ListItem />
      <ListItem1 />
    </div>
  );
}

export default function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full">
      <Frame />
      <Tab />
    </div>
  );
}