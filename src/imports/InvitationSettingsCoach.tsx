import svgPaths from "./svg-12qi7k655n";
import imgEllipse32 from "../assets/e26d77c3d6ca4aa4ac07a856b5ce37cfddb76ece.png";
import imgFrame824 from "../assets/caeeddc62ff6b56dd620c8c68abc11c54b02c3a7.png";
import imgCoachRxWhite6855787D72E0Da9E54266727C85E549A1 from "../assets/8988f58f3d77ccefb92f92d04b4880d9a969c424.png";
import { useState, useRef, useEffect } from "react";
import { toast, Toaster } from "sonner@2.0.3";
import { X } from "lucide-react";

function Button() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[12px] relative rounded-[40.317px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.33]">Add Task</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[12px] relative rounded-[40.317px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.33]">See all</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex h-[28px] items-center justify-center p-[12px] relative rounded-[40.317px] shrink-0" data-name="Button">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.33]">View completed</p>
      </div>
    </div>
  );
}

function Frame8() {
  return (
    <div className="content-stretch flex gap-[8px] items-start relative shrink-0">
      <Button />
      <Button1 />
      <Button2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.43] not-italic relative shrink-0 text-[24px] text-nowrap text-white tracking-[-0.96px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Tasks
      </p>
      <Frame8 />
    </div>
  );
}

function Bullet() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Bullet">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #2D2D2D)" id="Ellipse 13" r="11.5" stroke="var(--stroke-0, #939393)" />
        </svg>
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col gap-[18.936px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse32} width="24" />
      </div>
    </div>
  );
}

function Frame13() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#c4c4c4] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.33] overflow-ellipsis overflow-hidden">Mike Franelli</p>
      </div>
    </div>
  );
}

function Client() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="Client">
      <Frame9 />
      <Frame13 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5aa8de] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-[14px]">
          <span className="font-['Mona_Sans:Bold',sans-serif] font-bold not-italic" style={{ fontVariationSettings: "'wdth' 100" }}>
            Due
          </span>
          <span>{` : Mon, April 24`}</span>
        </p>
      </div>
      <Client />
    </div>
  );
}

function TaskContent() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Task Content">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.07]">Respond to Sammie Reedsport’ direct message</p>
      </div>
      <Frame16 />
    </div>
  );
}

function TaskHorizontal() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[415px]" data-name="Task (horizontal)">
      <Bullet />
      <TaskContent />
    </div>
  );
}

function Bullet1() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Bullet">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #2D2D2D)" id="Ellipse 13" r="11.5" stroke="var(--stroke-0, #939393)" />
        </svg>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[18.936px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse32} width="24" />
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#c4c4c4] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.33] overflow-ellipsis overflow-hidden">Mike Franelli</p>
      </div>
    </div>
  );
}

function Client1() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="Client">
      <Frame10 />
      <Frame14 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5aa8de] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-[14px]">
          <span className="font-['Mona_Sans:Bold',sans-serif] font-bold not-italic" style={{ fontVariationSettings: "'wdth' 100" }}>
            Due
          </span>
          <span>{` : Mon, April 24`}</span>
        </p>
      </div>
      <Client1 />
    </div>
  );
}

function TaskContent1() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Task Content">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.07]">Consult overdue with Taylor Tiumi; schedule today</p>
      </div>
      <Frame17 />
    </div>
  );
}

function TaskHorizontal1() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[415px]" data-name="Task (horizontal)">
      <Bullet1 />
      <TaskContent1 />
    </div>
  );
}

function Bullet2() {
  return (
    <div className="content-stretch flex flex-col items-start relative self-stretch shrink-0" data-name="Bullet">
      <div className="relative shrink-0 size-[24px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" fill="var(--fill-0, #2D2D2D)" id="Ellipse 13" r="11.5" stroke="var(--stroke-0, #939393)" />
        </svg>
      </div>
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col gap-[18.936px] items-center relative shrink-0">
      <div className="relative shrink-0 size-[24px]">
        <img alt="" className="block max-w-none size-full" height="24" src={imgEllipse32} width="24" />
      </div>
    </div>
  );
}

function Frame15() {
  return (
    <div className="basis-0 content-stretch flex grow items-center justify-center min-h-px min-w-px pb-[2px] pt-0 px-0 relative shrink-0">
      <div className="basis-0 flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal grow justify-center leading-[0] min-h-px min-w-px not-italic overflow-ellipsis overflow-hidden relative shrink-0 text-[#c4c4c4] text-[14px] text-nowrap tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.33] overflow-ellipsis overflow-hidden">Mike Franelli</p>
      </div>
    </div>
  );
}

function Client2() {
  return (
    <div className="basis-0 content-stretch flex gap-[4px] grow items-center min-h-px min-w-px relative rounded-[1000px] shrink-0" data-name="Client">
      <Frame11 />
      <Frame15 />
    </div>
  );
}

function Frame18() {
  return (
    <div className="content-center flex flex-wrap gap-[16px] items-center pb-0 pt-[8px] px-0 relative shrink-0 w-full">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[#5aa8de] text-[0px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43] text-[14px]">
          <span className="font-['Mona_Sans:Bold',sans-serif] font-bold not-italic" style={{ fontVariationSettings: "'wdth' 100" }}>
            Due
          </span>
          <span>{` : Mon, April 24`}</span>
        </p>
      </div>
      <Client2 />
    </div>
  );
}

function TaskContent2() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[4px] grow items-start min-h-px min-w-px relative shrink-0" data-name="Task Content">
      <div className="flex flex-col font-['Mona_Sans:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[18px] text-white tracking-[-0.36px] w-full" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.07]">Lauren Singer has an outstanding invoice that needs to be paid</p>
      </div>
      <Frame18 />
    </div>
  );
}

function TaskHorizontal2() {
  return (
    <div className="content-stretch flex gap-[16px] items-start relative shrink-0 w-[415px]" data-name="Task (horizontal)">
      <Bullet2 />
      <TaskContent2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex gap-[32px] items-start overflow-clip relative shrink-0 w-full">
      <TaskHorizontal />
      <TaskHorizontal1 />
      <TaskHorizontal2 />
    </div>
  );
}

function Tasks() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[37px] items-start left-[32px] top-[-343px] w-[1119px]" data-name="Tasks">
      <Frame12 />
      <Frame7 />
    </div>
  );
}

function NavItem() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="nav-item">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-nowrap text-white uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43]">Dashboard</p>
      </div>
    </div>
  );
}

function NavItem1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="nav-item">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43]">Clients</p>
      </div>
    </div>
  );
}

function NavItem2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="nav-item">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43]">Index</p>
      </div>
    </div>
  );
}

function NavItem3() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="nav-item">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43]">Coaches</p>
      </div>
    </div>
  );
}

function NavItem4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="nav-item">
      <div className="flex flex-col font-['Mona_Sans:Bold',sans-serif] font-bold justify-center leading-[0] not-italic relative shrink-0 text-[16px] text-[rgba(255,255,255,0.6)] text-nowrap uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.43]">Programs</p>
      </div>
    </div>
  );
}

function NavMenu() {
  return (
    <div className="content-stretch flex gap-[40px] items-center relative shrink-0" data-name="nav-menu">
      <NavItem />
      <NavItem1 />
      <NavItem2 />
      <NavItem3 />
      <NavItem4 />
    </div>
  );
}

function Frame() {
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

function Frame1() {
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

function Frame20() {
  return (
    <div className="relative rounded-[60px] shrink-0 size-[24px]">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[60px] size-full" src={imgFrame824} />
    </div>
  );
}

function Frame2() {
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

function Frame19() {
  return (
    <div className="relative rounded-[8px] shrink-0">
      <div className="content-stretch flex gap-[16px] items-center overflow-clip p-[6px] relative rounded-[inherit]">
        <Frame20 />
        <Frame2 />
      </div>
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.3)] border-solid inset-0 pointer-events-none rounded-[8px]" />
    </div>
  );
}

function NavRight() {
  return (
    <div className="content-stretch flex gap-[16px] items-center relative shrink-0" data-name="nav-right">
      <Frame />
      <Frame1 />
      <Frame19 />
    </div>
  );
}

function HeaderNav() {
  return (
    <div className="content-stretch flex h-[58px] items-center justify-between relative shrink-0 w-full" data-name="Header Nav">
      <div className="h-[28px] relative shrink-0 w-[110px]" data-name="CoachRx_White-6855787d72e0da9e54266727c85e549a 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgCoachRxWhite6855787D72E0Da9E54266727C85E549A1} />
      </div>
      <NavMenu />
      <NavRight />
    </div>
  );
}

function NavMain() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 right-0 px-[24px] py-[11px] top-0" data-name="nav-main">
      <HeaderNav />
    </div>
  );
}

function Frame3() {
  return (
    <div className="relative shrink-0 size-[18px]" data-name="Frame">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
        <g clipPath="url(#clip0_1_1035)" id="Frame">
          <path d={svgPaths.p2253a000} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p12930b00} id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
        <defs>
          <clipPath id="clip0_1_1035">
            <rect fill="white" height="18" width="18" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="col-span-3">
      <div className="bg-[#27272a] content-stretch flex gap-[10px] items-center overflow-clip px-[10px] py-[11px] rounded-[6px] w-full">
        <Frame3 />
        <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[normal] not-italic relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
          Invitation Settings
        </p>
      </div>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-start opacity-70 relative shrink-0 w-full">
      <div className="basis-0 flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium grow justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-[16px] text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[1.35]">Custom welcome message</p>
      </div>
    </div>
  );
}

interface TextSegment {
  type: 'text' | 'chip';
  content: string;
  id?: string;
}

function Frame6({ segments, onSegmentsChange, isFocused, onFocus, onBlur, onCursorChange, containerRef: externalRef, onUndo, onRedo }: { 
  segments: TextSegment[]; 
  onSegmentsChange: (segments: TextSegment[]) => void; 
  isFocused: boolean; 
  onFocus: () => void; 
  onBlur: () => void;
  onCursorChange: (position: { segmentIndex: number; position: number } | null) => void;
  containerRef?: React.RefObject<HTMLDivElement>;
  onUndo?: () => void;
  onRedo?: () => void;
}) {
  const containerRef = externalRef || useRef<HTMLDivElement>(null);
  const isRemovingChipRef = useRef(false);
  const cursorRestoreRef = useRef<{ node: Node; offset: number } | null>(null);
  const shouldPreserveCursorRef = useRef(false);
  const savedCursorPositionRef = useRef<{ segmentIndex: number; offset: number } | null>(null);
  const skipDOMRebuildRef = useRef(false);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Skip entire DOM rebuild if Enter was just pressed
    if (skipDOMRebuildRef.current) {
      skipDOMRebuildRef.current = false;
      return;
    }
    
    // If we just removed a chip, restore cursor and skip rebuild
    if (isRemovingChipRef.current && cursorRestoreRef.current) {
      const { node, offset } = cursorRestoreRef.current;
      
      // Check if the node still exists in the DOM
      if (containerRef.current.contains(node)) {
        const range = document.createRange();
        const selection = window.getSelection();
        
        try {
          range.setStart(node, offset);
          range.setEnd(node, offset);
          selection?.removeAllRanges();
          selection?.addRange(range);
        } catch (e) {
          // Couldn't restore cursor
        }
      }
      
      isRemovingChipRef.current = false;
      cursorRestoreRef.current = null;
      return;
    }

    // Save cursor position before rebuilding
    const selection = window.getSelection();
    if (shouldPreserveCursorRef.current && selection && selection.rangeCount > 0 && containerRef.current.contains(selection.anchorNode!)) {
      const range = selection.getRangeAt(0);
      const cursorNode = range.startContainer;
      const cursorOffset = range.startOffset;
      
      // Find which segment and offset the cursor is in
      let segmentIndex = 0;
      let offsetInSegment = cursorOffset;
      
      // Walk through DOM nodes to find cursor position
      let currentNode = containerRef.current.firstChild;
      let foundCursor = false;
      
      while (currentNode && !foundCursor) {
        if (currentNode === cursorNode) {
          foundCursor = true;
          offsetInSegment = cursorOffset;
        } else if (currentNode.contains(cursorNode)) {
          // Cursor is inside a chip, position after the chip
          foundCursor = true;
          segmentIndex++;
          offsetInSegment = 0;
        } else {
          segmentIndex++;
          currentNode = currentNode.nextSibling;
        }
      }
      
      if (foundCursor) {
        savedCursorPositionRef.current = { segmentIndex, offset: offsetInSegment };
      }
    }

    // Sync segments to DOM content
    const container = containerRef.current;
    container.innerHTML = '';

    segments.forEach((segment) => {
      if (segment.type === 'chip') {
        const chipSpan = document.createElement('span');
        chipSpan.className = 'inline-flex items-center gap-[2px] bg-[#032e15] rounded-[6px] pl-[6px] pr-[2px] py-[2px] text-[#05df72] text-[12px] ml-[4px] mr-[4px] my-[1.5px] whitespace-nowrap relative';
        chipSpan.contentEditable = 'false';
        chipSpan.setAttribute('data-chip-id', segment.id!);
        chipSpan.style.border = '1px solid #05df72';
        
        const textSpan = document.createElement('span');
        textSpan.className = "font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic";
        textSpan.style.fontVariationSettings = "'wdth' 100";
        textSpan.textContent = segment.content;
        
        const button = document.createElement('button');
        button.className = 'rounded-full p-[2px] text-[#05df72]';
        button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
        button.onclick = (e) => {
          e.preventDefault();
          e.stopPropagation();
          handleRemoveChip(segment.id!);
        };
        
        chipSpan.appendChild(textSpan);
        chipSpan.appendChild(button);
        container.appendChild(chipSpan);
      } else {
        const textNode = document.createTextNode(segment.content);
        container.appendChild(textNode);
      }
    });

    // Restore cursor position after rebuilding
    if (shouldPreserveCursorRef.current && savedCursorPositionRef.current) {
      const { segmentIndex, offset } = savedCursorPositionRef.current;
      const selection = window.getSelection();
      
      let currentIndex = 0;
      let targetNode: Node | null = null;
      
      for (let i = 0; i < container.childNodes.length; i++) {
        const node = container.childNodes[i];
        if (currentIndex === segmentIndex) {
          if (node.nodeType === Node.TEXT_NODE) {
            targetNode = node;
          }
          break;
        }
        currentIndex++;
      }
      
      if (targetNode && targetNode.nodeType === Node.TEXT_NODE) {
        const range = document.createRange();
        const clampedOffset = Math.min(offset, targetNode.textContent?.length || 0);
        try {
          range.setStart(targetNode, clampedOffset);
          range.setEnd(targetNode, clampedOffset);
          selection?.removeAllRanges();
          selection?.addRange(range);
        } catch (e) {
          // Couldn't restore cursor
        }
      }
      
      shouldPreserveCursorRef.current = false;
      savedCursorPositionRef.current = null;
    }
  }, [segments]);

  const handleRemoveChip = (chipId: string) => {
    if (!containerRef.current) return;
    
    // Find the chip element
    const chipElement = containerRef.current.querySelector(`[data-chip-id="${chipId}"]`);
    if (!chipElement) return;
    
    // Find where to place cursor
    const prevNode = chipElement.previousSibling;
    const nextNode = chipElement.nextSibling;
    let targetNode: Node;
    let targetOffset: number;
    
    if (prevNode && prevNode.nodeType === Node.TEXT_NODE) {
      // Place cursor at end of previous text
      targetNode = prevNode;
      targetOffset = prevNode.textContent?.length || 0;
    } else if (nextNode && nextNode.nodeType === Node.TEXT_NODE) {
      // Place cursor at start of next text
      targetNode = nextNode;
      targetOffset = 0;
    } else {
      // Create a new text node where the chip was
      targetNode = document.createTextNode('');
      chipElement.parentNode?.insertBefore(targetNode, chipElement);
      targetOffset = 0;
    }
    
    // Remove the chip from DOM
    chipElement.remove();
    
    // Merge adjacent text nodes
    containerRef.current.normalize();
    
    // Store cursor position
    cursorRestoreRef.current = { node: targetNode, offset: targetOffset };
    isRemovingChipRef.current = true;
    
    // Update segments
    const newSegments = segments.filter(seg => seg.id !== chipId);
    
    // Consolidate adjacent text segments
    const consolidatedSegments: TextSegment[] = [];
    for (let i = 0; i < newSegments.length; i++) {
      const current = newSegments[i];
      if (current.type === 'text' && consolidatedSegments.length > 0 && consolidatedSegments[consolidatedSegments.length - 1].type === 'text') {
        consolidatedSegments[consolidatedSegments.length - 1].content += current.content;
      } else {
        consolidatedSegments.push(current);
      }
    }
    
    // Ensure at least one text segment
    if (consolidatedSegments.length === 0) {
      consolidatedSegments.push({ type: 'text', content: '' });
    }
    
    onSegmentsChange(consolidatedSegments);
  };

  const handleInput = () => {
    if (!containerRef.current) return;

    // Mark that we want to preserve cursor position (unless skipping DOM rebuild)
    if (!skipDOMRebuildRef.current) {
      shouldPreserveCursorRef.current = true;
    }

    const container = containerRef.current;
    const newSegments: TextSegment[] = [];
    
    // Helper function to recursively extract text and chips
    const extractContent = (node: Node) => {
      if (node.nodeType === Node.ELEMENT_NODE) {
        const element = node as HTMLElement;
        const chipId = element.getAttribute('data-chip-id');
        if (chipId) {
          // This is a chip
          const chipText = element.querySelector('span')?.textContent || '';
          newSegments.push({
            type: 'chip',
            content: chipText,
            id: chipId
          });
        } else if (element.tagName === 'BR') {
          // Handle line break
          if (newSegments.length > 0 && newSegments[newSegments.length - 1].type === 'text') {
            newSegments[newSegments.length - 1].content += '\n';
          } else {
            newSegments.push({
              type: 'text',
              content: '\n'
            });
          }
        } else if (element.tagName === 'DIV') {
          // Handle div elements (some browsers use divs for line breaks)
          // Add newline before processing children
          if (newSegments.length > 0) {
            if (newSegments[newSegments.length - 1].type === 'text') {
              newSegments[newSegments.length - 1].content += '\n';
            } else {
              newSegments.push({
                type: 'text',
                content: '\n'
              });
            }
          }
          // Process children
          element.childNodes.forEach(child => extractContent(child));
        } else {
          // Process children of other elements
          element.childNodes.forEach(child => extractContent(child));
        }
      } else if (node.nodeType === Node.TEXT_NODE) {
        // This is text
        const text = node.textContent || '';
        if (newSegments.length > 0 && newSegments[newSegments.length - 1].type === 'text') {
          newSegments[newSegments.length - 1].content += text;
        } else {
          newSegments.push({
            type: 'text',
            content: text
          });
        }
      }
    };
    
    container.childNodes.forEach(node => extractContent(node));

    onSegmentsChange(newSegments);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Handle Undo (Ctrl+Z / Cmd+Z)
    if ((e.ctrlKey || e.metaKey) && e.key === 'z' && !e.shiftKey) {
      e.preventDefault();
      onUndo?.();
      return;
    }

    // Handle Redo (Ctrl+Shift+Z / Cmd+Shift+Z or Ctrl+Y)
    if (((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'z') || (e.ctrlKey && e.key === 'y')) {
      e.preventDefault();
      onRedo?.();
      return;
    }

    // Handle Select All (Ctrl+A / Cmd+A)
    if ((e.ctrlKey || e.metaKey) && e.key === 'a') {
      if (!containerRef.current) return;
      e.preventDefault();
      
      const range = document.createRange();
      range.selectNodeContents(containerRef.current);
      const selection = window.getSelection();
      selection?.removeAllRanges();
      selection?.addRange(range);
      return;
    }

    // Handle Copy (Ctrl+C / Cmd+C)
    if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;
      
      // Let browser handle the copy naturally
      return;
    }

    // Handle Cut (Ctrl+X / Cmd+X)
    if ((e.ctrlKey || e.metaKey) && e.key === 'x') {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed) return;
      
      // Let browser handle the copy part, then delete the selection
      setTimeout(() => {
        if (!containerRef.current) return;
        const sel = window.getSelection();
        if (sel && !sel.isCollapsed) {
          sel.deleteFromDocument();
          handleInput();
        }
      }, 0);
      return;
    }

    // Handle Enter key - let browser create the line break, then sync
    if (e.key === 'Enter') {
      // Don't prevent default - let browser handle the line break
      // We'll sync the segments after the browser updates the DOM
      skipDOMRebuildRef.current = true;
      setTimeout(() => {
        handleInput();
      }, 0);
      return;
    }

    if (e.key === 'Backspace') {
      const selection = window.getSelection();
      if (!selection || !containerRef.current || selection.rangeCount === 0) return;

      const range = selection.getRangeAt(0);
      if (range.collapsed && range.startOffset === 0) {
        // Check if previous sibling is a chip
        const node = range.startContainer;
        let previousNode = node.previousSibling;
        
        if (!previousNode && node.parentNode !== containerRef.current) {
          previousNode = node.parentNode?.previousSibling || null;
        }

        if (previousNode && previousNode.nodeType === Node.ELEMENT_NODE) {
          const element = previousNode as HTMLElement;
          const chipId = element.getAttribute('data-chip-id');
          if (chipId) {
            e.preventDefault();
            handleRemoveChip(chipId);
          }
        }
      }
    }
  };

  const textColor = isFocused ? 'text-white' : 'text-[rgba(255,255,255,0.6)]';

  return (
    <div 
      ref={containerRef}
      contentEditable
      onInput={handleInput}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={handleKeyDown}
      className={`w-full min-h-[44px] font-['Mona_Sans:Regular',sans-serif] font-normal leading-[1.35] not-italic text-[16px] transition-colors duration-200 ${textColor} outline-none whitespace-pre-wrap break-words`}
      style={{ fontVariationSettings: "'wdth' 100", wordWrap: 'break-word' }}
      data-placeholder={segments.length === 1 && segments[0].type === 'text' && segments[0].content === '' ? "I'm excited to support you. Take your time, stay consistent, and I'll help you move forward step by step." : ""}
    />
  );
}

function Frame4({ segments, setSegments, savedSegments }: { segments: TextSegment[]; setSegments: (segments: TextSegment[]) => void; savedSegments: TextSegment[] }) {
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const editableRef = useRef<HTMLDivElement>(null);
  const pendingCursorAfterChipRef = useRef<string | null>(null);
  const pendingCursorPositionRef = useRef<{ segmentIndex: number; offset: number } | null>(null);
  const savedRangeRef = useRef<{ startContainer: Node; startOffset: number; endContainer: Node; endOffset: number } | null>(null);
  
  // Undo/Redo history
  const historyRef = useRef<TextSegment[][]>([]);
  const historyIndexRef = useRef(-1);
  const isUndoRedoRef = useRef(false);
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only blur if clicking outside the entire container
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Initialize history when field becomes focused
  const handleFocus = () => {
    if (!isFocused) {
      // Reset history and store initial state
      historyRef.current = [JSON.parse(JSON.stringify(segments))];
      historyIndexRef.current = 0;
      setIsFocused(true);
    }
    
    // Save the range when field is focused
    saveCursorPosition();
  };

  // Save cursor position
  const saveCursorPosition = () => {
    if (!editableRef.current) return;
    
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0 && editableRef.current.contains(selection.anchorNode!)) {
      const range = selection.getRangeAt(0);
      savedRangeRef.current = {
        startContainer: range.startContainer,
        startOffset: range.startOffset,
        endContainer: range.endContainer,
        endOffset: range.endOffset
      };
    }
  };

  // Add to history when segments change (but not during undo/redo)
  useEffect(() => {
    if (!isFocused || isUndoRedoRef.current) {
      isUndoRedoRef.current = false;
      return;
    }

    // Only add to history if segments actually changed
    const lastHistoryState = historyRef.current[historyIndexRef.current];
    if (JSON.stringify(lastHistoryState) !== JSON.stringify(segments)) {
      // Remove any future history if we're not at the end
      historyRef.current = historyRef.current.slice(0, historyIndexRef.current + 1);
      
      // Add new state
      historyRef.current.push(JSON.parse(JSON.stringify(segments)));
      historyIndexRef.current++;
      
      // Limit history to 50 states
      if (historyRef.current.length > 50) {
        historyRef.current.shift();
        historyIndexRef.current--;
      }
    }
  }, [segments, isFocused]);

  const handleUndo = () => {
    if (historyIndexRef.current > 0) {
      historyIndexRef.current--;
      isUndoRedoRef.current = true;
      setSegments(JSON.parse(JSON.stringify(historyRef.current[historyIndexRef.current])));
    }
  };

  const handleRedo = () => {
    if (historyIndexRef.current < historyRef.current.length - 1) {
      historyIndexRef.current++;
      isUndoRedoRef.current = true;
      setSegments(JSON.parse(JSON.stringify(historyRef.current[historyIndexRef.current])));
    }
  };

  // Effect to set cursor after chip insertion or removal
  useEffect(() => {
    if (pendingCursorAfterChipRef.current && editableRef.current) {
      const chipId = pendingCursorAfterChipRef.current;
      const chipElement = editableRef.current.querySelector(`[data-chip-id="${chipId}"]`);
      
      if (chipElement) {
        const range = document.createRange();
        const selection = window.getSelection();
        
        // Find the next text node after the chip
        let nextNode = chipElement.nextSibling;
        if (nextNode && nextNode.nodeType === Node.TEXT_NODE) {
          range.setStart(nextNode, 0);
          range.setEnd(nextNode, 0);
        } else {
          // If no text node after, create one
          const textNode = document.createTextNode('\u200B');
          chipElement.parentNode?.insertBefore(textNode, chipElement.nextSibling);
          range.setStart(textNode, 0);
          range.setEnd(textNode, 0);
        }
        
        selection?.removeAllRanges();
        selection?.addRange(range);
        
        editableRef.current.focus();
      }
      
      pendingCursorAfterChipRef.current = null;
    } else if (pendingCursorPositionRef.current && editableRef.current) {
      // Position cursor after chip removal
      const { segmentIndex, offset } = pendingCursorPositionRef.current;
      const range = document.createRange();
      const selection = window.getSelection();
      
      let currentIndex = 0;
      let targetNode: Node | null = null;
      
      for (let i = 0; i < editableRef.current.childNodes.length; i++) {
        const node = editableRef.current.childNodes[i];
        if (currentIndex === segmentIndex) {
          targetNode = node;
          break;
        }
        currentIndex++;
      }
      
      if (targetNode && targetNode.nodeType === Node.TEXT_NODE) {
        const clampedOffset = Math.min(offset, targetNode.textContent?.length || 0);
        range.setStart(targetNode, clampedOffset);
        range.setEnd(targetNode, clampedOffset);
        selection?.removeAllRanges();
        selection?.addRange(range);
        editableRef.current.focus();
      } else if (editableRef.current.childNodes.length > 0) {
        // Fallback: find first text node
        for (let i = 0; i < editableRef.current.childNodes.length; i++) {
          const node = editableRef.current.childNodes[i];
          if (node.nodeType === Node.TEXT_NODE) {
            range.setStart(node, 0);
            range.setEnd(node, 0);
            selection?.removeAllRanges();
            selection?.addRange(range);
            editableRef.current.focus();
            break;
          }
        }
      }
      
      pendingCursorPositionRef.current = null;
    }
  }, [segments]);

  const handleRemoveChip = (chipId: string) => {
    if (!editableRef.current) return;
    
    // Find which segment index the chip is at
    const chipIndex = segments.findIndex(seg => seg.id === chipId);
    if (chipIndex === -1) return;
    
    // Determine where cursor should go after removal
    let targetSegmentIndex = chipIndex - 1;
    let targetOffset = 0;
    
    if (targetSegmentIndex >= 0 && segments[targetSegmentIndex].type === 'text') {
      // Place at end of previous text segment
      targetOffset = segments[targetSegmentIndex].content.length;
    } else if (chipIndex + 1 < segments.length && segments[chipIndex + 1].type === 'text') {
      // Place at start of next text segment
      targetSegmentIndex = chipIndex;
      targetOffset = 0;
    } else {
      // No adjacent text, we'll create one
      targetSegmentIndex = chipIndex;
      targetOffset = 0;
    }
    
    const newSegments = segments.filter(seg => seg.id !== chipId);
    
    // Consolidate adjacent text segments
    const consolidatedSegments: TextSegment[] = [];
    for (let i = 0; i < newSegments.length; i++) {
      const current = newSegments[i];
      if (current.type === 'text' && consolidatedSegments.length > 0 && consolidatedSegments[consolidatedSegments.length - 1].type === 'text') {
        consolidatedSegments[consolidatedSegments.length - 1].content += current.content;
      } else {
        consolidatedSegments.push(current);
      }
    }
    
    // If no segments or only empty text, add a text segment
    if (consolidatedSegments.length === 0 || (consolidatedSegments.length === 1 && consolidatedSegments[0].type === 'text' && consolidatedSegments[0].content === '')) {
      consolidatedSegments.length = 0;
      consolidatedSegments.push({ type: 'text', content: '' });
      targetSegmentIndex = 0;
      targetOffset = 0;
    }
    
    // Adjust target index if chip was before target
    if (chipIndex < targetSegmentIndex) {
      targetSegmentIndex--;
    }
    
    pendingCursorPositionRef.current = { segmentIndex: targetSegmentIndex, offset: targetOffset };
    setSegments(consolidatedSegments);
  };

  const insertVariable = (variable: string) => {
    if (!editableRef.current) return;

    // Focus the editable div first
    editableRef.current.focus();

    // Restore or create range in the editable field
    let range: Range;
    const selection = window.getSelection();
    
    // Check if there's a valid selection within editableRef
    if (selection && selection.rangeCount > 0 && editableRef.current.contains(selection.anchorNode!)) {
      range = selection.getRangeAt(0);
    } else if (savedRangeRef.current && editableRef.current.contains(savedRangeRef.current.startContainer)) {
      // Restore saved range
      range = document.createRange();
      try {
        range.setStart(savedRangeRef.current.startContainer, savedRangeRef.current.startOffset);
        range.setEnd(savedRangeRef.current.endContainer, savedRangeRef.current.endOffset);
      } catch (e) {
        // If restore fails, default to end of content
        range.selectNodeContents(editableRef.current);
        range.collapse(false);
      }
    } else {
      // Default: insert at end
      range = document.createRange();
      range.selectNodeContents(editableRef.current);
      range.collapse(false); // Collapse to end
    }

    const chipId = `chip-${Date.now()}-${Math.random()}`;
    
    // Create the chip element with new style
    const chipSpan = document.createElement('span');
    chipSpan.className = 'inline-flex items-center gap-[2px] bg-[#032e15] rounded-[6px] pl-[6px] pr-[2px] py-[2px] text-[#05df72] text-[12px] ml-[4px] mr-[4px] my-[1.5px] whitespace-nowrap relative';
    chipSpan.contentEditable = 'false';
    chipSpan.setAttribute('data-chip-id', chipId);
    chipSpan.style.border = '1px solid #05df72';
    
    const textSpan = document.createElement('span');
    textSpan.className = "font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic";
    textSpan.style.fontVariationSettings = "'wdth' 100";
    textSpan.textContent = variable;
    
    const button = document.createElement('button');
    button.className = 'rounded-full p-[2px] text-[#05df72]';
    button.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>';
    button.onclick = (e) => {
      e.preventDefault();
      e.stopPropagation();
      // Trigger a re-sync
      const event = new Event('input', { bubbles: true });
      editableRef.current?.dispatchEvent(event);
    };
    
    chipSpan.appendChild(textSpan);
    chipSpan.appendChild(button);

    // Delete any selected content
    range.deleteContents();
    
    // Insert the chip
    range.insertNode(chipSpan);
    
    // Insert a zero-width space after the chip
    const textNode = document.createTextNode('\u200B');
    range.setStartAfter(chipSpan);
    range.collapse(true);
    range.insertNode(textNode);

    // Update selection to position after the inserted content
    selection?.removeAllRanges();
    selection?.addRange(range);

    // Mark that we want cursor after this chip
    pendingCursorAfterChipRef.current = chipId;

    // Trigger input event to sync segments
    const event = new Event('input', { bubbles: true });
    editableRef.current.dispatchEvent(event);
  };

  const variables = [
    "Client's first name",
    "Client's full name",
    "Coach's first name",
    "Coach's full name",
    "Organization name",
    "Coach booking link"
  ];
  
  return (
    <div ref={containerRef} className="bg-[#404045] relative rounded-[8px] shrink-0 w-full overflow-hidden">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pt-[12px] px-[16px] pb-[12px] relative w-full">
          <Frame6 
            segments={segments} 
            onSegmentsChange={setSegments} 
            isFocused={isFocused} 
            onFocus={handleFocus} 
            onBlur={() => {
              // Save cursor position before blur
              saveCursorPosition();
            }}
            onCursorChange={saveCursorPosition}
            containerRef={editableRef}
            onUndo={handleUndo}
            onRedo={handleRedo}
          />
          {/* Personalize section - Only show when focused */}
          {isFocused && (
            <div className="bg-[#36363a] relative rounded-[12px] w-full mt-[24px]">
              <div className="size-full">
                <div className="content-stretch flex flex-col gap-[12px] items-start overflow-clip p-[16px] relative size-full">
                  <div className="flex flex-col font-['Mona_Sans:Medium',sans-serif] font-medium justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-nowrap text-white" style={{ fontVariationSettings: "'wdth' 100" }}>
                    <p className="leading-none">Personalize</p>
                  </div>
                  <div className="content-start flex flex-wrap gap-x-[6px] gap-y-[5px] items-start relative shrink-0 w-full">
                    {variables.map((variable) => (
                      <button
                        key={variable}
                        onMouseDown={(e) => {
                          // Prevent blur when clicking the chip
                          e.preventDefault();
                        }}
                        onClick={() => insertVariable(variable)}
                        className="bg-[#032e15] relative inline-flex items-center rounded-[6px] px-[6px] py-[2px] text-[#05df72] text-[12px] cursor-pointer hover:bg-[#043a19] transition-colors"
                        style={{ border: '1px solid #05df72' }}
                      >
                        <span className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.43] not-italic" style={{ fontVariationSettings: "'wdth' 100" }}>{variable}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[12px]" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BaseInput({ segments, setSegments, savedSegments }: { segments: TextSegment[]; setSegments: (segments: TextSegment[]) => void; savedSegments: TextSegment[] }) {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-start relative shrink-0 w-full" data-name="base-input">
      <Frame5 />
      <Frame4 segments={segments} setSegments={setSegments} savedSegments={savedSegments} />
    </div>
  );
}

function Frame23({ segments, setSegments, savedSegments }: { segments: TextSegment[]; setSegments: (segments: TextSegment[]) => void; savedSegments: TextSegment[] }) {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <BaseInput segments={segments} setSegments={setSegments} savedSegments={savedSegments} />
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-[#3e4046] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(255,255,255,0.05)] border-solid inset-0 pointer-events-none rounded-[8px]" />
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.35] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Cancel
      </p>
    </div>
  );
}

function Button4({ onClick }: { onClick: () => void }) {
  return (
    <button 
      onClick={onClick}
      className="bg-[#3db2e0] content-stretch flex items-center justify-center p-[10px] relative rounded-[8px] shrink-0 cursor-pointer"
      data-name="Button"
    >
      <p className="font-['Mona_Sans:Medium',sans-serif] font-medium leading-[1.35] not-italic relative shrink-0 text-[16px] text-nowrap text-white tracking-[-0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        Save Settings
      </p>
    </button>
  );
}

function ButtonGroup({ onSave }: { onSave: () => void }) {
  return (
    <div className="content-stretch flex gap-[12px] items-center justify-end relative shrink-0 w-full" data-name="button-group">
      <Button3 />
      <Button4 onClick={onSave} />
    </div>
  );
}

function MainContent() {
  const [segments, setSegments] = useState<TextSegment[]>([
    { type: 'text', content: "I'm excited to support you. Take your time, stay consistent, and I'll help you move forward step by step." }
  ]);
  const [savedSegments, setSavedSegments] = useState<TextSegment[]>([
    { type: 'text', content: "I'm excited to support you. Take your time, stay consistent, and I'll help you move forward step by step." }
  ]);

  const handleSave = () => {
    setSavedSegments(segments);
    toast.success('Saved', {
      style: {
        background: '#22c55e',
        color: 'white',
        border: 'none',
      },
      position: 'bottom-left',
    });
  };

  return (
    <div className="col-span-6">
      <div className="bg-[#27272a] content-stretch flex flex-col gap-[40px] items-start p-[24px] rounded-[4px] w-full">
        <p className="font-['Mona_Sans:SemiBold',sans-serif] font-semibold leading-[1.43] not-italic relative shrink-0 text-[24px] text-white tracking-[-0.25px]" style={{ fontVariationSettings: "'wdth' 100" }}>
          Invitation Settings
        </p>
        <Frame23 segments={segments} setSegments={setSegments} savedSegments={savedSegments} />
        <ButtonGroup onSave={handleSave} />
      </div>
    </div>
  );
}

export default function InvitationSettingsCoach() {
  return (
    <div className="bg-[#171719] min-h-screen flex flex-col" data-name="Invitation Settings - Coach">
      {/* Nav - Full width (12 columns) */}
      <nav className="w-full px-[24px] py-[11px]">
        <HeaderNav />
      </nav>

      {/* Main content area with 12-column grid */}
      <div className="flex-1 px-[24px] pt-[24px]">
        <div className="grid grid-cols-12 gap-[24px]">
          {/* Sidebar - 3 columns */}
          <Sidebar />

          {/* Main content - 6 columns */}
          <MainContent />
        </div>
      </div>

      <Toaster />
    </div>
  );
}