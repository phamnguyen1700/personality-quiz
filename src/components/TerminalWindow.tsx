import type { ReactNode } from "react";

type TerminalWindowProps = {
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
};

export function TerminalWindow({ children, className = "", bodyClassName = "" }: TerminalWindowProps) {
  return (
    <section className={`terminal-window ${className}`}>
      <div className="terminal-titlebar">
        <span className="bg-red-500" />
        <span className="bg-yellow-400" />
        <span className="bg-green-400" />
      </div>
      <div className={`terminal-body ${bodyClassName}`}>{children}</div>
    </section>
  );
}
