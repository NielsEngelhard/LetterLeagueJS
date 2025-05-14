export default function CenterContent({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-[70dvh] flex flex-col justify-center items-center">
      {children}
    </div>
  );
}