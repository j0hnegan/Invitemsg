import svgPaths from "../../imports/svg-12qi7k655n";
import imgFrame824 from "../../assets/caeeddc62ff6b56dd620c8c68abc11c54b02c3a7.png";
import imgCoachRxWhite from "../../assets/8988f58f3d77ccefb92f92d04b4880d9a969c424.png";

interface NavItemProps {
  label: string;
  isActive?: boolean;
}

function NavItem({ label, isActive = false }: NavItemProps) {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="nav-item">
      <div 
        className={`flex flex-col font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap uppercase ${
          isActive ? 'text-white' : 'text-[rgba(255,255,255,0.6)]'
        }`} 
        style={{ fontVariationSettings: "'wdth' 100" }}
      >
        <p className="leading-[1.43]">{label}</p>
      </div>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="nav-menu">
      <NavItem label="Dashboard" isActive />
      <NavItem label="Clients" />
      <NavItem label="Index" />
      <NavItem label="Coaches" />
      <NavItem label="Programs" />
    </div>
  );
}

function SearchIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3f28ba80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function BellIcon() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Frame">
          <path d={svgPaths.p3964c80} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeOpacity="0.7" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Frame">
          <path d="M13 5.5L8 10.5L3 5.5" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

function UserMenu() {
  return (
    <div className="relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[16px] items-center overflow-clip p-[6px] relative rounded-[inherit]">
        <div className="relative rounded-[60px] shrink-0 size-[24px]">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[60px] size-full" src={imgFrame824} />
        </div>
        <ChevronDown />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NavRight() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="nav-right">
      <SearchIcon />
      <BellIcon />
      <UserMenu />
    </div>
  );
}

export function HeaderNav() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-between relative shrink-0 w-full" data-name="Header Nav">
      <div className="h-[28px] relative shrink-0 w-[110px]" data-name="Logo">
        <img alt="CoachRx" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCoachRxWhite} />
      </div>
      <NavMenu />
      <NavRight />
    </div>
  );
}

