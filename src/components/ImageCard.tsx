interface ImageCardProps {
  src: string
  width: number
  height: number
  priority?: boolean
}

const SIZES =
  '(max-width: 379px) calc(100vw - 2.5rem), (max-width: 767px) calc(50vw - 1.75rem), (max-width: 1279px) calc(33.333vw - 1.5rem), calc(25vw - 1.5rem)'

export const ImageCard = ({
  src,
  width,
  height,
  priority = false,
}: ImageCardProps) => {
  const base = import.meta.env.VITE_BASE_URL
  const full = `${base}${src}`

  return (
    <div className="w-full break-inside-avoid">
      <img
        src={full}
        srcSet={`${full} 640w`}
        sizes={SIZES}
        width={width}
        height={height}
        className="block h-auto w-full"
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </div>
  )
}
