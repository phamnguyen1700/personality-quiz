import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { TerminalWindow } from "../components/TerminalWindow";

type NameScreenProps = {
  onSubmit: (name: string) => void;
};

export function NameScreen({ onSubmit }: NameScreenProps) {
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    setSubmitted(true);
    if (!name.trim()) {
      return;
    }
    onSubmit(name.trim());
  };

  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 py-8 text-white">
      <motion.form
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        onSubmit={handleSubmit}
        className="w-full max-w-[770px]"
      >
        <TerminalWindow bodyClassName="grid min-h-[340px] place-items-center bg-[#5a210f] px-5 py-12 text-center">
          <div className="w-full max-w-[520px]">
            <h1 className="mx-auto max-w-[440px] font-mono text-2xl font-black leading-tight text-white sm:text-[1.7rem]">
              Hãy đăng ký thẻ tham dự của bạn
            </h1>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="_MUDA_|"
              className="mt-7 h-[62px] w-full border-[3px] border-amber-300 bg-black px-5 text-center font-mono text-2xl uppercase text-green-300 outline-none placeholder:text-green-300/80 focus:border-green-400 sm:text-[1.65rem]"
              autoFocus
            />
            {submitted && !name.trim() ? (
              <p className="mt-3 font-mono text-sm font-bold text-amber-300">
                Nhập tên trước khi xuất phát.
              </p>
            ) : null}
            <Button type="submit" variant="secondary" className="mt-8 min-w-[230px] rounded-none">
              Bắt đầu&gt;
            </Button>
          </div>
        </TerminalWindow>
      </motion.form>
    </main>
  );
}
