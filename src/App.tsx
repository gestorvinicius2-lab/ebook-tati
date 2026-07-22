import { useState, useEffect } from 'react';
import { Menu, X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { chapters, bookTitle } from './data/book';

export default function App() {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close sidebar on mobile when chapter changes
  useEffect(() => {
    if (isMobile) {
      setIsSidebarOpen(false);
    }
    // Scroll to top
    const container = document.getElementById('reader-scroll-container');
    if (container) {
      container.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentChapter, isMobile]);

  const handleNext = () => {
    if (currentChapter < chapters.length - 1) setCurrentChapter((p) => p + 1);
  };

  const handlePrev = () => {
    if (currentChapter > 0) setCurrentChapter((p) => p - 1);
  };

  // Helper to extract clean chapter title without the "Capítulo X — " part
  const getCleanTitle = (title: string) => {
    if (title.includes('—')) return title.split('—')[1].trim();
    if (title.includes('-')) return title.split('-')[1].trim();
    return title;
  };

  return (
    <>
      <div className="flex h-screen w-full bg-[#0A0A0A] overflow-hidden text-[#E0E0E0] font-sans select-none print:hidden">
        
        {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-[#0A0A0A] border-b border-[#E0E0E0]/10 flex items-center justify-between px-6 z-40">
        <div className="text-[10px] tracking-[0.3em] uppercase font-bold truncate max-w-[200px]">
          {bookTitle}
        </div>
        <div className="flex items-center gap-4">
          <button 
            onClick={() => window.print()}
            className="text-[#C5A059] hover:bg-[#C5A059]/10 p-2 rounded-sm transition-colors"
            title="Baixar E-book (PDF)"
          >
            <Download className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setIsSidebarOpen(true)}
            className="text-[#E0E0E0] transition-colors p-2"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Sidebar Overlay (Mobile) */}
      <AnimatePresence>
        {isMobile && isSidebarOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsSidebarOpen(false)}
            className="fixed inset-0 bg-[#0A0A0A]/80 z-40 backdrop-blur-sm"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {(!isMobile || isSidebarOpen) && (
          <motion.aside
            initial={isMobile ? { x: '-100%' } : false}
            animate={{ x: 0 }}
            exit={isMobile ? { x: '-100%' } : undefined}
            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
            className={`
              fixed lg:static top-0 left-0 bottom-0 z-50
              w-[280px] lg:w-[320px] bg-[#0A0A0A] border-r border-[#E0E0E0]/10
              flex flex-col flex-shrink-0
            `}
          >
            <div className="p-8 lg:p-12 border-b border-[#E0E0E0]/10 flex items-start justify-between">
              <div>
                <div className="text-[10px] tracking-[0.3em] uppercase font-bold mb-4">Index</div>
                <h1 className="font-serif italic text-2xl leading-tight text-[#E0E0E0]">
                  {bookTitle}
                </h1>
              </div>
              {isMobile && (
                <button 
                  onClick={() => setIsSidebarOpen(false)}
                  className="mt-1 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            <div className="flex-1 overflow-y-auto py-8">
              <nav className="px-8 lg:px-12 flex flex-col gap-6">
                {chapters.map((chapter, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentChapter(idx)}
                    className={`
                      text-left text-[10px] uppercase tracking-[0.15em] transition-all duration-200 flex items-baseline gap-4 group
                      ${currentChapter === idx 
                        ? 'font-bold text-[#E0E0E0]' 
                        : 'text-[#E0E0E0]/40 hover:text-[#E0E0E0]'
                      }
                    `}
                  >
                    <span className={`font-serif italic text-xs ${currentChapter === idx ? 'text-[#C5A059]' : 'group-hover:text-[#C5A059]'}`}>
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <span className="leading-relaxed">{getCleanTitle(chapter.title)}</span>
                  </button>
                ))}
              </nav>
            </div>
            
            <div className="p-8 lg:p-12 border-t border-[#E0E0E0]/10 flex flex-col gap-6">
               <button 
                 onClick={() => window.print()} 
                 className="flex items-center justify-center gap-2 w-full py-3 border border-[#C5A059]/30 hover:bg-[#C5A059]/10 text-[#C5A059] transition-colors rounded-sm uppercase tracking-widest text-[10px] font-bold"
               >
                 <Download className="w-4 h-4" /> Baixar E-book (PDF)
               </button>
               <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.2em] opacity-60">
                 <div>Vol. 01</div>
                 <div>{((currentChapter + 1) / chapters.length * 100).toFixed(0)}%</div>
               </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {/* Main Reader Area */}
      <main 
        id="reader-scroll-container"
        className="flex-1 overflow-y-auto relative bg-[#0A0A0A] pt-16 lg:pt-0 flex flex-col lg:pr-24"
      >


        <div className="max-w-3xl w-full mx-auto px-8 lg:px-16 py-12 lg:py-24 min-h-full flex flex-col relative">
          
          <AnimatePresence mode="wait">
            <motion.article
              key={currentChapter}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex-1"
            >
              <div className="mb-16">
                <div className="text-[10px] uppercase tracking-widest font-bold text-[#E0E0E0]/50 mb-4 flex items-center gap-4">
                  <span className="font-serif italic text-[#C5A059] text-sm">
                    {(currentChapter + 1).toString().padStart(2, '0')}
                  </span>
                  {currentChapter === 0 ? "Introduction" : "Chapter"}
                </div>
                <h2 className="font-serif text-5xl lg:text-7xl leading-[0.95] tracking-tighter text-[#E0E0E0] max-w-2xl">
                  {getCleanTitle(chapters[currentChapter].title)}
                </h2>
              </div>
              
              <div className="prose-editorial">
                {chapters[currentChapter].content}
              </div>
            </motion.article>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="mt-32 pt-8 border-t border-[#E0E0E0]/10 flex items-center justify-between gap-4 pb-12 lg:pb-0 text-[10px] uppercase tracking-[0.2em] font-bold">
            <button
              onClick={handlePrev}
              disabled={currentChapter === 0}
              className={`
                flex items-center gap-4 transition-all
                ${currentChapter === 0 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:text-[#C5A059]'
                }
              `}
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </button>
            
            <button
              onClick={handleNext}
              disabled={currentChapter === chapters.length - 1}
              className={`
                flex items-center gap-4 transition-all
                ${currentChapter === chapters.length - 1 
                  ? 'opacity-30 cursor-not-allowed' 
                  : 'hover:text-[#C5A059]'
                }
              `}
            >
              Next <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          
        </div>
      </main>
      
      {/* Sidebar Indicator (Desktop only) */}
      <div className="hidden lg:flex w-24 border-l border-[#E0E0E0]/10 flex-col justify-between py-12 items-center shrink-0 fixed right-0 top-0 bottom-0 bg-[#0A0A0A] z-10">
        <div className="text-3xl font-serif italic text-[#C5A059]">{(currentChapter + 1).toString().padStart(2, '0')}</div>
        <div className="rotate-[-90deg] whitespace-nowrap text-[10px] tracking-[0.5em] uppercase text-[#E0E0E0]/40 origin-center flex-1 flex items-center justify-center">
          Progression — {((currentChapter + 1) / chapters.length * 100).toFixed(0)}%
        </div>
        <div className="w-px h-24 bg-[#E0E0E0]/20"></div>
      </div>

      </div>

      {/* Print View */}
      <div className="hidden print:block w-full max-w-4xl mx-auto py-12 px-8 font-sans text-[#E0E0E0] bg-[#0A0A0A]">
        <div className="mb-24 mt-24 text-center page-break-after">
          <div className="text-sm uppercase tracking-[0.3em] font-bold mb-8 text-[#C5A059]">
            E-book
          </div>
          <h1 className="font-serif text-6xl leading-tight text-[#E0E0E0] max-w-2xl mx-auto">
            {bookTitle}
          </h1>
        </div>
        
        {chapters.map((chapter, idx) => (
          <div key={idx} className="page-break-after py-12">
            <div className="mb-12">
              <div className="text-[12px] uppercase tracking-widest font-bold text-[#C5A059] mb-4 flex items-center gap-4">
                <span className="font-serif italic text-[#C5A059] text-lg">
                  {(idx + 1).toString().padStart(2, '0')}
                </span>
                {idx === 0 ? "Introduction" : "Chapter"}
              </div>
              <h2 className="font-serif text-4xl leading-[1.1] text-[#E0E0E0]">
                {getCleanTitle(chapter.title)}
              </h2>
            </div>
            
            <div className="prose-editorial max-w-none text-[#E0E0E0]">
              {chapter.content}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

