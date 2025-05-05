type Props = {
    children: React.ReactNode;
  };
  
  export default function TextInStripe({ children }: Props) {
    return (
      <div className="relative flex items-center justify-center text-sm text-muted-foreground">
        <span className="flex-grow border-t border-border" />
        <span className="px-2 bg-background z-10">{children}</span>
        <span className="flex-grow border-t border-border" />
      </div>
    );
  }
  