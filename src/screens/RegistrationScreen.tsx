import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Button } from '../components/Button'
import { PhotoUpload } from '../components/PhotoUpload'
import type { Player } from '../types/quiz'

type RegistrationScreenProps = {
  onSubmit: (player: Player) => void
  onBack: () => void
}

export function RegistrationScreen({ onSubmit, onBack }: RegistrationScreenProps) {
  const [name, setName] = useState('')
  const [photoUrl, setPhotoUrl] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const nameError = submitted && !name.trim()
  const photoError = submitted && !photoUrl

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    setSubmitted(true)

    if (!name.trim() || !photoUrl) {
      return
    }

    onSubmit({ name: name.trim(), photoUrl })
  }

  return (
    <main className="relative z-10 grid min-h-screen place-items-center px-4 py-6">
      <motion.form
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -12 }}
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-2xl border-2 border-sky bg-cream/95 p-4 shadow-soft sm:p-6"
      >
        <div className="text-center">
          <p className="font-hand text-base text-teal sm:text-lg">Chuẩn bị lên sân khấu nào</p>
          <h1 className="mt-1 font-display text-2xl font-black text-ink sm:text-3xl">Bạn tên là gì?</h1>
        </div>

        <div className="mt-5 grid gap-4">
          <label className="grid gap-2">
            <span className="font-display text-sm font-black text-brown sm:text-base">Họ và tên</span>
            <input
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Nhập tên của bạn"
              className="rounded-xl border-2 border-sky bg-white px-4 py-2.5 font-display text-base font-bold text-ink outline-none transition focus:border-orange"
            />
            {nameError ? <span className="text-xs font-bold text-orange">Tên là bắt buộc nha.</span> : null}
          </label>

          <div>
            <PhotoUpload previewUrl={photoUrl} onChange={setPhotoUrl} />
            {photoError ? <span className="mt-2 block text-xs font-bold text-orange">Bạn cần tải ảnh lên trước khi chơi.</span> : null}
          </div>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row">
          <Button type="button" variant="ghost" onClick={onBack} className="flex-1">
            Về trang đầu
          </Button>
          <Button type="submit" className="flex-1">
            Vào quiz ngay
          </Button>
        </div>
      </motion.form>
    </main>
  )
}
