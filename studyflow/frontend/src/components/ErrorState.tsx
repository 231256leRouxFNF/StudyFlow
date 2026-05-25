import { AlertCircle } from "lucide-react";
import { Button } from "./Button";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
}

export function ErrorState({
  title = "Something went wrong",
  message = "We encountered an error while loading this page. Please try again.",
  onRetry,
}: ErrorStateProps) {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
      <div className="w-16 h-16 mb-4 text-destructive flex items-center justify-center">
        <AlertCircle size={64} />
      </div>
      <h2 className="text-2xl mb-2 text-foreground">{title}</h2>
      <p className="text-muted-foreground mb-6 max-w-md">{message}</p>
      {onRetry && (
        <Button onClick={onRetry}>Try Again</Button>
      )}
    </div>
  );
}
