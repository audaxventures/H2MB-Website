export function ImageCaption({
  children,
  credit,
}: {
  children: React.ReactNode;
  credit?: string;
}) {
  return (
    <p className="mt-3 text-xs leading-relaxed text-ink-500">
      {children}
      {credit && <span className="text-ink-500/70"> — {credit}</span>}
    </p>
  );
}
