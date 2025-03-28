import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";

interface IDialog {
  buttonTitle: string;
  title: string;
  description: string;
  agree: string;
  disagree: string;
  dialogAction: () => void;
}

export function Dialog({
  buttonTitle,
  title,
  description,
  agree,
  disagree,
  dialogAction,
}: IDialog) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="text-white dark:text-white bg-brand-blue hover:scale-x-105 hover:bg-brand-blue transition-transform">
          {buttonTitle}
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>{disagree}</AlertDialogCancel>
          <AlertDialogAction
            className="bg-brand-blue text-white"
            onClick={dialogAction}
          >
            {agree}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
