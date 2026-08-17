"use client";

import { useEffect, useRef, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdDownload, MdOpenInNew } from "react-icons/md";

export default function ResumeMenu({ resumeLink }: { resumeLink: string }) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function closeOutside(event: PointerEvent) {
      if (!menuRef.current?.contains(event.target as Node)) setOpen(false);
    }
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return <div className={`resume-menu${open ? " open" : ""}`} ref={menuRef}>
    <button className="resume-trigger" type="button" aria-expanded={open} aria-haspopup="menu" onClick={() => setOpen(current => !current)}>Resume <FaChevronDown aria-hidden="true" /></button>
    {open ? <div className="resume-options" role="menu">
      {resumeLink ? <a role="menuitem" href={resumeLink} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}><MdOpenInNew aria-hidden="true" /><span><strong>View online</strong><small>Open resume in a new tab</small></span></a> : null}
      <a role="menuitem" href="/resume.pdf" download="Monish_P_N_Resume.pdf" onClick={() => setOpen(false)}><MdDownload aria-hidden="true" /><span><strong>Download PDF</strong><small>Save a copy to your device</small></span></a>
    </div> : null}
  </div>;
}
