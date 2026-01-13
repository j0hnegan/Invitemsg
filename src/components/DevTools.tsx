import { useState, useEffect, useRef } from 'react';
import { Copy, Eye, Check } from 'lucide-react';

interface ElementInfo {
  element: HTMLElement;
  tagName: string;
  id: string | null;
  classes: string[];
  inlineStyles: { [key: string]: string };
  computedStyles: { [key: string]: string };
}

export default function DevTools() {
  const [devMode, setDevMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState<ElementInfo | null>(null);
  const [isMinimized, setIsMinimized] = useState(false);
  const [hoveredElement, setHoveredElement] = useState<HTMLElement | null>(null);
  // Calculate initial position: 24px above the toggle button (which is at bottom: 24, left: 24)
  const [panelPosition, setPanelPosition] = useState({ x: 24, y: 24 + 24 }); // x = left, y = bottom (24px above button)
  const [panelSize, setPanelSize] = useState({ width: 384, height: 500 });
  const [isDragging, setIsDragging] = useState(false);
  const [isResizing, setIsResizing] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [resizeStart, setResizeStart] = useState({ x: 0, y: 0, width: 0, height: 0, posX: 0, posY: 0 });
  const panelRef = useRef<HTMLDivElement>(null);
  const [copyFeedback, setCopyFeedback] = useState<{ id: string; x: number; y: number } | null>(null);
  const [copyAllSuccess, setCopyAllSuccess] = useState(false);

  // #region agent log
  // Hypotheses:
  // H1: DevTools file with new UI is not the one actually rendered
  // H2: DevTools renders but devMode / selection logic never reaches new sections
  // H3: Inline styles list is empty so section never shows
  useEffect(() => {
    // Log initial mount of DevTools
    fetch('http://127.0.0.1:7242/ingest/b771fefe-8684-447a-8fdf-ec0033aba64b', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        sessionId: 'debug-session',
        runId: 'pre-fix',
        hypothesisId: 'H1',
        location: 'src/components/DevTools.tsx:mount',
        message: 'DevTools mounted',
        data: {},
        timestamp: Date.now()
      })
    }).catch(() => {});
  }, []);
  // #endregion

  const keyStyles = [
    'display', 'position', 'width', 'height', 'margin', 'padding', 
    'background', 'background-color', 'color', 'font-family', 
    'font-size', 'font-weight', 'line-height', 'border', 'border-radius', 
    'flex', 'flex-direction', 'justify-content', 'align-items', 'gap', 
    'z-index', 'opacity'
  ];

  const getElementInfo = (element: HTMLElement): ElementInfo => {
    const computed = window.getComputedStyle(element);
    const inlineStyles: { [key: string]: string } = {};
    const computedStyles: { [key: string]: string } = {};

    if (element.style.length > 0) {
      for (let i = 0; i < element.style.length; i++) {
        const prop = element.style[i];
        inlineStyles[prop] = element.style.getPropertyValue(prop);
      }
    }

    for (let i = 0; i < computed.length; i++) {
      const prop = computed[i];
      computedStyles[prop] = computed.getPropertyValue(prop);
    }

    return {
      element,
      tagName: element.tagName.toLowerCase(),
      id: element.id || null,
      classes: Array.from(element.classList || []),
      inlineStyles,
      computedStyles
    };
  };

  const copyToClipboard = async (text: string, buttonRef?: React.RefObject<HTMLButtonElement>) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = text;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }
    
    // Show feedback animation
    if (buttonRef?.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const id = `copy-${Date.now()}-${Math.random()}`;
      setCopyFeedback({ id, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      setTimeout(() => setCopyFeedback(null), 1500);
    }
  };

  const getSelector = (element: HTMLElement): string => {
    if (element.id) return `#${element.id}`;
    const classes = Array.from(element.classList || []).filter(c => c);
    if (classes.length > 0) return `${element.tagName.toLowerCase()}.${classes.join('.')}`;
    return element.tagName.toLowerCase();
  };

  useEffect(() => {
    if (!devMode) {
      setSelectedElement(null);
      if (hoveredElement) {
        hoveredElement.style.outline = '';
        hoveredElement.style.outlineOffset = '';
        setHoveredElement(null);
      }
      return;
    }

    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-devtools]')) return;
      e.preventDefault();
      e.stopPropagation();
      setSelectedElement(getElementInfo(target));
    };

    const handleMouseMove = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('[data-devtools]')) {
        if (hoveredElement) {
          hoveredElement.style.outline = '';
          hoveredElement.style.outlineOffset = '';
          setHoveredElement(null);
        }
        return;
      }
      if (target !== hoveredElement) {
        if (hoveredElement) {
          hoveredElement.style.outline = '';
          hoveredElement.style.outlineOffset = '';
        }
        target.style.outline = '2px solid #3b82f6';
        target.style.outlineOffset = '2px';
        setHoveredElement(target);
      }
    };

    document.addEventListener('click', handleClick, true);
    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('click', handleClick, true);
      document.removeEventListener('mousemove', handleMouseMove);
      if (hoveredElement) {
        hoveredElement.style.outline = '';
        hoveredElement.style.outlineOffset = '';
      }
    };
  }, [devMode, hoveredElement]);

  const keyStylesFiltered = selectedElement 
    ? keyStyles
        .map(prop => ({ prop, value: selectedElement.computedStyles[prop] }))
        .filter(({ value }) => value && value !== 'none' && value !== '0px' && value !== 'normal')
    : [];

  // Filter inline styles to exclude outline styles added by inspector
  const inlineStylesFiltered = selectedElement
    ? Object.entries(selectedElement.inlineStyles).filter(([prop]) => 
        !prop.startsWith('outline') && prop !== 'outline-offset'
      )
    : [];

  // #region agent log
  // Debug: Verify new code is loaded and what sections should render
  useEffect(() => {
    if (selectedElement) {
      console.log('🔍 DevTools: New version loaded with copy buttons and Inline Styles section');
      console.log('📊 inlineStylesFiltered.length:', inlineStylesFiltered.length, 'inlineStylesFiltered:', inlineStylesFiltered);
      console.log('📊 keyStylesFiltered.length:', keyStylesFiltered.length);
      console.log('📊 Should show Inline Styles section?', inlineStylesFiltered.length > 0);
      console.log('📊 Should show Copy All Styles button?', true); // Always true
      fetch('http://127.0.0.1:7242/ingest/b771fefe-8684-447a-8fdf-ec0033aba64b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: 'debug-session',
          runId: 'pre-fix',
          hypothesisId: 'H3',
          location: 'src/components/DevTools.tsx:renderCheck',
          message: 'Render check - filtered arrays at render time',
          data: {
            inlineStylesFilteredLength: inlineStylesFiltered.length,
            keyStylesFilteredLength: keyStylesFiltered.length,
            inlineStylesFilteredSample: inlineStylesFiltered.slice(0, 3).map(([p]) => p),
            keyStylesFilteredSample: keyStylesFiltered.slice(0, 3).map(({ prop }) => prop),
            allInlineStyleKeys: Object.keys(selectedElement.inlineStyles || {}),
            filteredInlineStyleKeys: inlineStylesFiltered.map(([p]) => p)
          },
          timestamp: Date.now()
        })
      }).catch(() => {});
      fetch('http://127.0.0.1:7242/ingest/b771fefe-8684-447a-8fdf-ec0033aba64b', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          sessionId: 'debug-session',
          runId: 'pre-fix',
          hypothesisId: 'H2',
          location: 'src/components/DevTools.tsx:selectedElement',
          message: 'Element selected in DevTools',
          data: {
            tagName: selectedElement.tagName,
            id: selectedElement.id,
            classCount: selectedElement.classes.length,
            inlineStyleCount: selectedElement.inlineStyles ? Object.keys(selectedElement.inlineStyles).length : 0,
            keyStyleCount: keyStylesFiltered.length
          },
          timestamp: Date.now()
        })
      }).catch(() => {});
    }
  }, [selectedElement, keyStylesFiltered.length, inlineStylesFiltered.length]);
  // #endregion

  // Copy handlers
  const inlineStylesCopyRef = useRef<HTMLButtonElement>(null);
  const keyStylesCopyRef = useRef<HTMLButtonElement>(null);
  const copyAllStylesRef = useRef<HTMLButtonElement>(null);
  const individualCopyRefs = useRef<{ [key: string]: HTMLButtonElement | null }>({});

  const getIndividualCopyRef = (key: string) => {
    return (element: HTMLButtonElement | null) => {
      individualCopyRefs.current[key] = element;
    };
  };

  const getIndividualCopyButton = (key: string): HTMLButtonElement | null => {
    return individualCopyRefs.current[key] || null;
  };

  const handleCopyInlineStyles = async () => {
    if (!selectedElement) return;
    const stylesText = inlineStylesFiltered
      .map(([prop, value]) => `${prop}: ${value};`)
      .join('\n');
    await copyToClipboard(stylesText, inlineStylesCopyRef);
  };

  const handleCopyKeyStyles = async () => {
    if (!selectedElement) return;
    const stylesText = keyStylesFiltered
      .map(({ prop, value }) => `${prop}: ${value};`)
      .join('\n');
    await copyToClipboard(stylesText, keyStylesCopyRef);
  };

  const handleCopyAllStyles = async () => {
    if (!selectedElement) return;
    const parts: string[] = [];
    
    // HTML tag
    parts.push(`<${selectedElement.tagName}>`);
    
    // Utility classes
    if (selectedElement.classes.length > 0) {
      parts.push(selectedElement.classes.map(cls => `.${cls}`).join(' '));
    }
    
    // Inline styles
    if (inlineStylesFiltered.length > 0) {
      parts.push('\n/* Inline Styles */');
      parts.push(inlineStylesFiltered.map(([prop, value]) => `${prop}: ${value};`).join('\n'));
    }
    
    // Key styles
    if (keyStylesFiltered.length > 0) {
      parts.push('\n/* Key Styles */');
      parts.push(keyStylesFiltered.map(({ prop, value }) => `${prop}: ${value};`).join('\n'));
    }
    
    // Don't pass ref - we handle the success state ourselves for this button
    await copyToClipboard(parts.join('\n'));
    
    // Show success state
    setCopyAllSuccess(true);
    setTimeout(() => setCopyAllSuccess(false), 2000);
  };

  const handleCopyIndividualStyle = async (prop: string, value: string, key: string) => {
    const button = getIndividualCopyButton(key);
    if (button) {
      const rect = button.getBoundingClientRect();
      const id = `copy-${Date.now()}-${Math.random()}`;
      setCopyFeedback({ id, x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 });
      setTimeout(() => setCopyFeedback(null), 1500);
    }
    await copyToClipboard(`${prop}: ${value};`);
  };

  // Drag handlers
  const handleDragStart = (e: React.MouseEvent) => {
    if (isResizing) return;
    setIsDragging(true);
    setDragStart({
      x: e.clientX - panelPosition.x,
      y: window.innerHeight - e.clientY - panelPosition.y
    });
  };

  const handleDrag = (e: MouseEvent) => {
    if (!isDragging) return;
    const newX = e.clientX - dragStart.x;
    const newY = window.innerHeight - e.clientY - dragStart.y;
    const maxX = window.innerWidth - panelSize.width;
    const maxY = window.innerHeight - 24 - 24; // 24px for button, 24px gap above button
    const minY = 24 + 24; // Keep 24px above the toggle button
    setPanelPosition({
      x: Math.max(0, Math.min(newX, maxX)),
      y: Math.max(minY, Math.min(newY, maxY))
    });
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

  // Resize handlers
  const resizeEdgeRef = useRef<string>('');
  
  const handleResizeStart = (e: React.MouseEvent, edge: string) => {
    e.stopPropagation();
    setIsResizing(true);
    resizeEdgeRef.current = edge;
    setResizeStart({
      x: e.clientX,
      y: e.clientY,
      width: panelSize.width,
      height: panelSize.height,
      posX: panelPosition.x,
      posY: panelPosition.y
    });
  };

  const handleResize = (e: MouseEvent) => {
    if (!isResizing) return;
    const deltaX = e.clientX - resizeStart.x;
    const deltaY = e.clientY - resizeStart.y;
    const maxWidth = window.innerWidth - resizeStart.posX;
    const maxHeight = window.innerHeight - resizeStart.posY - 24; // 24px gap above button
    const minWidth = 280;
    const minHeight = 200;
    
    let newWidth = resizeStart.width;
    let newHeight = resizeStart.height;
    let newX = resizeStart.posX;
    let newY = resizeStart.posY;
    
    const edge = resizeEdgeRef.current;
    
    if (edge.includes('right')) {
      newWidth = Math.max(minWidth, Math.min(resizeStart.width + deltaX, maxWidth));
    }
    if (edge.includes('left')) {
      const widthChange = resizeStart.width - deltaX;
      if (widthChange >= minWidth && resizeStart.posX + deltaX >= 0) {
        newWidth = widthChange;
        newX = resizeStart.posX + deltaX;
      }
    }
    if (edge.includes('bottom')) {
      newHeight = Math.max(minHeight, Math.min(resizeStart.height - deltaY, maxHeight));
    }
    if (edge.includes('top')) {
      const heightChange = resizeStart.height + deltaY;
      const minY = 24 + 24; // Keep 24px above the toggle button
      if (heightChange >= minHeight && resizeStart.posY - deltaY >= minY) {
        newHeight = heightChange;
        newY = resizeStart.posY - deltaY;
      }
    }
    
    setPanelSize({ width: newWidth, height: newHeight });
    setPanelPosition({ x: newX, y: newY });
  };

  const handleResizeEnd = () => {
    setIsResizing(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent) => handleDrag(e);
      const handleMouseUp = () => handleDragEnd();
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragStart, panelPosition, panelSize]);

  useEffect(() => {
    if (isResizing) {
      const handleMouseMove = (e: MouseEvent) => handleResize(e);
      const handleMouseUp = () => handleResizeEnd();
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isResizing, resizeStart, panelPosition, panelSize]);

  return (
    <>
      {/* Copy Feedback Animation */}
      {copyFeedback && (
        <div
          key={copyFeedback.id}
          style={{
            position: 'fixed',
            left: copyFeedback.x,
            top: copyFeedback.y,
            transform: 'translate(-50%, -50%)',
            zIndex: 10000,
            pointerEvents: 'none',
            animation: 'floatUp 1s ease-out forwards'
          }}
        >
          <div style={{
            backgroundColor: '#22c55e',
            borderRadius: '50%',
            padding: 6,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(34, 197, 94, 0.5)'
          }}>
            <Check style={{ width: 16, height: 16, color: 'white' }} />
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        data-devtools="toggle"
        onClick={() => setDevMode(prev => !prev)}
        className="flex items-center gap-[6px] rounded-[8px]"
        style={{
          position: 'fixed',
          bottom: 24,
          left: 24,
          zIndex: 9999,
          background: 'linear-gradient(to right, #5127c4, #9f27c4)',
          boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
          padding: '6px 8px 6px 12px',
          outline: 'none',
          border: 'none',
          gap: '6px'
        }}
        onFocus={(e) => e.target.style.outline = 'none'}
      >
        <span style={{ color: '#fff', fontSize: 14, fontWeight: 500 }}>Dev Mode</span>
        <div
          aria-label="Dev mode toggle"
          className="relative rounded-full transition-colors"
          style={{
            width: 40,
            height: 20,
            backgroundColor: devMode ? '#c87ce4' : 'rgba(255, 255, 255, 0.4)',
            border: 'none'
          }}
        >
          <div
            className="absolute rounded-full transition-transform"
            style={{
              top: 2,
              width: 16,
              height: 16,
              backgroundColor: '#fff',
              transform: devMode ? 'translateX(22px)' : 'translateX(2px)'
            }}
          />
        </div>
      </button>

      {/* Inspector Panel */}
      {devMode && !isMinimized && (
        <div
          ref={panelRef}
          data-devtools="panel"
          style={{
            position: 'fixed',
            left: panelPosition.x,
            bottom: panelPosition.y,
            width: panelSize.width,
            height: panelSize.height,
            maxHeight: typeof window !== 'undefined' ? window.innerHeight - panelPosition.y - 24 : 'none',
            zIndex: 9998,
            backgroundColor: 'rgba(24, 24, 27, 0.95)',
            backdropFilter: 'blur(28px)',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            color: '#fff',
            fontSize: 12,
            cursor: isDragging ? 'grabbing' : 'default',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            borderRadius: 8,
            border: '1px solid rgba(255,255,255,0.2)'
          }}
        >
          {/* Resize handles - must be above drag handle */}
          {/* Top edge */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: 4,
              cursor: 'ns-resize',
              zIndex: 20
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleResizeStart(e, 'top');
            }}
          />
          {/* Right edge */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              bottom: 0,
              width: 4,
              cursor: 'ew-resize',
              zIndex: 20
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleResizeStart(e, 'right');
            }}
          />
          {/* Bottom edge */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: 4,
              cursor: 'ns-resize',
              zIndex: 20
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleResizeStart(e, 'bottom');
            }}
          />
          {/* Left edge */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              bottom: 0,
              width: 4,
              cursor: 'ew-resize',
              zIndex: 20
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleResizeStart(e, 'left');
            }}
          />
          {/* Corners */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: 8,
              height: 8,
              cursor: 'nwse-resize',
              zIndex: 21
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleResizeStart(e, 'top-left');
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: 0,
              right: 0,
              width: 8,
              height: 8,
              cursor: 'nesw-resize',
              zIndex: 21
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleResizeStart(e, 'top-right');
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: 8,
              height: 8,
              cursor: 'nesw-resize',
              zIndex: 21
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleResizeStart(e, 'bottom-left');
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0,
              width: 8,
              height: 8,
              cursor: 'nwse-resize',
              zIndex: 21
            }}
            onMouseDown={(e) => {
              e.stopPropagation();
              handleResizeStart(e, 'bottom-right');
            }}
          />
          {/* Header - Element Inspector */}
          <div
            style={{
              paddingTop: 4,
              paddingBottom: 4,
              paddingLeft: 16,
              paddingRight: 16,
              backgroundColor: 'rgba(32, 32, 35, 0.95)', // 10% lighter than panel bg
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              cursor: isDragging ? 'grabbing' : 'move',
              position: 'relative',
              zIndex: 12,
              pointerEvents: isResizing ? 'none' : 'auto',
              userSelect: 'none'
            }}
            onMouseDown={(e) => {
              if (!isResizing) {
                handleDragStart(e);
              }
            }}
          >
            <div
              style={{
                color: '#fff',
                fontSize: 12,
                fontWeight: 500
              }}
            >
              Element Inspector
            </div>
          </div>
          {/* Selected Element Header */}
          {selectedElement && (
            <div 
              className="bg-zinc-950 px-4 py-3 border-b border-zinc-800"
              style={{ position: 'relative', zIndex: 12 }}
            >
              <code
                className="text-white text-xs"
                style={{ fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace' }}
              >
                {getSelector(selectedElement.element)}
              </code>
            </div>
          )}

          {/* Content */}
          <div style={{ 
            flex: 1, 
            overflowY: 'auto', 
            padding: 16, 
            position: 'relative', 
            zIndex: 10,
            minHeight: 0 /* Important for flex child scrolling */
          }}>
            {!selectedElement ? (
              <div style={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                justifyContent: 'center', 
                textAlign: 'center',
                height: '100%', 
                minHeight: 300 
              }}>
                <div style={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16
                }}>
                  <Eye style={{ width: 24, height: 24, color: '#a1a1aa' }} />
                </div>
                <h3 style={{ color: 'white', fontSize: 14, fontWeight: 500, marginBottom: 8 }}>No Element Selected</h3>
                <p style={{ color: '#a1a1aa', fontSize: 12 }}>Click any element to inspect</p>
              </div>
            ) : (
              <div>
                {/* Element Info */}
                <div style={{ paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 16 }}>
                  <div style={{ 
                    color: '#93c5fd', 
                    fontSize: 13, 
                    fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                    marginBottom: 8
                  }}>
                    &lt;{selectedElement.tagName}&gt;
                  </div>
                  {selectedElement.classes.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
                      {selectedElement.classes.map((cls, i) => (
                        <span
                          key={i}
                          style={{
                            color: '#fbbf24',
                            fontSize: 12,
                            fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            padding: '4px 8px',
                            borderRadius: 4
                          }}
                        >
                          .{cls}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                {/* Inline Styles */}
                {inlineStylesFiltered.length > 0 && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#a855f7', flexShrink: 0 }} />
                        <span style={{ color: 'white', fontSize: 13, fontWeight: 500 }}>Inline Styles</span>
                      </div>
                      <button
                        ref={inlineStylesCopyRef}
                        onClick={handleCopyInlineStyles}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                      >
                        <Copy style={{ width: 16, height: 16, color: '#a1a1aa' }} />
                      </button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {inlineStylesFiltered.map(([prop, value]) => {
                        const refKey = `inline-${prop}`;
                        return (
                          <div 
                            key={prop}
                            style={{ 
                              display: 'flex', 
                              alignItems: 'flex-start', 
                              justifyContent: 'space-between',
                              fontSize: 13,
                              fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                              lineHeight: 1.5
                            }}
                          >
                            <div style={{ flex: 1 }}>
                              <span style={{ color: '#d4a843' }}>{prop}</span>
                              <span style={{ color: '#9ca3af' }}> : </span>
                              <span style={{ color: '#d4a843' }}>{value}</span>
                              <span style={{ color: '#9ca3af' }}> ;</span>
                            </div>
                            <button
                              ref={getIndividualCopyRef(refKey)}
                              onClick={() => handleCopyIndividualStyle(prop, value, refKey)}
                              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, marginLeft: 8 }}
                            >
                              <Copy style={{ width: 14, height: 14, color: '#a1a1aa' }} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Key Styles */}
                {keyStylesFiltered.length > 0 && (
                  <div style={{ marginBottom: 16 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                        <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#3b82f6', flexShrink: 0 }} />
                        <span style={{ color: 'white', fontSize: 13, fontWeight: 500 }}>Key Styles</span>
                      </div>
                      <button
                        ref={keyStylesCopyRef}
                        onClick={handleCopyKeyStyles}
                        style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}
                      >
                        <Copy style={{ width: 16, height: 16, color: '#a1a1aa' }} />
                      </button>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                      {keyStylesFiltered.map(({ prop, value }) => {
                        const refKey = `key-${prop}`;
                        return (
                          <div 
                            key={prop}
                            style={{ 
                              display: 'flex', 
                              alignItems: 'flex-start', 
                              justifyContent: 'space-between',
                              fontSize: 13,
                              fontFamily: 'SFMono-Regular, Menlo, Monaco, Consolas, monospace',
                              lineHeight: 1.5
                            }}
                          >
                            <div style={{ flex: 1 }}>
                              <span style={{ color: '#93c5fd' }}>{prop}</span>
                              <span style={{ color: '#9ca3af' }}> : </span>
                              <span style={{ color: '#e5e7eb' }}>{value}</span>
                              <span style={{ color: '#9ca3af' }}> ;</span>
                            </div>
                            <button
                              ref={getIndividualCopyRef(refKey)}
                              onClick={() => handleCopyIndividualStyle(prop, value, refKey)}
                              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, marginLeft: 8 }}
                            >
                              <Copy style={{ width: 14, height: 14, color: '#a1a1aa' }} />
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Copy All Styles Button - Fixed at bottom of panel */}
          {selectedElement && (
            <div 
              style={{ 
                padding: 16,
                borderTop: '1px solid rgba(255,255,255,0.1)',
                backgroundColor: 'rgba(24, 24, 27, 0.98)',
                flexShrink: 0
              }}
            >
              <button
                ref={copyAllStylesRef}
                onClick={handleCopyAllStyles}
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 8,
                  borderRadius: 8,
                  color: 'white',
                  fontSize: 14,
                  fontWeight: 600,
                  padding: '12px 16px',
                  background: copyAllSuccess 
                    ? '#22c55e' 
                    : 'linear-gradient(to right, #5127c4, #9f27c4)',
                  boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s ease'
                }}
              >
                {copyAllSuccess ? (
                  <>
                    <Check style={{ width: 16, height: 16 }} />
                    Copied!
                  </>
                ) : (
                  'Copy All Styles'
                )}
              </button>
            </div>
          )}
        </div>
      )}

      {/* Minimized Button */}
      {isMinimized && (
        <button
          data-devtools="minimized"
          onClick={() => setIsMinimized(false)}
          className="flex items-center gap-[8px] px-[16px] py-[8px] rounded-[8px] border border-solid border-[rgba(255,255,255,0.2)] text-white text-[12px]"
          style={{
            position: 'fixed',
            left: panelPosition.x,
            bottom: panelPosition.y,
            zIndex: 9998,
            backgroundColor: 'rgba(24, 24, 27, 0.95)',
            boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
          }}
        >
          <Eye className="w-4 h-4" />
          Show Inspector
        </button>
      )}
    </>
  );
}
