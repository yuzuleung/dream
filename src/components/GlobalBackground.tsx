import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  src: string;
  alt?: string;
};

export function GlobalBackground({ src, alt = '' }: Props) {
  return (
    <div className="global-bg" aria-hidden="true">
      {/* use sync mode so old and new images can overlap for a natural crossfade */}
      <AnimatePresence mode="sync">
        <motion.img
          key={src}
          src={src}
          alt={alt}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          // exit only fades down to 0.5 so we avoid a white flash and can start other elements fading in
          exit={{ opacity: 0.5 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        />
      </AnimatePresence>
    </div>
  );
}

export default GlobalBackground;
